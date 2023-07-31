import { useState, useEffect } from "react";
import UserContext from "./userContext";
import axios from "../Axios/axios";
const UserState = (props) => {
  const [user, setUser] = useState(null);
  const [alert, setAlert] = useState(null);
  const [startups, setStartups] = useState([]);
  const [startupData, setStartupData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [orderAmount, setOrderAmount] = useState(0);
  const [userStartup, setUserStartup] = useState([]);
  const [investmentData, setInvestmentData] = useState([]);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  let showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  useEffect(() => {
    getUserStartups();
    getUserData();
  }, []);

  // payment Gateway
  const loadRazorpay = () => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onerror = () => {
      showAlert("Razorpay SDK failed to load. Are you online?");
    };
    script.onload = async () => {
      try {
        setLoading(true);
        const result = await axios.post(
          "/api/investor/create-order",
          {
            amount: orderAmount * 100,
          },
          {
            headers: {
              "Content-Type": "application/json",
              "auth-token": localStorage.getItem("token"),
            },
          }
        );
        const { amount, id: order_id, currency } = result.data.order;
        const {
          data: { key: razorpayKey },
        } = await axios.get("/api/investor/get-razorpay-key", {
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
        });

        const options = {
          key: razorpayKey,
          amount: amount.toString(),
          currency: currency,
          name: "example name",
          description: "example transaction",
          order_id: order_id,
          handler: async function (response) {
            const result = await axios.post(
              "/api/investor/pay-order",
              {
                amount: amount / 100,
                razorpayPaymentId: response.razorpay_payment_id,
                razorpayOrderId: response.razorpay_order_id,
                razorpaySignature: response.razorpay_signature,
                investor_id: user._id,
                startup_id: startupData._id,
              },
              {
                headers: {
                  "Content-Type": "application/json",
                  "auth-token": localStorage.getItem("token"),
                },
              }
            );
            if (result.data.success) {
              showAlert(result.data.msg, "success");
              setPaymentSuccess(true);
            }
          },
          prefill: {
            name: "example name",
            email: "email@example.com",
            contact: "111111",
          },
          notes: {
            address: "example address",
          },
          theme: {
            color: "#80c0f0",
          },
        };
        setLoading(false);
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      } catch (err) {
        showAlert(err);
        setLoading(false);
      }
    };
    document.body.appendChild(script);
  };

  const getInvestmentData = async () => {
    const response = await axios
      .get("/api/investor/getTransactions", {
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      })
      .catch((error) => {
        console.log(error.response.data.msg);
      });
    if (response.data.success) {
      setInvestmentData(response.data.data);
    }
  };

  const getUserData = async () => {
    const response = await axios
      .get(`/api/auth/getuser`, {
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      })
      .catch((error) => {
        console.log(error.response.data.error);
      });
    setUser(response.data.data);
  };
  const getStartups = async () => {
    const response = await axios.get(`/api/investor/fetch-startups`, {
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });

    if (response.data.success) {
      setStartups(response.data.data);
    }
  };
  // for Startups DashBoard
  const getUserStartups = async () => {
    const response = await axios.get(`/api/investor/fetchuserStartups`, {
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });

    if (response.data.success) {
      setUserStartup(response.data.data);
    }
  };
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        getUserData,
        alert,
        showAlert,
        setStartups,
        startups,
        getStartups,
        setStartupData,
        startupData,
        loadRazorpay,
        setOrderAmount,
        orderAmount,
        getUserStartups,
        userStartup,
        getInvestmentData,
        investmentData,
        paymentSuccess,
        setPaymentSuccess,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
export default UserState;

import React, { useState, useEffect, useContext } from 'react';
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import register from "../images/register.png";
import UserContext from '../../Context/userContext';
import axios from '../../Axios/axios';
import Navbar from '../Landing Pages/Navbar';
const Signup = () => {
  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate("/dashboard");
    }
  }, []);

  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const navigate = useNavigate();
  const context = useContext(UserContext);
  let { showAlert } = context;
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const { name, email, password, cpassword } = credentials;
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.post(`/api/auth/create-user`, {
      name: name,
      email: email,
      password: password
    },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }).catch((error) => {
        showAlert(error.response.data.error, "danger");
        console.log(error.response.data.error);
      });
    console.log(response.data);
    if (response.data.success) {
      showAlert("Verification mail has been sent to your mail, Please Verify", "success");
      navigate("/login");
    }
    setCredentials({ name: "", email: "", password: "", cpassword: "" });
  };


  return (
    <>
      <Navbar />
      <div className="card mx-auto register__card">
        <form onSubmit={handleSubmit}>
          <div className="row g-0">
            <div className="col-lg-6 col-sm-12">
              <img src={register} className="img-fluid rounded-start signup__image" alt="signup" />
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="card-body">
                <div className="register__head">Welcome!</div>
                <div className="register__para">Register to continue</div>
                <div className="row">
                  <div className="col-md-12 col-sm-12">
                    <i className="fa-solid fa-user email__icon"></i>
                    <input type="text"
                      className="input__email"
                      placeholder="Enter Username"
                      id="name"
                      name="name"
                      value={credentials.name}
                      onChange={onChange}
                      required={true} />
                  </div>
                  <div className="col-md-12 col-sm-12">
                    <i className="fa-solid fa-user email__icon"></i>
                    <input type="email"
                      className="input__email"
                      placeholder="Enter Email"
                      id="email"
                      name="email"
                      value={credentials.email}
                      onChange={onChange}
                      required={true} />
                  </div>
                  <div className="col-md-12 col-sm-12">
                    <i className="fa-solid fa-lock password__icon"></i>
                    <input type="password"
                      className="input__password"
                      placeholder="Enter Password"
                      id="password"
                      name="password"
                      value={credentials.password}
                      onChange={onChange}
                      required={true}
                      minLength={6} />
                  </div>
                  <div className="col-md-12 col-sm-12">
                    <i className="fa-solid fa-lock password__icon"></i>
                    <input type="password"
                      className="input__password"
                      placeholder="Confirm Password"
                      id="cpassword"
                      name="cpassword"
                      value={credentials.cpassword}
                      onChange={onChange}
                      required={true}
                      minLength={6} />
                  </div>
                  <div className="col-md-12 col-sm-12 register__btn">
                    <button type="submit"
                      className="register__button"
                      value="Register"
                      hidden={
                        password === cpassword && password.length > 5 ? false : true
                      } >
                      Register
                    </button>
                  </div>
                  <div className="col-md-12 col-sm-12 go__signup">
                    <p className="text-center">Already a Member?<Link to="/login">Login</Link></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Signup;
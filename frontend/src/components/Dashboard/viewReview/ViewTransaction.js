import React, { useEffect, useState } from 'react';
import "./ViewTransaction.css";
import axios from '../../../Axios/axios';

const ViewTransaction = (props) => {
  const [investorName, setInvestorName] = useState("");
  useEffect(() => {
    const getuserName = async () => {
      const response = await axios.post('/api/investor/getUsersName', {
        userId: props.investor_id
      }, {
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            localStorage.getItem('token'),
        }
      }).catch((error)=>{
        console.log(error.response.data.msg);
      })
      if(response.data.success){
        setInvestorName(response.data.data)
      }
      else{
        console.log(response.data.msg);
      }
    }
    getuserName();
  }, [props.investor_id])

  return (
    <>
      <div className="card view_transaction_card">
        <div className="card-body">
          <h5 className="text-center text-muted">Username</h5>
          <p className="text-center">{investorName}</p>
          <div className="row">
            <div className="col-md-6">
              <p className="text-muted transac_amount">₹ {props.amount}</p>
            </div>
            <div className="col-md-6">
              <p className="text-muted transac_date">{props.date.toString().slice(0, 10)}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ViewTransaction;
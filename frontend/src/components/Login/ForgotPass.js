import React from 'react';
import "./ForgotPass.css";

const ForgotPass = () => {
  return (
      <>
        <div className="container">
            <div className="card forgotPassCard">
                <img src="https://cdn-icons-png.flaticon.com/512/1698/1698558.png" className="forgotPassImg" />
                <h3 className="forgotPassHead">Forgot Password?</h3>
                <label className="text-muted my-2">Email</label>
                <br />
                <input type="email" className="forgotPassInput" />
                <br />
                <button type="button" className="btn reset_btn">Reset Password</button>
            </div>
        </div>
      </>
  )
}

export default ForgotPass;
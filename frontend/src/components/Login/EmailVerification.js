import React from "react";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Success from '../success/Success';
import Failed from '../failed/Failed';
import axios from '../../Axios/axios';
const EmailVerification = () => {
  const [validUrl, setValidUrl] = useState(undefined);
  const param = useParams();
  useEffect(() => {
    const verifyEmailUrl = async () => {
      try {
        const response = await axios.post(`/api/auth/email/activation`,
          { Email_token: param.id },
          {
            headers: {
              "Content-Type": "application/json",
            },

          });
        console.log(response.data);
        setValidUrl(response.data.success);
      } catch (error) {
        console.log(error);
        setValidUrl(false);
      }
    };
    verifyEmailUrl();
  }, [param]);
  return (
    <div>
      {validUrl ? (
        <div className="container">
          <Success></Success>
        </div>
      ) : (
        <Failed></Failed>
      )}
    </div>
  );
}
export default EmailVerification;
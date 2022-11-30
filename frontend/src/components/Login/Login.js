import React, { useState, useEffect, useContext } from 'react';
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import UserContext from '../../Context/userContext';
import axios from '../../Axios/axios';
import Navbar from '../Landing Pages/Navbar';
const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const context = useContext(UserContext);
  let { showAlert } = context;
  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate("/dashboard");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(`/api/auth/login`,
      {
        email: credentials.email,
        password: credentials.password,
      }).catch((e) => {
        console.log(e.response.data.error);
        showAlert("Invalid Credentials please check!!!!!", "danger");
      })
    if (response.data.success) {
      // Save the authtoken and redirect
      localStorage.setItem("token", response.data.authtoken);
      showAlert("Logged In Successfully!!!", "success");
      navigate("/dashboard");
    }
    setCredentials({ email: "", password: "" });
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
        <Navbar />
        <div className="card mx-auto login__card">
          <form onSubmit={handleSubmit}>
            <div className="row g-0">
              <div className="col-lg-6 col-sm-12">
                <img src="https://bootstrapious.com/i/snippets/sn-registeration/illustration.svg" className="img-fluid rounded-start login__image" alt="login" />
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="card-body">
                  <div className="login__head">Welcome Back!</div>
                  <div className="login__para">Login to continue</div>
                  <div className="row">
                    <div className="col-md-12 col-sm-12">
                      <i className="fa-solid fa-user email__icon"></i>
                      <input type="email"
                        className="input__email"
                        placeholder="Enter Email"
                        id="email"
                        name="email"
                        value={credentials.email}
                        onChange={onChange} />
                    </div>
                    <div className="col-md-12 col-sm-12">
                      <i className="fa-solid fa-lock password__icon"></i>
                      <input type="password"
                        className="input__password"
                        placeholder="Enter Password"
                        id="password"
                        name="password"
                        value={credentials.password}
                        onChange={onChange} />
                    </div>
                    <div className="col-md-12 col-sm-12 login__btn">
                      <input type="submit" className="login__button" value="Login" />
                    </div>
                    <div className="col-md-12 col-sm-12 go__signup">
                      <p className="text-center">Not a Member?<Link to="/signup">SignUp</Link></p>
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

export default Login;
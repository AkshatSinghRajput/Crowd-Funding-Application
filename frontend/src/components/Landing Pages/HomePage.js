import React, { useState, useEffect } from "react";
import "./HomePage.css";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import main_image from '../images/main.png';

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate("/dashboard");
    }
  }, []);
  return (
    <>
          <>
            <Navbar />
            <div className="homepage">
              <div className="container">
                <div className="first__section text-center my-5">
                  <h1 className="main__heading">Discover how CrowdsClub can help empowering the Entreprenuers to make this world a better place.</h1>
                  <h2 className="main__desc my-3">" The people who are crazy enough to  think <br></br> they can change the world are the ones who do. "</h2>
                  <Link to="/signup" className="btn btn-primary my-5 main__btn"> Register here <span><i className="fa-solid fa-angle-right"></i></span></Link>
                  <h3 className="main__desc my-3">Be a responsible part in the mission to enlight<br></br> every single idea to bring more light in this world.</h3>
                </div>
                <div className="second__section">
                  <img src={main_image} alt="main_image" className="landing__image" />
                </div>
              </div>
            </div>
          </>
    </>
  )
}

export default Home;
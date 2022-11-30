import React, { useEffect, useState } from 'react';
import "./Vision.css";
import Navbar from "./Navbar";
import vision from "../images/vision.png";
import visionS from '../images/vision-1.png';

const Vision = () => {
  let [image, setImage] = useState(visionS);

  useEffect(() => {
    setTimeout(() => {
      setImage(vision);
    }, 1500);
  }, []);

  return (
    <>
    <Navbar />
          <div className="vision__main__container">
            <div className="container">
              <div className="first__section text-center my-5">
                <h1 className="vision__heading my-3">Our Vision</h1>
                <h2 className="vision__desc my-3">We are on a mission to make Crowdfunding Accessible,<br></br> Secure and Simple for every Young-Age Entrepreneur.</h2>
                <h2 className="vision__desc my-3">Our mission is to empower young-age Entrepreneurs and<br></br> encourage society to participate in Crowdfunding Ecosystem.</h2>
              </div>
              <div className="second__section">
                <img src={image} alt="main_image" className="vision__image" />
              </div>
            </div>
          </div>
    </>
  )
}

export default Vision;
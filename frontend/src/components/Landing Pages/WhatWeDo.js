import React, {useState, useEffect} from "react";
import { whatwedoobject } from "./whatwedoobject";
import "./WhatWeDo.css";
import Navbar from "./Navbar";

const WhatWeDo = () => {
  const resourceCopy = [...whatwedoobject];

  const resourceList = resourceCopy.map((el) => (
    <div className="col-md-6 col-sm-12">
      <div className="card card__body" id="card__body">
        
          <i className={`${el.icon} card__icon`}></i>
          <h3 className="card-title my-3 card__title">{el.title}</h3>
          
          <p className="card-text my-2 card__desc">{el.desc}</p>
      </div>
    </div>
  ));
  return (
    <>
    <Navbar />
        <div className="container-fluid main__section">
        <div className="container">
        <h1 className="text-center my-3 vision__heading">What We Do?</h1>
        <div className="row gy-5 my-5">{resourceList}</div>
        </div>
      </div>
    </>
  );
};

export default WhatWeDo;

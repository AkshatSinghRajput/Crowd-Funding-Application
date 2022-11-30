import React, { useState, useEffect } from "react";
import { resource } from "./resource";
import Navbar from "./Navbar";
import "./Resources.css";

const Resources = () => {
  const resourceCopy = [...resource];

  const resourceList = resourceCopy.map((el) => (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <div className="card card__body" style={{ width: "100%" }}>
        <img src={el.img} className="card-img-top p-1 resource_card_img" alt="resource-image" />
        <div className="card-body ">
          <h5 className="card-title card__title">{el.title}</h5>
          <p className="card-text my-3 card__desc">{el.desc}</p>
          <a href={el.link} target="_blank" className="btn my-3 butn">
            Read More
          </a>
        </div>
      </div>
    </div>
  ));
  return (
    <>
      <Navbar />
      <div className="resource_container">
        <div className="container my-5">
          <h1 className="text-center top__heading">
            Comparing The Top Online Fundraising And Crowdfunding Platforms
          </h1>
        </div>
        <div className="container-fluid">
          <table className="table table-bordered my-5 resource__table">
            <thead>
              <tr>
                <th scope="col" className="text-center heading">
                  Site
                </th>
                <th scope="col" className="text-center heading">
                  Total Raised
                </th>
                <th scope="col" className="text-center heading">
                  Supporters
                </th>
                <th scope="col" className="text-center heading">
                  Platform Fee
                </th>
                <th scope="col" className="text-center heading">
                  Payment Fee
                </th>
                <th scope="col" className="text-center heading">
                  Important To Know
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row" className="table__head">
                  <img
                    src="https://www.crowdfunding.com/wp-content/uploads/2021/11/gfm-press-green-png.png"
                    alt="image"
                    className="website__logo"
                  />
                </td>
                <td className="text-center">$9B</td>
                <td className="text-center">50M</td>
                <td className="text-center">0%</td>
                <td className="text-center">2.9% + $0.30</td>
                <td>
                  <i className="fa-solid fa-check right__icon"></i> Can quickly set
                  up withdraws and deposits take an average of 2-5 business days{" "}
                  <br />
                  <i className="fa-solid fa-check right__icon"></i> Coaching and
                  account support throughout the fundraising and donation
                  process
                  <br />
                  <i className="fa-solid fa-check right__icon"></i> Easy to use
                  fundraising tools make setup fast (e.g., mobile app and
                  superior add beneficiary feature) <br />
                  <i className="fa-solid fa-check right__icon"></i> The GoFundMe
                  Guarantee - in the very rare case that something isn’t right
                  with a fundraiser, donors may be eligible for a 100% refund of
                  their donation
                </td>
              </tr>
              <tr>
                <td scope="row" className="table__head">
                  <img
                    src="https://www.crowdfunding.com/wp-content/uploads/2017/11/Indiegogo_logo.png"
                    alt="image"
                    className="website__logo"
                  />
                </td>
                <td className="text-center">$1.5B</td>
                <td className="text-center">10M</td>
                <td className="text-center">5%</td>
                <td className="text-center">3.0% + $0.30</td>
                <td>
                  <i className="fa-solid fa-check right__icon"></i> Offers "flexible
                  funding" <br />
                  <i className="fa-solid fa-check right__icon"></i> Specializes in
                  technology and hardware product launches <br />
                  <i className="fa-solid fa-check right__icon"></i> Regular email
                  support hours; marketing and campaign strategy support
                </td>
              </tr>
              <tr>
                <td scope="row" className="table__head">
                  <img
                    src="https://www.crowdfunding.com/wp-content/uploads/2017/11/kickstarter-logo-light.png"
                    alt="image"
                    className="website__logo"
                  />
                </td>
                <td className="text-center">$3B</td>
                <td className="text-center">15M</td>
                <td className="text-center">5%</td>
                <td className="text-center">3.0% + $0.20</td>
                <td>
                  <i className="fa-solid fa-check right__icon"></i> Specializes in
                  creative projects with robust reward level feature <br />
                  <i className="fa-solid fa-xmark cross__icon"></i> 14-day wait to
                  withdraw and deposits take 5-7 business days <br />
                  <i className="fa-solid fa-xmark cross__icon"></i> Limited email
                  support hours <br />
                  <i className="fa-solid fa-xmark cross__icon"></i> Requires
                  Kickstarter approval to launch a fundraiser
                </td>
              </tr>
              <tr>
                <td scope="row" className="table__head">
                  <img
                    src="https://www.crowdfunding.com/wp-content/uploads/2017/11/fundly_logo.png"
                    alt="image"
                    className="website__logo"
                  />
                </td>
                <td className="text-center">$330M</td>
                <td className="text-center">NA</td>
                <td className="text-center">4.9%</td>
                <td className="text-center">2.9% + $0.30</td>
                <td>
                  <i className="fa-solid fa-check right__icon"></i> Can withdraw
                  immediately and deposits take 2-5 business days <br />
                  <i className="fa-solid fa-xmark cross__icon"></i> No donor
                  guarantee policy for fraud protection <br />
                  <i className="fa-solid fa-xmark cross__icon"></i> Limited email
                  support hours
                </td>
              </tr>
              <tr>
                <td scope="row" className="table__head">
                  <img
                    src="https://www.crowdfunding.com/wp-content/uploads/2017/11/JustGiving_logo.png"
                    alt="image"
                    className="website__logo"
                  />
                </td>
                <td className="text-center">NA</td>
                <td className="text-center">22M</td>
                <td className="text-center">
                  Nonprofits: <br /> 0-5% <br />
                  Personal: <br /> 0%
                </td>
                <td className="text-center">
                  Nonprofits: <br /> 2.9% <br />
                  Personal: <br /> 2.9% + $0.30
                </td>
                <td>
                  <i className="fa-solid fa-check right__icon"></i> Supports UK gift
                  aid <br />
                  <i className="fa-solid fa-xmark cross__icon"></i> 14-day wait to
                  withdraw and deposits take 6-10 business days <br />
                  <i className="fa-solid fa-xmark cross__icon"></i> No fraud
                  protection offered <br />
                  <i className="fa-solid fa-xmark cross__icon"></i> Limited email
                  support hours
                </td>
              </tr>
              <tr>
                <td scope="row" className="table__head">
                  <img
                    src="https://www.crowdfunding.com/wp-content/uploads/2017/11/facebook_logo.png"
                    alt="image"
                    className="website__logo"
                  />
                </td>
                <td className="text-center">NA</td>
                <td className="text-center">NA</td>
                <td className="text-center">
                  Personal: 6.9% + $0.30 Nonprofit: 0%
                </td>
                <td className="text-center">
                  Personal: 6.9% + $0.30 Nonprofit: 0%
                </td>
                <td>
                  <i className="fa-solid fa-check right__icon"></i> Can withdraw
                  immediately and deposits take 7+ days <br />
                  <i className="fa-solid fa-check right__icon"></i> Zero fees for
                  charities registered with Facebook <br />
                  <i className="fa-solid fa-xmark cross__icon"></i> Nonprofits must
                  undergo a 24-hour charity verification process, slowing down
                  setup <br />
                  <i className="fa-solid fa-xmark cross__icon"></i> No donor
                  guarantee policy
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="container my-5 card__container">
          <h1 className="text-center top__heading1 my-3">
            Know more about the Crowdfunding Ecosystem
          </h1>
          <div className="row gy-3">{resourceList}</div>
        </div>
      </div>
    </>
  );
};

export default Resources;

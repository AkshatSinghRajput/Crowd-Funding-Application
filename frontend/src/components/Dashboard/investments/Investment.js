import React, { useEffect, useContext, useState } from 'react';
import "./Investment.css";
import DashboardNavbar from "../DashboardNavbar";
import InvestmentCard from './InvestmentCard';
import UserContext from '../../../Context/userContext';
import { useNavigate } from 'react-router-dom';
const Investment = () => {
    const context = useContext(UserContext);
    let { investmentData, getInvestmentData } = context;
    const navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate("/login");
        }
        getInvestmentData();
    }, [])
    return (
        <>
            <DashboardNavbar />
            <div className="container">
                <h2 className="text-center my-3 investment_heading">Your Investments...</h2>
                <div className="row">
                    {(investmentData.length === 0) && <h1> You Don't Have Any Investments.....</h1>}
                    {(investmentData.length > 0) && (
                        investmentData.map((element) => {
                            return <div className="col-md-6 col-sm-12"><InvestmentCard key={element._id} data={element} /></div>
                        })
                    )}
                </div>
            </div>
        </>
    )
}

export default Investment;
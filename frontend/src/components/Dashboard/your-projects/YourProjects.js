import React, { useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import DashboardCard from '../dashboardCard';
import DashboardNavbar from '../DashboardNavbar';
import axios from '../../../Axios/axios';
import UserContext from '../../../Context/userContext';
const YourProjects = () => {
    const context = useContext(UserContext);
    const { getUserStartups, userStartup } = context;
    const navigate = useNavigate();
    useEffect(async () => {
        if (!localStorage.getItem('token')) {
            navigate("/login");
        }
        getUserStartups();
    }, [])
    const resourceList = userStartup.map((el) => (
        <DashboardCard key={el._id} el={el}></DashboardCard>
    ))
    return (
        <>
            <DashboardNavbar />
            {userStartup.length === 0 ? (<> <h2 className="text-center my-5" style={{ color: "rgb(225, 41, 246)" }}>No Projects To Be Shown...</h2></>) : <div className="container-fluid dashboard__container">

                <div className="container my-5">
                <h2 className="text-center my-5" style={{ color: "rgb(225, 41, 246)" }}>Your Projects...</h2>
                    <div className="row gy-3">
                        {resourceList}
                    </div>
                </div>
            </div>}
        </>
    )
}

export default YourProjects;
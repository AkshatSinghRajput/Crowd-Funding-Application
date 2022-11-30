import React, { useContext } from 'react';
import "./DashboardNavbar.css";
import profile from "../images/profile.png";
import { Link, useNavigate } from "react-router-dom";
import UserContext from '../../Context/userContext'
const DashboardNavbar = () => {
    const navigate = useNavigate();
    const context = useContext(UserContext);
    let { showAlert, setUser } = context;
    const handleLogout = () => {
        localStorage.removeItem('token');
        setUser(null)
        showAlert("Logged Out Successfully!!", "success");
        navigate("/login");
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark top__head">
                <div className="container-fluid">
                    <Link className="navbar-brand p-1 navbar__brand" to="/dashboard">CrowdsClub</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fa-solid fa-circle-chevron-down"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item p-1">
                                <a className="nav-link active nav__link" aria-current="page" href="#"><i className="fa-solid fa-bell"></i> <span className="nav__link__name">Notification</span> </a>
                            </li>
                            <li className="nav-item p-1">
                                <Link className="nav-link active nav__link" aria-current="page" to="/dashboard/create-startup"><i className="fa-solid fa-plus"></i> <span className="nav__link__name">Create Startup</span> </Link>
                            </li>
                            <li className="nav-item dropdown p-1">
                                <a className="nav-link dropdown-toggle active nav__link" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fa-solid fa-user"> <span className="nav__link__name">Profile</span> </i>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end dropdown__menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><Link className="dropdown-item" to="/dashboard/profile">Your Profile</Link></li>
                                    <li><Link className="dropdown-item" to="/dashboard/yourProject">Your Projects</Link></li>
                                    <li><Link className="dropdown-item" to="/dashboard/investments">Investments</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><button className="dropdown-item" style={{ color: "red" }} onClick={handleLogout}>Logout</button></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default DashboardNavbar;
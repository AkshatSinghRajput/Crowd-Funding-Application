import React from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
    return (
                <nav className="navbar navbar-expand-lg top__head">
                <div className="container-fluid">
                    <Link className="navbar-brand head" to="/">CrowdsClub</Link>
                    <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon togg__icon"></span>
                        {/* <i className="fa-solid fa-circle-caret-down togg__icon"></i> */}
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 sub__head">
                            <li className="nav-item sub__head__first">
                                <Link className="nav-link link__first" aria-current="page" to="/vision">Vision</Link>
                            </li>
                            <li className="nav-item sub__head__second">
                                <Link className="nav-link link__second" to="/whatwedo">What We Do</Link>
                            </li>
                            <li className="nav-item sub__head__third">
                                <Link className="nav-link link__third" to="/howwedoit">How We Do It</Link>
                            </li>
                            <li className="nav-item sub__head__fourth">
                                <Link className="nav-link link__fourth" to="/resources">Resources</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    )
}

export default Navbar;
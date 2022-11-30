import React, {useState, useEffect} from "react";
import "./Registered.css";
import Navbar from "../Navbar";

const Registered = () => {
    return (
        <>
        <Navbar />
                <div className="registered__main__container">
                <div className="container">
                    <h1 className="text-center my-3 startup__heading">For Entrepreneurs</h1>
                    <div className="registered my-5">
                        <div className="registered__heading text-center">
                            BRUSH UP THE BASICS
                        </div>
                        <div className="registered__container">
                            <div className="timeline my-5">
                                <div className="section left">
                                    <i className="icon fa fa-home"></i>
                                    <div className="content">
                                        <p>
                                            Know your idea's worth by doing research in domain
                                        </p>
                                    </div>
                                </div>
                                <div className="section right">
                                    <i className="icon fa-solid fa-shield"></i>
                                    <div className="content">
                                        <p>
                                            Go through the resources section to know the rules
                                        </p>
                                    </div>
                                </div>
                                <div className="section left">
                                    <i className="icon fa fa-user"></i>
                                    <div className="content">
                                        <p>
                                            Showcase your vision with an attractive website
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                <div className="registered my-5">
                    <div className="registered__heading text-center">
                        GET YOUR STARTUP REGISTERED
                    </div>
                    <div className="registered__container">
                        <div className="timeline my-5">
                            <div className="section left">
                                <i className="icon fa fa-home"></i>
                                <div className="content">
                                    <p>
                                        Fill all details in the registeration form and set a realisitic fund goal
                                    </p>
                                </div>
                            </div>
                            <div className="section right">
                                <i className="icon fa-solid fa-shield"></i>
                                <div className="content">
                                    <p>
                                        Verification part!! Wait for the verification
                                    </p>
                                </div>
                            </div>
                            <div className="section left">
                                <i className="icon fa fa-user"></i>
                                <div className="content">
                                    <p>
                                        Get a sharable link, and share as much as possible
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>



                <div className="container">
                    <h1 className="text-center my-3 startup__heading">For Investors</h1>
                    <div className="registered my-5">
                        <div className="registered__heading text-center">
                            THE INVESTORS'S PROCESS
                        </div>
                        <div className="registered__container">
                            <div className="timeline my-5">
                                <div className="section left">
                                    <i className="icon fa fa-home"></i>
                                    <div className="content">
                                        <p>
                                            Go through the basics in the resources section
                                        </p>
                                    </div>
                                </div>
                                <div className="section right">
                                    <i className="icon fa-solid fa-shield"></i>
                                    <div className="content">
                                        <p>
                                            Login or register yourself
                                        </p>
                                    </div>
                                </div>
                                <div className="section left">
                                    <i className="icon fa fa-user"></i>
                                    <div className="content">
                                        <p>
                                            Pick the one idea that you find worth investing
                                        </p>
                                    </div>
                                </div>
                                <div className="section right">
                                    <i className="icon fa-solid fa-shield"></i>
                                    <div className="content">
                                        <p>
                                            Visit website of your selected idea to know more
                                        </p>
                                    </div>
                                </div>
                                <div className="section left">
                                    <i className="icon fa fa-user"></i>
                                    <div className="content">
                                        <p>
                                            Choose a fund size and pay with a method of your convinience
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Registered;
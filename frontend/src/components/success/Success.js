import React from 'react';
import { Tick } from 'react-crude-animated-tick';
import "./Success.css";

const Success = () => {
    return (
        <>
            <div className="container">
            <div className="row verified_container">
                <div className="col-12 text-center verified text_shadows">SUCCESSFULLY VERIFIED</div>
                <div className="col-12">
                <Tick size={200} />
                </div>
            </div>
            </div>
        </>
    )
}

export default Success;
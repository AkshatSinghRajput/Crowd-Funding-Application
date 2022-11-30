import React, { useContext } from 'react';
import UserContext from '../../Context/userContext';
import "./Alert.css";

const Alert = () => {
    const context = useContext(UserContext);
    let { alert } = context;

    const SuccessAlert = () => {
        return (
            <>
                <div className="container my-5">
                    <div className="alert fade alert-simple alert-success alert-dismissible text-left font__family-montserrat font__size-16 font__weight-light brk-library-rendered rendered show">
                        <i className="start-icon far fa-check-circle faa-tada animated"></i>
                        <strong className="font__weight-semibold">Well done!</strong> {alert.message}
                    </div>
                </div>
            </>
        )
    }

    const FailedAlert = () => {
        return (
            <>
                <div className="container my-5">
                    <div className="alert fade alert-simple alert-danger alert-dismissible text-left font__family-montserrat font__size-16 font__weight-light brk-library-rendered rendered show" role="alert" data-brk-library="component__alert">
                        <i className="start-icon far fa-times-circle faa-pulse animated"></i>
                        <strong className="font__weight-semibold">Oh snap!</strong> {alert.message}
                    </div>
                </div>
            </>
        )
    }
    return (
        <>
            {/* <div className="toast show alert_box">
                <div className={`toast-header bg-${alert.type} text-white`}>
                    <strong className="me-auto">{alert.message}</strong>
                    <button type="button" className="btn-close" data-bs-dismiss="toast"></button>
                </div>
            </div> */}
            {(alert.type === "success") ? <SuccessAlert /> : <FailedAlert />}
        </>
    )
}

export default Alert;
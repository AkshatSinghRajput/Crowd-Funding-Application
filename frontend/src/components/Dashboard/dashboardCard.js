import React from 'react';
import './dashboardCard.css';
import { useNavigate, Link } from "react-router-dom";
const DashboardCard = (props) => {
    return (
        <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card dash__card__body">
                <img src={props.el.LogoUrl} className="card-img-top dash__card__image" alt="image" draggable={false} />
                <div className="card-body">
                    <h3 className="card-title dash__card__title">{props.el.Name}</h3>
                    <p className="card-text my-3 dash__card__desc">{(props.el.Description)}</p>
                    <br />
                    <Link to={`/dashboard/startup/${props.el._id}`} className="btn dash__card__butn">Read More</Link>
                </div>
            </div>
        </div>
    )
}

export default DashboardCard
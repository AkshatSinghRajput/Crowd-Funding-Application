import React, { useContext, useState, useEffect } from 'react';
import DashboardNavbar from '../DashboardNavbar';
import ViewTransaction from './ViewTransaction';
import "./ViewReview.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from '../../../Axios/axios';
import UserContext from '../../../Context/userContext';
const ViewReview = () => {
    const navigate = useNavigate();
    const param = useParams();
    const context = useContext(UserContext);
    const [reviewData, setReviewData] = useState({ rating: 0, totalReview: 0 });
    const [transaction, setTransactions] = useState([]);
    const { getUserData } = context;
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate("/login");
        }
        const getReviewData = async () => {
            const response1 = await axios.post('/api/investor/fetchstartupReview', {
                startup_id: param.id
            }, {
                headers: {
                    "Content-Type": "application/json",
                    "auth-token":
                        localStorage.getItem('token'),
                },
            }).catch((error) => {
                console.log(error.response.data.msg);
            });
            if (response1.data.success) {
                setReviewData(response1.data.ReviewData);
            } console.log(response1);
            const response2 = await axios.post('/api/investor/getStartupsTransactions', {
                startup_id: param.id
            }, {
                headers: {
                    "Content-Type": "application/json",
                    "auth-token":
                        localStorage.getItem('token'),
                },
            }).catch((error) => {
                console.log(error.response.data.msg)
            });
            if (response2.data.success) {
                setTransactions(response2.data.data);
            }
        }
        getUserData();
        getReviewData();
        console.log(param.id);
    }, [param.id])

    let array1 = Array(reviewData.rating).fill(reviewData.rating);
    console.log(reviewData)
    console.log(transaction);
    return (
        <>
            <DashboardNavbar />
            <div className="container my-3">
                <div className="row">
                    <div className="col-lg-3 col-md-12 col-sm-12 mb-3">
                        <div className="card review_card">
                            <div className="card-body">
                                <h3 className="text-center my-2">Review</h3>
                                <p className="star_label">Overall Rating</p>
                                <div className="ratings">
                                    {array1.map((element) => {
                                        return <img src="https://cdn-icons-png.flaticon.com/512/616/616489.png" className="mb-3 star_img" alt="rating-image" />
                                    })}
                                </div>
                                <h5 className="text-center text-muted">Total Reviews - <b>{reviewData.totalReview}</b></h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-12 col-sm-12 mb-3">
                        <div className="card transaction_card">
                            <div className="card-body">
                                <h2 className="text-center">Transactions</h2>
                                <div className="row">
                                    {transaction.map((element) => {
                                        return <div className="col-md-4 col-sm-6 my-3">
                                            <ViewTransaction amount={element.amount} date={element.date} investor_id={element.investor_id} />
                                        </div>
                                    })}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewReview;
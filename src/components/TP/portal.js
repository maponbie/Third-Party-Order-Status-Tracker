import React from "react";
import { useNavigate } from "react-router-dom";
import "./portal.css";

function Portal() {
    const navigate = useNavigate();

    const handlePlaceOrder = () => {
        navigate('/');
    };

    const handleTrackOrder = () => {
        navigate('/');
    };

    const handlePastOrder = () => {
        navigate('/');
    };

    return (
        <div className="portal-image-container">
            <div className="side-bar">
                <h2>SIDEBAR</h2>
            </div>
            <div className="main-portal">
                <h1>Dashboard</h1>
                <div className="order-row">
                    <div className="place-order" onClick={handlePlaceOrder}>
                        <h1>Place Order</h1>    
                    </div>
                    <div className="track-order" onClick={handleTrackOrder}>
                        <h1>Track Orders</h1>
                    </div>
                </div>
                <div className="order-row">
                    <div className="past-order" onClick={handlePastOrder}>
                        <h1>Past Orders</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portal;

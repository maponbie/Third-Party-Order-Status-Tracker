import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
    const navigate = useNavigate();

    const handleTP = () => {
        navigate('/TPLogin');
    };

    const handleMovers = () => {
        navigate('/MoverLogin');
    };


    return (
        <div className="background-image-container">
            <div className="container">
                <nav>
                    <h4 className="nav-heading">Third-Party-Orders</h4>
                </nav>
                <p>Welcome, Guests</p>

                <button className="third-party-account-button" onClick={handleTP}>
                    TP Account
                </button>

                <button className="movers-account-button" onClick={handleMovers}>Movers Account</button>
            </div>
        </div>
    );
}

export default Dashboard;

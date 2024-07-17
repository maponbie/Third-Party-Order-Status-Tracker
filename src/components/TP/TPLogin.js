import React, { useState } from "react"; // Import useState from React
import { useNavigate } from "react-router-dom";
import "./TPLogin.css";

function TPLogin() {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(true); // State for toggling between login and sign up
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here (login or sign up)
    };

    const switchForm = () => {
        setIsLogin(!isLogin); 
    };

    return (
        <div className="image-container">
            <nav>
                <h4 className="nav-heading">Third-Party-Orders</h4>
            </nav>

            <div className="tp-login-form">
                <h2>{isLogin ? 'TP Login' : 'TP Sign Up'}</h2>
                <form onSubmit={handleSubmit}>
                    {!isLogin && (
                        <>
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </>
                    )}
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
                </form>
                <button className="switch-button" onClick={switchForm}>
                    {isLogin ? 'Create an account' : 'Back to Login'}
                </button>
            </div>
        </div>
    );
}

export default TPLogin;

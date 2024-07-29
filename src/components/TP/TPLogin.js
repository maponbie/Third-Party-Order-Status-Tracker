import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TPLogin.css";

function TPLogin() {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(true);
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const endpoint = isLogin ? 'http://localhost:5000/api/tp_authentication' : 'http://localhost:5000/api/tp_registration';
        const payload = isLogin
            ? { username: formData.username, password: formData.password }
            : formData;

        console.log(`Submitting to ${endpoint} with payload: ${JSON.stringify(payload)}`);

        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            if (response.headers.get('Content-Type')?.includes('application/json')) {
                const data = await response.json();
                if (response.ok) {
                    localStorage.setItem('token', data.token);
                    navigate('/portal');
                } else {
                    throw new Error(data.message || 'Unknown error');
                }
            } else {
                throw new Error('Unexpected response format');
            }
        } catch (err) {
            console.error('Error:', err.message);
            alert('An error occurred. Please try again.');
        }
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

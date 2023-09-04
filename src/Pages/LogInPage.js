import React from "react";
import { useState } from "react";
import "../Styling/Form.css"
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { useNavigate } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL;

function Login (props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);

    const { isLoggedIn } = useContext(AuthContext);

    const navigate = useNavigate();

    const { storeToken, authenticateUser } = useContext(AuthContext);

    const handleEmailInput = (e) => setEmail (e.target.value);
    const handlePasswordInput = (e) => setPassword (e.target.value);
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) {
            setErrorMessage("Please fill in both email and password fields.");
            return;
        }

        const requestBody = { email, password };

        axios
           .post(`${API_URL}/auth/login`, requestBody)
           .then((response) => {
            const authToken = response.data.authToken;
            storeToken(authToken);
            console.log('JWT token', response.data.authToken);
            authenticateUser();
            navigate('/');
           })
           .catch((error) => {
            const errorDescription = error.response.data.message;
            setErrorMessage(errorDescription);
           })
    };


    return (
        <div className="container">
            <h1 className="title">Login</h1>
            <form onSubmit={handleSubmit} className="form">
            <div className="inputGroup">
            <label className="label">Email: </label>
            <input className="input"
                type="email"
                name="email"
                value={email}
                onChange={handleEmailInput}
                />

            <label className="label">Password:</label>
            <input className="input"
                 type="password"
                 name="password"
                 value={password}
                 onChange={handlePasswordInput}
                 />
            </div>
            {!isLoggedIn && (
                <>
                <label className="label">
                 <button className="button" type="submit">Log In</button>
                </label>
                </>
            )}
           </form>
           { errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
    )
}

export default Login;
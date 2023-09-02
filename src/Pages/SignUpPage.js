import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../Styling/Form.css"

const API_URL = "http://localhost:5005";

function SignupPage (props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState ("");
    const [errorMessage, setErrorMessage] = useState(undefined);

    const navigate = useNavigate();

    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);
    const handleName = (e) => setName (e.target.value);

    const handleSignUpSubmit = (e) => {
        e.preventDefault();
        const requestBody = { email, password, name };
        axios
            .post(`${API_URL}/auth/signup`, requestBody)
            .then((response) => {
                navigate('/login');
            })
            .catch((error) => {
                const errorDescription = error.response.data.message;
                setErrorMessage(errorDescription);
            })
    };

    return (
        <div className="container">
            <h1 className="title">Sign UP</h1>
            <form onSubmit={handleSignUpSubmit} className="form">
            <div className="inputGroup">
            <label className="label">Email: </label>
                <input className="input"
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleEmail}
                        />
            <label className="label">Password: </label>
                <input className="input"
                        type="password"
                        name="password"
                        value={password}
                        onChange={handlePassword}
                        />
            <label className="label">Name: </label>
                <input className="input"
                         type="name"
                         name="name"
                         value={name}
                         onChange={handleName}
                         />
            <label className="label">
            <button type="submit" className="button">Sign Up</button>
                </label>
                </div>
            </form>

        </div>
        
    )
}

export default SignupPage;

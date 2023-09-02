import React from "react";
import { useState } from "react";
import '../Styling/subscription.css';
import axios from "axios";
import SubscriberList from "../Pages/SubscribersList";

const API_URL = "http://localhost:5005" || "https://khalilovyusif-server.onrender.com";

function OnSubscribe ({ addSubscriber }) {
    const [title, setTitle] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState ('');
    const [setError] = useState("");
    
    const handleTitleInput = (e) => setTitle (e.target.value);
    const handleFirstNameInput = (e) => setFirstName (e.target.value);
    const handleLastNameInput = (e) => setLastName (e.target.value);
    const handleEmailInput = (e) => setEmail (e.target.value);
    const handleSubmit = (e) => {
        e.preventDefault();
        const newSubscriber = {title, firstName, lastName, email};


        axios
            .post(`${API_URL}/api/subscription`, newSubscriber)
            .then((response) => {
                console.log(response);
                // reset the state
                setTitle("");
                setFirstName("");
                setLastName("");
                setEmail("");
                addSubscriber.refreshBlogs();
            })
            .catch((error) => {
                setError("An Error occurred while adding a new subscriber.")
            })

    };

    return (
        <div>
            <div className="newsletter-container">
            <h1 className="newsletter-title">NEWSLETTER</h1>
            <form className="newsletter-form" onSubmit={handleSubmit}>
                <label className="newsletter-label">Title: </label>
                <select className="newsletter-select"
                     name='title'
                     value={title}
                     onChange={handleTitleInput}
                    >
                        <option value={null}></option>
                        <option value={"Mr."}>Mr.</option>
                        <option value={"Ms."}>Ms.</option>
                        <option value={"Miss"}>Miss</option>
                        <option value={"Dr."}>Dr.</option>
                    </select>
                
                <label className="newsletter-label">First Name: </label>
                <input className="newsletter-input"
                      type='text'
                      name='First Name'
                      value={firstName}
                      onChange={handleFirstNameInput}
                    />

                <label className="newsletter-label">Last Name: </label>
                <input className="newsletter-input"
                      type="text"
                      name="Last Name"
                      value={lastName}
                      onChange={handleLastNameInput}
                    />

                <label className="newsletter-label">Email address:</label>
                <input className="newsletter-input"
                      type="Email"
                      name="Email"
                      value={email}
                      onChange={handleEmailInput}
                    />
                <button className="newsletter-button" type="submit">Sign Up</button>      
            </form>
            </div>
            <div>
            <SubscriberList />
            </div>
        </div>
    );
}

export default OnSubscribe;
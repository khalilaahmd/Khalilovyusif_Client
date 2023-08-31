import React from "react";
import { useState } from "react";
import '../Styling/subscription.css';

function OnSubscribe (props) {
    const [title, setTitle] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState ('');

    const handleTitleInput = (e) => setTitle (e.target.value);
    const handleFirstNameInput = (e) => setFirstName (e.target.value);
    const handleLastNameInput = (e) => setLastName (e.target.value);
    const handleEmailInput = (e) => setEmail (e.target.value);
    const handleSubmit = (e) => {
        e.preventDefault();
        const newSubscriber = {title, firstName, lastName, email};

        console.log("submitted: ", newSubscriber);
        props.OnSubscribe (newSubscriber);
    }

    return (
        <div className="newsletter-container">
            <h1 className="newsletter-title">NEWSLETTER</h1>
            <form className="newsletter-form" onSubmit={handleSubmit}>
                <label className="newsletter-label">Title: </label>
                <select className="newsletter-select"
                     name='title'
                     value={title}
                     onChange={handleTitleInput}
                    >
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
    );
}

export default OnSubscribe;
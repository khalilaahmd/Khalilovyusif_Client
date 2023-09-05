import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/auth.context";
import "../Styling/subscribersList.css";

const API_URL = process.env.REACT_APP_API_URL;
// const API_URL = "http://localhost:5005";

function SubscriberList({ children }) {
    const [subscribers, setSubscribers] = useState([]);
    const { isLoggedIn, isLoading } = useContext(AuthContext);

    useEffect(() => {
        if (!isLoggedIn) return; // prevent fetching if user is not logged in
        const getAllSubscribers = () => {
            axios 
               .get(`${API_URL}/api/subscription`)
               .then((response) => setSubscribers(response.data))
               .catch((error) => console.log(error));
        };
        getAllSubscribers();
    }, [isLoggedIn]);

    if (isLoading) return <p>Loading ...</p>;

    if (isLoggedIn) {
        return (
            <div className="SubscriberList">
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {subscribers.map((subscriber) => (
                            <tr key={subscriber._id}>
                                <td>{subscriber.title}</td>
                                <td>{subscriber.firstName}</td>
                                <td>{subscriber.lastName}</td>
                                <td>{subscriber.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
           </div>
        );
    } else {
        return <>{children}</>;
    }
}

export default SubscriberList;
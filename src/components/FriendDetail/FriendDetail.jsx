import React from 'react';
import './FriendDetail.css'
import { useLoaderData, useNavigate } from 'react-router-dom';

const FriendDetail = () => {
    const friend = useLoaderData();
    const navigate = useNavigate()
    const goBack = () => {
        navigate(-1)
    }
    return (
        <div>
            <h1>Friend Detail:</h1>
            <h3>Name:{friend.name}</h3>
            <p>Phone:{friend.phone}</p>
            <p>Email:{friend.email}</p>
            <button onClick={goBack}>Go Back</button>
        </div>
    );
};

export default FriendDetail;
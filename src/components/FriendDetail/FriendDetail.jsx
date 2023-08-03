import React from 'react';
import './FriendDetail.css'
import { useLoaderData } from 'react-router-dom';

const FriendDetail = () => {
    const friend = useLoaderData();
    console.log((friend))
    return (
        <div>
            Friend Detail:
            <h3>Name:{friend.name}</h3>
            <p>Phone:{friend.phone}</p>
            <p>Email:{friend.email}</p>
        </div>
    );
};

export default FriendDetail;
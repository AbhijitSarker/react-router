import React from 'react';
import './Friend.css'
import { Link, useNavigate } from 'react-router-dom';


const Friend = ({ friend }) => {

    const { email, name, id, phone } = friend;

    const navigate = useNavigate();
    const handleRoute = () => {
        navigate(`/friend/${id}`)
    }

    return (
        <div className='friend'>
            <h3>{name}</h3>
            <p>{email}</p>
            <p>{phone}</p>
            <button onClick={handleRoute}>Details</button>
        </div >
    );
};

export default Friend;
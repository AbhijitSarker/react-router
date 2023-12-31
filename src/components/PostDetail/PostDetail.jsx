import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetail = () => {
    const post = useLoaderData()
    const { id, title, userId, body } = post;
    const navigate = useNavigate()
    const goBack = () => {
        navigate(-1)
    }
    return (
        <div>
            <h1>Post Details</h1>
            <h3>{title}</h3>
            <p>{body}</p>
            <button onClick={goBack}>Go Back</button>
        </div>
    );
};

export default PostDetail;
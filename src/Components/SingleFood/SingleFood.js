import React from 'react';
import { useParams } from 'react-router-dom';

const SingleFood = () => {
    const {Id} = useParams()
    return (
        <div>
            <h3>This is Single Food - {Id}</h3>
        </div>
    );
};

export default SingleFood;
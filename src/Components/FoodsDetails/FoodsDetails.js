import React from 'react';
import { Col } from 'react-bootstrap';
import './FoodsDetails.css'
import { Link } from "react-router-dom";

const FoodsDetails = ({food}) => {
    const {id, title, image, description, price, categories} = food;
    return (
        <>
           <Col xs={12} md={4}>
                <div className="single-food text-center mb-5 py-5">
                    <img src={image} className='mb-3' width='45%' alt="" />
                    <h5><Link to={`/food/${title}`}>{title}</Link></h5>
                    
                    <p className='my-2'> {description}</p>
                    <span className='fw-bold'>{price}</span>
                </div>
           </Col> 
        </>
    );
};

export default FoodsDetails;
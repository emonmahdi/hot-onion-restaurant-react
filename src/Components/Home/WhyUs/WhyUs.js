import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './WhyUs.css'


const WhyUs = () => {
    const [choose, setChoose] = useState('');


    useEffect( () => {
        fetch('./records.json')
            .then(res => res.json())
            .then((data) => setChoose(data))
    }, [])

    return (
        <div className='whyusbody'>
           <div className="container">
            <div className="top-title">
                <h2>Why you Choose us</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex earum quisquam praesentium illum deserunt impedit fugit neque consequatur expedita tenetur!</p>
            </div>
           </div>
           <div className="container">
            <div className="row">
                {choose && choose.map((item) => {
                    const {id, title, img, desc} = item;
                    return <div key={id} className="col-lg-4">
                        <div className="card">
                            <img src={img} className='card-img-top img-fluid' alt="" />
                            <div className="card-body d-flex">
                                <div> 
                                    <h4 className='icons me-3'><i className='fa fa-user'></i></h4>
                                </div>
                                <div>
                                    <h5>{title}</h5>
                                    <p>{desc}</p>
                                    <button className='btn btn-text text-danger'>See More </button>
                                </div>
                                
                            </div>
                            
                        </div>
                    </div>
                })}
            </div>
           </div>
        </div>
    );
};

export default WhyUs;
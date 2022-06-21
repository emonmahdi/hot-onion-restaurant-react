import React from 'react';
import './HeaderBanner.css'


const HeaderBanner = () => {
    return (
        <div id='headerBanner'> 
              <div className="header-content">
                  <div className="header-title">
                      <h1>Best Food Waiting for your belly</h1>
                  </div>
                  <div className="search-box">
                      <input type="text" className='form-control' placeholder='Search food items' />
                      <button className='btn btn-danger'>Search</button>
                  </div>
              </div>
        </div> 
    );
};

export default HeaderBanner;
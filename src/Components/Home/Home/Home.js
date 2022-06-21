import React from 'react';
import HeaderBanner from '../../HeaderBanner/HeaderBanner';
import FoodsItems from '../FoodsItems/FoodsItems'; 
import WhyUs from '../WhyUs/WhyUs';

const Home = () => {
    return (
        <div> 
            <HeaderBanner />
            <FoodsItems />
            <WhyUs />
        </div>
    );
};

export default Home;
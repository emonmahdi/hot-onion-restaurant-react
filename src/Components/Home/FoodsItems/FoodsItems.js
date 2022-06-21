import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import FoodsDetails from '../../FoodsDetails/FoodsDetails';
import './FoodsItems.css'


const FoodsItems = () => {
    const [foods, setFoods] = useState([]);
    const [breakfast, setBreakfast] = useState('')

    useEffect(() => {
        fetch('../foods.json')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])


    const handleBreakFastItems = () => {
       const filterItem = foods.find((item) => item.categories === 'breakfast');
       setBreakfast(filterItem)
    }

    return (
        <div id="foods-items-section">
            <Container>
                <div className="categories-btn">
                    <button onClick={handleBreakFastItems}>Breakfast</button> 
                    <button>Lunch</button> 
                    <button>Dinner</button> 
                </div>
                <Row>
                    {
                        foods.map(food =>  <FoodsDetails
                        key={food.id}
                        food={food}
                        ></FoodsDetails>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default FoodsItems;
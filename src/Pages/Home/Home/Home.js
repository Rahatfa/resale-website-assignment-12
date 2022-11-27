import React from 'react';
import Categories from '../Categories/Categories';
import Reviews from '../Reviews/Reviews';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div className='mx-5'>
            <Slider></Slider>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;
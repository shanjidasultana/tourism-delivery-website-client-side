import React from 'react';
import ChoseUs from '../../Components/ChoseUs/ChoseUs';
import Banner from '../../Components/Header/Banner';
import MoreServies from '../../Components/MoreServices/MoreServies';
import Tours from './Tours/Tours';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tours></Tours>
            <MoreServies></MoreServies>
            <ChoseUs></ChoseUs>
            
        </div>
    );
};

export default Home;
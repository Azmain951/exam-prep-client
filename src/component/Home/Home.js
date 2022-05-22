import React from 'react';
import Banner from '../Banner/Banner';
import Books from '../Books/Books';
import ModelTest from '../ModelTest/ModelTest';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ModelTest></ModelTest>
            <Books></Books>
        </div>
    );
};

export default Home;
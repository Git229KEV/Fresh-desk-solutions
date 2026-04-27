import React from 'react';
import Hero from './Hero';
import InformativeSection from './InformativeSection';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <div className="home-container">
            <Hero />
            <InformativeSection />
        </div>
    );
};

export default Home;

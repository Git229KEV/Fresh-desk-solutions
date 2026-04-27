import React from 'react';
import './Hero.css';
/* We'll use the background image via CSS or imported here */
import bgImage from '../assets/hero-bg.png';

const Hero = () => {
    return (
        <div className="hero-section">
            <div className="hero-bg-wrapper">
                <img src={bgImage} alt="Building" className="hero-bg-img" />
                <div className="hero-overlay-shapes"></div>
            </div>

            <div className="hero-content container">
                <div className="hero-text-block">
                    <h1>Empowering Smarter<br />Property Experiences,<br />Together.</h1>

                </div>


            </div>
        </div>
    );
};

export default Hero;

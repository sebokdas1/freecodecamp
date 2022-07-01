import React from 'react';
import { FaAmazon, FaApple, FaMicrosoft, FaSpotify } from 'react-icons/fa';
import './Intro.css'


const Intro = () => {
    return (
        <div>
            <h1>Learn to code — for free.</h1>
            <h1>Build projects.</h1>
            <h1>Earn certifications.</h1>
            <h4>Since 2014, more than 40,000 freeCodeCamp.org graduates have gotten jobs at tech companies including:
            </h4>
            <div className='companys'>
                <h3><FaApple /></h3>
                <h3>Google</h3>
                <h3><span className='microsoft'><FaMicrosoft /></span> Microsoft</h3>
                <h3><FaSpotify />Spotify</h3>
                <h3><FaAmazon />Amazon</h3>
            </div>
        </div>
    );
};

export default Intro;
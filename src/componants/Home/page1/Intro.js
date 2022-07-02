import React from 'react';
import { FaAmazon, FaApple, FaMicrosoft, FaSpotify } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Intro.css'


const Intro = () => {
    return (
        <div>
            <div className='  mx-auto pt-12 intro-container'>
                <h1 >Learn to code — for free.</h1>
                <h1 >Build projects.</h1>
                <h1 >Earn certifications.</h1>
                <h4>Since 2014, more than 40,000 freeCodeCamp.org graduates have gotten jobs at tech companies including:
                </h4>
                <div className='companys mt-2'>
                    <h3><FaApple /></h3>
                    <h3>Google</h3>
                    <h3 className="flex items-center"><span className=''><FaMicrosoft /></span> Microsoft</h3>
                    <h3 className='flex items-center'><FaSpotify />Spotify</h3>
                    <h3 className='flex items-center'><FaAmazon />Amazon</h3>
                </div>
                <div className='link-div mx-auto'>
                    <Link className='' to="courses">Get started (it's free)</Link>
                </div>
            </div>
        </div>
    );
};

export default Intro;
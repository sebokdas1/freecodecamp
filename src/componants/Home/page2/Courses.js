import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import './Courses.css'

const Courses = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('https://freecodecam-p.herokuapp.com/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>
            <Navbar />
            <div className='courses-container mx-auto'>
                <h1>Welcome to freeCodeCamp.org</h1>
                <h3>"Ihave not failed. I've just found 10000 ways that won't work."</h3>
                <p>- Thomas A. Edison</p>
            </div>
            <div className='course-container mx-auto'>
                {
                    courses?.map(course => <div key={course._id}>
                        <img src={course.logo} alt="" />
                        <h2 className='pl-2'>{course.name} ({course.duration} hours) </h2>
                        <h2 className='hidden lg:block'><FontAwesomeIcon icon={faAnglesRight}></FontAwesomeIcon></h2>
                    </div>)
                }
            </div>
        </div>

    );
};

export default Courses;
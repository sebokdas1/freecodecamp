import React, { useEffect, useState } from 'react';
import './Courses.css'

const Courses = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    console.log(courses.length)
    return (
        <div>
            <div className='courses-container mx-auto'>
                <h1>Welcome to freeCodeCamp.org</h1>
                <h3>"Ihave not failed. I've just found 10000 ways that won't work."</h3>
                <p>- Thomas A. Edison</p>
            </div>
            <div className='course-container mx-auto'>
                {
                    courses.map(course => <div>
                        <h2>{course.name} ({course.duration} hours)</h2>
                    </div>)
                }
            </div>
        </div>

    );
};

export default Courses;
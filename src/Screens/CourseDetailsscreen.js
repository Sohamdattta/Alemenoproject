// components/CourseDetails.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../Styles/CourseDetails.css';

const CourseDetails = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    // Fetch details for the selected course
    axios.get(`http://localhost:1111/courses/${courseId}`)
      .then(response => {
        setCourse(response.data);
      })
      .catch(error => {
        console.error('Error fetching course details:', error);
      });
  }, [courseId]);

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <div className="course-details-container">
      <div className="course-details-header">
        <h2>{course.name}</h2>
      </div>
      <div className="course-details-content">
        <p><strong>Instructor:</strong> {course.instructor}</p>
        <p><strong>Description:</strong> {course.description}</p>
        <p><strong>Status:</strong> {course.enrollmentStatus}</p>
        <p><strong>Duration:</strong> {course.duration}</p>
        <p><strong>Schedule:</strong> {course.schedule}</p>
        <p><strong>Location:</strong> {course.location}</p>
        <p><strong>Prerequisites:</strong> {course.prerequisites.join(', ')}</p>
        <details>
          <summary><strong>Syllabus:</strong></summary>
          <ul className="syllabus-list">
            {course.syllabus.map(item => (
              <li key={item.week} className="syllabus-item">
                <h4>Week {item.week}: {item.topic}</h4>
                <p>{item.content}</p>
              </li>
            ))}
          </ul>
        </details>
      </div>
    </div>
  );
};

export default CourseDetails;

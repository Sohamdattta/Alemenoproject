// CourseList.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/CourseList.css';

const CourseList = ({ courses }) => {
  // Check if courses is null or not an array
  if ( !Array.isArray(courses)) {
    return <div>Loading...</div>;
  }

  // Check if courses array is empty
  if (courses.length === 0) {
    return <div>No courses available</div>;
  }

  return (
    <div className="course-list-container">
      {courses.map((course) => (
        <div key={course.id} className="course-card">
          <h3>{course.name}</h3>
          <p>Instructor: {course.instructor}</p>
          {/* Display other basic information */}
          <Link to={`/course/${course.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default CourseList;

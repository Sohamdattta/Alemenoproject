// StudentDashboard.js

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEnrolledCourses } from '../Action/studentActions';

const StudentDashboard = () => {
  const dispatch = useDispatch();
  const enrolledCourses = useSelector((state) => state.students.enrolledCourses);

  // State to track completed courses
  const [completedCourses, setCompletedCourses] = useState([]);

  useEffect(() => {
    // Fetch enrolled courses when the component mounts
    dispatch(fetchEnrolledCourses());
  }, [dispatch]);

  const markAsCompleted = (courseId) => {
    // Logic to mark a course as completed
    setCompletedCourses((prevCompletedCourses) => [...prevCompletedCourses, courseId]);
  };

  if (!enrolledCourses || enrolledCourses.length === 0) {
    return (
      <div>
        <h2>No Enrolled Courses</h2>
        {/* You can provide additional content or a message */}
      </div>
    );
  }

  return (
    <div>
      <h2>Student Dashboard</h2>
      {/* Render the enrolled courses here */}
      {enrolledCourses.map((course) => (
        <div key={course.id}>
          <h3>{course.name}</h3>
          <p>Instructor: {course.instructor}</p>
          <img src={course.thumbnail} alt={course.name} style={{ width: '100px', height: '100px' }} />
          <p>Duration: {course.duration}</p>
          <div>
            {/* Progress bar */}
            <progress value={completedCourses.includes(course.id) ? 100 : 0} max={100} />
          </div>
          <button onClick={() => markAsCompleted(course.id)}>
            Mark as Completed
          </button>
        </div>
      ))}
    </div>
  );
};

export default StudentDashboard;

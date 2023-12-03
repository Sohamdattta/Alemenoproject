// CourseListingPage.js

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourses } from '../Action/courseAction';
import CourseList from '../Components/CourseList';
import '../Styles/CourseList.css';
const CourseListingPage = () => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses.courses);
  console.log('Coursessssssssss:', courses);
  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  return (
    <div>
      <h1 className='home-container'>Course Listing Page</h1>
      <CourseList courses={courses} />
    </div>
  );
};

export default CourseListingPage;

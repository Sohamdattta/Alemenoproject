// Example: studentsReducer.js
import {
    FETCH_ENROLLED_COURSES_SUCCESS,
    FETCH_ENROLLED_COURSES_FAILURE,
  } from '../Action/studentActions';
  
  const initialState = {
    enrolledCourses: [],
    // Other properties if any
  };
  
  const StudentsReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_ENROLLED_COURSES_SUCCESS:
        return {
          ...state,
          enrolledCourses: action.payload,
        };
      case FETCH_ENROLLED_COURSES_FAILURE:
        // Handle failure if needed
        return state;
      default:
        return state;
    }
  };
  
  export default StudentsReducer;
  
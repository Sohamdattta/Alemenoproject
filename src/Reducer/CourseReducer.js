// reducers/courseReducer.js

const initialState = {
    courses:[],
    enrolledCourses: [],
  };
  
  const CourseReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_COURSES':
        console.log('Action payload:', action.payload);
        return { ...state, courses: action.payload };
      // Add more cases for other actions
      default:
        return state;
    }
  };
  
  export default CourseReducer;
  
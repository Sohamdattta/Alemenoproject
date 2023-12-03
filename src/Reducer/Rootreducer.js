// rootReducer.js

import { combineReducers } from 'redux';
import StudentsReducer from './studentReducer';
import CourseReducer from './CourseReducer';

const RootReducer = combineReducers({
  students: StudentsReducer,
  courses: CourseReducer
});

export default RootReducer;

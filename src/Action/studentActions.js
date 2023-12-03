// studentActions.js

export const FETCH_ENROLLED_COURSES_REQUEST = 'FETCH_ENROLLED_COURSES_REQUEST';
export const FETCH_ENROLLED_COURSES_SUCCESS = 'FETCH_ENROLLED_COURSES_SUCCESS';
export const FETCH_ENROLLED_COURSES_FAILURE = 'FETCH_ENROLLED_COURSES_FAILURE';

// Action creators
export const fetchEnrolledCoursesRequest = () => ({
  type: FETCH_ENROLLED_COURSES_REQUEST,
});

export const fetchEnrolledCoursesSuccess = (courses) => ({
    type: FETCH_ENROLLED_COURSES_SUCCESS,
    payload: Array.isArray(courses) ? courses : [],
  });

export const fetchEnrolledCoursesFailure = (error) => ({
  type: FETCH_ENROLLED_COURSES_FAILURE,
  payload: error,
});

// Async action creator using Redux Thunk
export const fetchEnrolledCourses = () => async (dispatch) => {
  dispatch(fetchEnrolledCoursesRequest());

  try {
    // Perform the API call to fetch enrolled courses
    const response = await fetch('http://localhost:1111/courses');
    console.log(response)
    const data = await response.json();

    dispatch(fetchEnrolledCoursesSuccess(data));
  } catch (error) {
    dispatch(fetchEnrolledCoursesFailure(error.message));
  }
};

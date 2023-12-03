// Your action creator

const fetchCourses = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('http://localhost:1111/courses');
      const data = await response.json();
      console.log('Response Data:', data);
      dispatch({ type: 'FETCH_COURSES', payload: data });
    } catch (error) {
      console.error('Error fetching courses', error);
    }
  };
};

export { fetchCourses };

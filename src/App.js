// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CourseListingPage from './Screens/CourseListscreen';
import CourseDetails from './Screens/CourseDetailsscreen';
import StudentDashboard from './Screens/StudentDashboardscreen';
import { Link } from 'react-router-dom';
import './App.css'
const App = () => {
  return (
    <Router>
      {/* <Routes>
        
        <Route path="*" element={<Home />} />
        
        <Route path="/course/:courseId" element={<CourseDetails />} />
        <Route path="/dashboard" element={<StudentDashboard />} />
      </Routes> */}
       <div className="app-container">
        {/* Navigation Bar */}
        <nav className="navbar">
          <div className="navbar-left">
            <Link to="/">IT HUB</Link>
          </div>
          <div className="navbar-right">
            <Link to="/dashboard">Student Dashboard</Link>
          </div>
        </nav>

        {/* Banner Section */}
        <div className="banner-section">
          <img src='https://www.clariwell.in/resources/best-java-certification-course-top-training-institute-in-pune.webp'/>
        </div>

        {/* Content Area */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course/:courseId" element={<CourseDetails />} />
          <Route path="/dashboard" element={<StudentDashboard />} />
        </Routes>
       
      </div>
    </Router>
  );
};

const Home = () => {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<CourseListingPage />} />
        <Route path="/course/:courseId" element={<CourseDetails />} />
        <Route path="/dashboard" element={<StudentDashboard />} />
      </Routes>
    </div>
  );
};

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';  // Import the Login component
import Signup from './components/Signup';  // Import the Signup component (if created)
import Home from './components/Home';  // Import the Signup component (if created)
// import Homepage from './components/Homepage';  // Import the Signup component (if created)
// import './App.css';  // Import global styles

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Define routes for Login and Signup components */}
          <Route path="/" element={<Login />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Home" element={<Home />} />
          {/* <Route path="/Homepage" element={<Homepage />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;

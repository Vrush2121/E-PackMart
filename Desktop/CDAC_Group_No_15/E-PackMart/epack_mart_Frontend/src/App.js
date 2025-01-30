import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomeComp from './Home';
import Login from './loginpage';
import Register from './registerpage';
import pic1 from './logo.jpeg';
import { useSelector } from 'react-redux';

function App() {



  return (

    <div>
      
    
      
      <nav className="navbar">
        <div className="logo">
          <img src={pic1} alt="e_packmart Logo" className="logo-image" />
        </div>

        <div className="nav-links">
          {/* Left Navigation */}
          <div className="left-nav">
            <a href="/">Home</a>
            <div className="dropdown">
              <button className="dropbtn">Category</button>
              <div className="dropdown-content">
                <a href="/plastic-films">Plastic Films</a>
                <a href="/corrugated-boxes">Corrugated Boxes</a>
                <a href="/paper-packaging">Paper Packaging</a>
                <a href="/flexible-packaging">Flexible Packaging</a>
              </div>
            </div>
            <a href="/about">About Us</a>
            <a href="/contact">Contact Us</a>
          </div>

          {/* Right Navigation */}
          <div className="right-nav">
          <div className="dropdown">
          <a href="/login/admin"><button className="dropbtn">Login</button></a>
          <div className="dropdown-content">
          {/* <a href="/login/admin">Admin</a>
          <a href="/login/vendor">Vendor</a>
          <a href="/login/customer">Customer</a> */}
          </div>
          </div>
          <div className="dropdown">
            <a href="/register/admin"><button className="dropbtn">Register</button></a>
            <div className="dropdown-content">
              {/* <a href="/register/admin">Admin</a>
              <a href="/register/vendor">Vendor</a>
              <a href="/register/customer">Customer</a> */}
            </div>
          </div>
          </div>
        </div>
      </nav>

      {/* <Router> */}
      <div className="App">
        <header className="App-header">
          {/* Define the routes here */}
          <Routes>
            <Route path="/" element={<HomeComp />} />
            <Route path="/login/:userType" element={<Login />} />
            <Route path="/register/:userType" element={<Register />} />
          </Routes>
        </header>
      </div>
    {/* </Router> */}
    </div>
  );
}

export default App;


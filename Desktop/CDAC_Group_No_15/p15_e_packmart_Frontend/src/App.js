import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomeComp from './components/Home';
import Login from './components/loginpage';
import Register from './components/registerpage';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import CompanyHome from './components/CompanyHome';
import CustomerHome from './components/CustomerHome';

function App() {
  return (

    <div>
           {<Navbar/>}

      {/* <Router> */}
      <div className="App">
        <header className="App-header">
          {/* Define the routes here */}
          <Routes>
            <Route path="/" element={<HomeComp />} />
            <Route path="/login/:userType" element={<Login />} />
            <Route path="/register/:userType" element={<Register />} />
            <Route path="/customerHome" element={<CustomerHome/>} />
            <Route path='/CompanyHome' element={<CompanyHome/>} />
          </Routes>
        </header>
      </div>
    {/* </Router> */}
    </div>
  );
}

export default App;


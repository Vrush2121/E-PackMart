import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import pic1 from './pictures/logo.jpeg';
import { clearUser } from './userSlice';
import "./style/Navbar.css"; // CSS file for styling

export default function Navbar() {

    const { user, loggedIn } = useSelector((state)=>state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout =()=>{
        dispatch(clearUser());
        navigate("/");
      }
  return (
    <div style={{display:loggedIn?'none':'block'}}>
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
          <div className="dropdown" style={{display:loggedIn?'none':'block'}} >
          <a href="/login/admin"><button className="dropbtn">Login</button></a>
          
          </div>
          <div className="dropdown" style={{display:loggedIn?'none':'block'}} >
            <a href="/register/admin"><button className="dropbtn">Register</button></a>
            
          </div>
          <div>
            {/* here loggedIn user's name will be printed
            <li className="nav-item">
              <Link className="nav-link text-white" style={{display:loggedIn?'block':'none'}}>{user.}</Link>
            </li> */}
            <div className="nav-item" style={{display:loggedIn?'block':'none'}} >
              {/* <button className="nav-link btn btn-link text-white" style={{display:loggedIn?'block':'none'}} onClick={handleLogout}>Logout</button> */}
              <button className="dropbtn" onClick={handleLogout}>Logout</button>
            </div>
          </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

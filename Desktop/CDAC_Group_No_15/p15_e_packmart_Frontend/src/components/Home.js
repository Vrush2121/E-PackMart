import React from "react";
import "./style/HomePage.css"; // CSS file for styling
import pic from './pictures/Home.jpg';
import pic1 from './pictures/logo.jpeg';
import pic2 from './pictures/plasticfilm.jpeg'
import pic3 from './pictures/corrugatedbox.jpg'
import pic4 from './pictures/paperpack.jpg'
import pic5 from './pictures/flexiblepack.jpg'

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Navbar Section */}
      
      {/* <nav className="navbar">
        <div className="logo">
          <img src={pic1} alt="e_packmart Logo" className="logo-image" />
        </div>

        <div className="nav-links"> */}

          {/* Left Navigation */}
          {/* <div className="left-nav">
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
          </div> */}

          {/* Right Navigation */}
          {/* <div className="right-nav">
          <div className="dropdown">
          <button className="dropbtn">Login</button>
          <div className="dropdown-content">
          <a href="/login/admin">Admin</a>
          <a href="/login/vendor">Vendor</a>
          <a href="/login/customer">Customer</a>
          </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">Register</button>
            <div className="dropdown-content">
              <a href="/register/admin">Admin</a>
              <a href="/register/vendor">Vendor</a>
              <a href="/register/customer">Customer</a>
            </div>
          </div>
          </div>
        </div>
      </nav> */}

      {/* Header Section with Banner Image */}
      <header className="homepage-header">
        <img
          src={pic}
          alt="e_packmart Banner"
          className="banner-image"
        />
      </header>

      {/* Main Welcome Section */}
      <div className="main-content">
        <h1>Welcome to Packaging Marketplace</h1>
        <p>Your one-stop solution for all packaging needs.</p>
      </div>

      {/* Categories Section */}
      <section className="categories-section">
        <h2>Explore Our Categories</h2>
        <div className="categories">
          {/* Category Cards */}
          <div className="category-card">
            <img
              src={pic2}
              alt="Plastic Films"
              className="category-image"
            />
            <p>Plastic Films</p>
          </div>
          <div className="category-card">
            <img
              src={pic3}
              alt="Corrugated Boxes"
              className="category-image"
            />
            <p>Corrugated Boxes</p>
          </div>
          <div className="category-card">
            <img
              src={pic4}
              alt="Paper Packaging"
              className="category-image"
            />
            <p>Paper Packaging</p>
          </div>
          <div className="category-card">
            <img
              src={pic5}
              alt="Flexible Packaging"
              className="category-image"
            />
            <p>Flexible Packaging</p>
          </div>
        </div>
      </section>
      

      {/* About Us Section */}
      <section className="about-section">
        <h2>About E_PackMart</h2>
        <img
          src="https://via.placeholder.com/800x300?text=About E_PackMart"
          alt="About E_PackMart"
          className="about-image"
        />
        <p>
          At E_PackMart, We connect businesses with top-notch packaging solutions
          tailored to meet diverse requirements. From eco-friendly options to
          industrial-grade products, we have it all.
        </p>
      </section>

      {/* Footer Section */}
      <footer className="homepage-footer">
        <p>&copy; 2024 e_packmart. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;

// import React from 'react'

// export default function CustomerHome() {
//   return (
//     <div>
//       <h1>This is the customer home page</h1>
//     </div>
//   )
// }

import React, { useState } from "react";
//import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearUser } from './userSlice';


const CustomerHome = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const products = [
    { id: 1, name: "Product 1", price: "$20", img: "https://via.placeholder.com/150" },
    { id: 2, name: "Product 2", price: "$30", img: "https://via.placeholder.com/150" },
    { id: 3, name: "Product 3", price: "$40", img: "https://via.placeholder.com/150" },
    { id: 4, name: "Product 4", price: "$50", img: "https://via.placeholder.com/150" },
    { id: 5, name: "Product 5", price: "$50", img: "https://via.placeholder.com/150" },
    { id: 6, name: "Product 6", price: "$50", img: "https://via.placeholder.com/150" },
    { id: 7, name: "Product 7", price: "$50", img: "https://via.placeholder.com/150" },
    { id: 8, name: "Product 8", price: "$50", img: "https://via.placeholder.com/150" },
    { id: 9, name: "Product 9", price: "$50", img: "https://via.placeholder.com/150" },
    { id: 10, name: "Product 10", price: "$50", img: "https://via.placeholder.com/150" },
    { id: 11, name: "Product 11", price: "$50", img: "https://via.placeholder.com/150" },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  const { user, loggedIn } = useSelector((state)=>state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

  const handleLogout =()=>{
          dispatch(clearUser());
          navigate("/");
        }

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            E-PackMart
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Cart
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Orders
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Profile
                </a>
              </li>
              <div>
            {/* here loggedIn user's name will be printed
            <li className="nav-item">
              <Link className="nav-link text-white" style={{display:loggedIn?'block':'none'}}>{user.}</Link>
            </li> */}
            <li className="nav-item" style={{display:loggedIn?'block':'none'}} >
              <button className="nav-link" onClick={handleLogout}>Logout</button>
            </li>
          </div>
            </ul>
          </div>
        </div>
      </nav>

      {/* Search Bar */}
      <div className="container my-4">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search for products..."
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
          />
        </div>
      </div>

      {/* Product Grid */}
      <div className="container">
        <div className="row">
          {filteredProducts.map((product) => (
            <div className="col-md-3" key={product.id}>
              <div className="card mb-4 shadow-sm">
                <img
                  src={product.img}
                  className="card-img-top"
                  alt={product.name}
                  style={{ height: "150px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.price}</p>
                  <button className="btn btn-primary btn-sm">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerHome;


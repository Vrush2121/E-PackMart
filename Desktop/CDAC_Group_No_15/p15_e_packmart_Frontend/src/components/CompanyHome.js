import React, { useState } from "react";
//import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearUser } from './userSlice';

const VendorHomePage = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", price: "$20", stock: 50 },
    { id: 2, name: "Product 2", price: "$30", stock: 20 },
    { id: 2, name: "Product 2", price: "$30", stock: 20 },
    { id: 2, name: "Product 2", price: "$30", stock: 20 },
    { id: 2, name: "Product 2", price: "$30", stock: 20 },
    { id: 2, name: "Product 2", price: "$30", stock: 20 },
    { id: 2, name: "Product 2", price: "$30", stock: 20 },
    { id: 2, name: "Product 2", price: "$30", stock: 20 },
  ]);
  const [newProduct, setNewProduct] = useState({ name: "", price: "", stock: "" });

  const handleAddProduct = () => {
    if (newProduct.name && newProduct.price && newProduct.stock) {
      setProducts([...products, { id: products.length + 1, ...newProduct }]);
      setNewProduct({ name: "", price: "", stock: "" });
      alert("Product added successfully!");
    } else {
      alert("Please fill all fields.");
    }
  };

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
            Vendor Dashboard
          </a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Manage Products
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
            {/* here loggedIn user's name will be printed
            <li className="nav-item">
              <Link className="nav-link text-white" style={{display:loggedIn?'block':'none'}}>{user.}</Link>
            </li> */}
            <li className="nav-item" style={{display:loggedIn?'block':'none'}} >
              <button className="nav-link" onClick={handleLogout}>Logout</button>
            </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Add Product Section */}
      <div className="container my-4">
        <h3>Add New Product</h3>
        <div className="row">
          <div className="col-md-3">
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Product Name"
              value={newProduct.name}
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            />
          </div>
          <div className="col-md-2">
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Price"
              value={newProduct.price}
              onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
            />
          </div>
          <div className="col-md-2">
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Stock"
              value={newProduct.stock}
              onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
            />
          </div>
          <div className="col-md-2">
            <button className="btn btn-success" onClick={handleAddProduct}>
              Add Product
            </button>
          </div>
        </div>
      </div>

      {/* Product List */}
      <div className="container">
        <h3>Product List</h3>
        <div className="row">
          {products.map((product) => (
            <div className="col-md-4" key={product.id}>
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">Price: {product.price}</p>
                  <p className="card-text">Stock: {product.stock}</p>
                  <button className="btn btn-danger btn-sm">Delete</button>
                  <button className="btn btn-primary btn-sm ms-2">Edit</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VendorHomePage;

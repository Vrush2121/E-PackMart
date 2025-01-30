import React, { useState } from 'react';
import './style/LoginPage.css';
import { useNavigate } from 'react-router-dom';
import { useReducer } from 'react';
import { useDispatch } from 'react-redux';
import { setLoggedIn } from './store';
import { setUser } from './userSlice';

const LoginPage = () => {
  const init = {
    email: '',
    password: ''
  }

  const reducer=(state, action)=> {
    switch (action.type) {
      case 'UPDATE':
        return { ...state, [action.name]: action.value }
      case 'RESET':
        return init;
    }
  }

  const [data, dispatch] = useReducer(reducer, init);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch1 = useDispatch();

  const handelSubmit = (e) =>{
    e.preventDefault();
    const request ={
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(
        { email_id: data.email, 
          password: data.password 
        })
    }

    fetch("http://localhost:8080/login", request)
    .then(resp=> resp.text())
    // .then (response => {
    //         if (response.ok)
    //           return response.json();
    //         else
    //           throw new Error(response.statusText);
    //         })
    .then(resp=>{ 
      console.log(resp);
      return resp.length ? JSON.parse(resp) : {}})
    .then (obj => {
                console.log(obj);
                 if(Object.keys(obj).length == 0){
                  setError("Invalid Inputs... Try again")
                 }
                 else{
                  if(obj.role_id.role_id === 3){
                    dispatch1(setUser(data));                           //Redux
                    navigate("/CustomerHome");
                  }
                  else if(obj.role_id.role_id === 2){
                    dispatch1(setUser(data));                          //Redux
                    navigate("/CompanyHome");
                  }
                 }
                }
            )
      .catch((error)=>alert("Server Error..."))
  }

  

  return (
    <div className="login-page">
      <h2>Login</h2>
      <form onSubmit={handelSubmit}>
        {/* Email Field */}
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={(e)=> dispatch({type:"UPDATE", name:"email", value:e.target.value})}
            required
          />
        </div>

        {/* Password Field */}
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={(e)=> dispatch({type:"UPDATE", name:"password", value:e.target.value})}
            required
          />
        </div>
        {JSON.stringify(data)}

        {/* Error Message */}
        {error && <p className="error-message">{error}</p>}

        {/* Submit Button */}
        <button type="submit">Login</button>
      </form>

      {/* Forgot Password Link */}
      <p className="forgot-password">
        <a href="/forgot-password">Forgot Password?</a>
      </p>
    </div>
  );
};

export default LoginPage;

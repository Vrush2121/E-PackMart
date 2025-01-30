import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import "./RegisterPage.css";
import { useNavigate } from "react-router-dom";

const RegistrationPage = () => {

  

  const Roles = {
    2: "Company",
    3: "Customer",
  };

  

  const getStateData = () => {
    fetch("http://localhost:8080/getStates")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Http Error,${res.status}`);
        }
        return res.json();
      })
      .then((data) => setStateData(data))
      .catch((error) => {
        console.log(`Error facing status `, error);
      });
  };

  const getCityData = () => {
    fetch("http://localhost:8080/getCities")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP Error ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("data is ", data);
        setCity(data);
      })
      .catch((error) => {
        console.log("Error facing status ", error);
      });
  };

  const [stateData, setStateData] = useState([]);
  const [cityData, setCity] = useState([]);
  const stateref = useRef(null);
  const navigate = useNavigate();
  const [validationErrors, setValidationErrors] = useState({}); // HIGHLIGHTED CHANGE
  const compnayField = () => {
  return (
    <>
      <label htmlFor="msme">MSME Certificate No:</label>
      <input type="text" name="msme_cert_no" id="msme"  onBlur={handleBlur}  onChange={handleChangeEvent} />
      {validationErrors.msme_cert_no && (
          <span style={{ color: "red", fontSize: "small" }}>
            {validationErrors.msme_cert_no}
          </span>
        )}

      <label htmlFor="gst">GST No:</label>
      <input type="text" name="gst_no" id="gst"  onBlur={handleBlur} onChange={handleChangeEvent} />
      {validationErrors.gst_no && (
          <span style={{ color: "red", fontSize: "small" }}>
            {validationErrors.gst_no}
          </span>
        )}
        
       </>
  );
};
const [role_type, setRole_type] = useState("");
console.log("RollType", role_type);
const cityDetails = {
  city_id: "",
  city_name: "",
  state: {
    state_id: "",
    state_name: "",
  },
};

  const [userData, setUserData] = useState({
    email: "",
    name: "",
    password: "",
    city: {
      city_id: "",
      city_name: "",
      state_id: { state_id: "", state_name: "" },
    },
    address: "",
    pancard: "",
    role_id: { role_id: "", role_type: "" },
    msme_cert_no: "",
    gst_no: "",
  });

  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "email":
        if (!/^\S+@\S+\.\S+$/.test(value)) {
          error = "Please enter a valid email address.";
        }
        break;
      case "name":
        if (value.trim().length < 2) {
          error = "Name must be at least 2 characters long.";
        }
        break;
      case "password":
        if (
          value.length < 6 ||
          !/[!@#$%^&*(),.?":{}|<>]/.test(value) ||
          !/\d/.test(value)
        ) {
          error = "Password must be at least 6 characters, include a symbol, and a number.";
        }
        break;
      case "address":
        if (value.trim().length < 10) {
          error = "Address must be at least 10 characters.";
        }
        break;
      case "pancard":
        if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(value)) {
          error = "Invalid PAN card format.";
        }
        break;
      case "msme_cert_no":
        if (userData.role_id.role_id === "3" && value.trim() === "") {
          error = "MSME Certificate Number is required for companies.";
        }
        break;
      case "gst_no":
        if (userData.role_id.role_id === "2" && !/^\d{15}$/.test(value)) {
          error = "Invalid GST Number. It must be 15 digits.";
        }
        break;
      default:
        break;
    }

    return error;
  };

  // HIGHLIGHTED CHANGE: Handle onBlur event
  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setValidationErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const userInfo = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  };
  const handleChangeEvent = (e) => {
    
    const { name, value } = e.target;
    console.log("namme", name);
    if (name == "city") {
      let city = cityData.filter((data) => {
        return (
          data.state_id.state_id == stateref.current.value &&
          data.city_id == value
        );
      });
      setUserData({ ...userData, [name]: city[0] });
      console.log("NewCity", city);
    } else if (name == "role_id") {
      let role_id = {
        role_id: value,
        roleType: Roles[value],
      };
      setUserData({ ...userData, [name]: role_id });
    } else {
      setUserData({ ...userData, [name]: value });
    }

  };
  const handleSubmit = async (e) => {
    // e.preventDefault();
    // let isValid = true;
    // for (let field in userData) {
    //   if (!validateField(field, userData[field])) {
    //     isValid = false;
    //   }
    // }
    // isValid=true;
    // if (isValid) {
    //   try {
    //     console.log(userData);
        
    //     const endpoint =
    //       userData.role_id.role_id === 3
    //         ? "http://localhost:8080/registerCustomer"
    //         : "http://localhost:8080/registerCompany";
    //     await fetch(endpoint, userInfo);
    //     navigate("/login/:userType");
    //   } catch (error) {
    //     console.error("Error during registration: ", error);
    //   }
    // }
    e.preventDefault();
    console.log(userData);
    if(userData.role_id.role_id == 3){
    fetch("http://localhost:8080/registerCustomer",userInfo);
     }
    else if(userData.role_id.role_id == 2){
      fetch("http://localhost:8080/registerCompany",userInfo);
    }
    navigate("/login/:userType")

  };


  return (
    <div className="registration-page">
      <h2>Register</h2>

      <>
      <form
        action=""
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
          margin: "auto",
          // fontSize:"50px"
        }}
      >
        <select
        style={{ "height":"35px"}}
          name="role_id"
          id="role_type"
          value={role_type}
          onChange={(e) => {
            setRole_type(e.target.value);
            handleChangeEvent(e);
          }}
        >
          <option value="">Select Role type</option>
          <option value="2">Compnay</option>
          <option value="3">Customer</option>
        </select>
        {(role_type == 2 || role_type == 3) && (
          <>
            <label htmlFor="em">Email:</label>
            <input
              type="email"
              name="email"
              id="em"
              onBlur={handleBlur} // HIGHLIGHTED CHANGE
              onChange={handleChangeEvent}
              required
            />
            {validationErrors.email && (
                <span style={{ color: "red", fontSize: "small" }}>
                  {validationErrors.email}
                </span>
              )}

            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              id="nm"
              onBlur={handleBlur} // HIGHLIGHTED CHANGE
              onChange={handleChangeEvent}
              required
            />
            {validationErrors.name && (
                <span style={{ color: "red", fontSize: "small" }}>
                  {validationErrors.name}
                </span>
              )}

            <label htmlFor="pwd">Password:</label>
            <input
              type="password"
              name="password"
              id="pwd"
              onBlur={handleBlur} // HIGHLIGHTED CHANGE
              onChange={handleChangeEvent}
              required
            />
            {validationErrors.password && (
                <span style={{ color: "red", fontSize: "small" }}>
                  {validationErrors.password}
                </span>
              )}

            <label htmlFor="state">State:</label>
            {/*  */}
            <select
              name="state_id"
              id="state"
              onClick={getStateData}
              ref={stateref}
              onBlur={handleBlur} // HIGHLIGHTED CHANGE
              onChange={handleChangeEvent}
              required
            >
              {stateData.map((st) => {
                return <option value={st.state_id}>{st.state_name}</option>;
              })}
            </select>
            <label htmlFor="city">City:</label>
            {/* onClick={getCityData} */}
            <select
              name="city"
              id="city"
              onClick={getCityData}
              onChange={handleChangeEvent}
              value={userData.city ? userData.city.city_id : ""} //** */
              required
            >
              {cityData.length > 0 ? (
                cityData.map((ct) => {
                  if (stateref.current.value == ct.state_id.state_id) {
                    return (
                      <option key={ct.city_id} value={ct.city_id}>
                        {ct.city_name}{" "}
                      </option>
                    );
                  }
                })
              ) : (
                <option>Loading cities...</option>
              )}
            </select>
            <label htmlFor="add">Address:</label>
            <textarea
              name="address"
              id="add"
              onBlur={handleBlur} // HIGHLIGHTED CHANGE
              onChange={handleChangeEvent}
              required
            ></textarea>
            {validationErrors.address && (
                <span style={{ color: "red", fontSize: "small" }}>
                  {validationErrors.address}
                </span>
              )}

            <label htmlFor="pan">Pancard No:</label>
            <input
              type="text"
              name="pancard"
              id="pan"
              onBlur={handleBlur} // HIGHLIGHTED CHANGE
              onChange={handleChangeEvent}
              required
            />{" "}
            {validationErrors.pancard && (
                <span style={{ color: "red", fontSize: "small" }}>
                  {validationErrors.pancard}
                </span>
              )}
              
              </>
          
        )}
        {role_type == 2 && compnayField()}

        <button> Register</button>
      </form>
    </>
    </div> 
  );
};

export default RegistrationPage;


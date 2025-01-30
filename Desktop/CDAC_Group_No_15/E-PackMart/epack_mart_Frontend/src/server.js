const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",      // MySQL username
  password: "2003",  // MySQL password
  database: "e_packmart", // database name
});

db.connect((err) => {
  if (err) {
    console.error("Database connection error:", err);
  } else {
    console.log("Connected to the database.");
  }
});

// API to fetch all states
app.get("/states", (req, res) => {
  const query = "SELECT id, name FROM state"; 
  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Error fetching states" });
    } else {
      res.json(results);
    }
  });
});

// API to fetch cities based on the selected state
app.get("/cities", (req, res) => {
  const { state } = req.query; // State ID from the query parameter
  if (!state) {
    return res.status(400).json({ error: "State ID is required" });
  }

  const query = "SELECT id, name FROM city WHERE state_id = ?";
  db.query(query, [state], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Error fetching cities" });
    } else {
      res.json(results);
    }
  });
});

// API to handle user registration
app.post("/register", (req, res) => {
  const { email, name, password, address, pancard, role_id, state, city } = req.body;
  if (!email || !name || !password || !address || !role_id || !state || !city) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const query = `
    INSERT INTO users (email, name, password, address, pancard, role_id, state_id, city_id)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

  db.query(
    query,
    [email, name, password, address, pancard, role_id, state, city],
    (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: "Error registering user" });
      } else {
        res.json({ message: "User registered successfully" });
      }
    }
  );
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

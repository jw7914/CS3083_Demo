import express from "express";
import mysql from "mysql2";
import cors from "cors";

// Initialize database connection
const connection = mysql.createConnection({
  host: "127.0.0.1", // Localhost (running on current machine)
  user: "root", // Running using default root user
  password: "", // Default XAMPP has no password
  database: "jail", // Database name
});

// Connect to MySQL database
connection.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
  } else {
    console.log("Connected to MySQL database!");
  }
});

// Initialize an Express app
const app = express();
// Allow resource sharing (allow calls to backend from certain urls)
app.use(cors());

// API endpoint to fetch crime data
app.get("/crime", (request, response) => {
  const query = "SELECT * FROM CRIME";
  connection.query(query, (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      response.status(500).send("Error executing query");
      return;
    }
    response.send(results); // Send results as JSON
  });
});

const port = 8080;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

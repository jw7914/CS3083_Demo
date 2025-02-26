import express from "express";
import mysql from "mysql2";
import url from "url";
import path from "path";

const basePath = path.resolve(path.dirname(url.fileURLToPath(import.meta.url))); //Get current directory

let app = express();
app.set("view engine", "hbs");
app.use(express.json());
app.use(express.static(basePath)); // Look for files from set up path (mainly to allow server to find css files to link)

const connection = mysql.createConnection({
  host: "127.0.0.1", // Localhost (running on current machine)
  user: "root", // Running using default root user
  password: "", // Default XAMPP has no password
  database: "jail", // Database name
});

connection.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
    process.exit(1);
  } else {
    console.log("Connected to MySQL database!");
  }
});

app.get("/", (request, response) => {
  response.render("home");
});
app.get("/crimes", (request, response) => {
  const query = "SELECT * FROM CRIME";
  connection.query(query, (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      response.status(500).send("Error executing query");
      return;
    }
    console.log(results);
    //Syntax to send data to frontend and which template to send to (dont need .hbs)
    response.render("crimes", { crimes: results });
  });
});

const port = 8080;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

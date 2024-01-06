const express = require("express");
const mysql = require("mysql2");

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: "root",
    // MySQL password
    password: "root",
    database: "employee_db",
  },
  console.log(`Connected to the courses_db database.`)
);

// get request to retrieve the department table from db

app.get("/departments", (req, res) => {
  const query = "SELECT * FROM department";

  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error retrieving departments from the database.");
      return;
    }

    console.log("Departments:");
    console.table(results);
    res.json(results);
  });
});

// get request to retrieve the role table from db

app.get("/roles", (req, res) => {
  const query = "SELECT * FROM role";

  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error retrieving roles from the database.");
      return;
    }

    console.log("Role:");
    console.table(results);
    res.json(results);
  });
});

// get request to retrieve the employee table from db

app.get("/employees", (req, res) => {
  const query = "SELECT * FROM employee";

  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error retrieving employees from the database.");
      return;
    }

    console.log("Employees:");
    console.table(results); // This will display the data in a tabular format
    res.json(results);
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

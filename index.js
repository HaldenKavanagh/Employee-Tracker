const express = require("express");
const mysql = require("mysql2");
const inquirer = require("inquirer");

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

function displayDepartments() {
  const query = "SELECT * FROM department";
  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log();
    console.table(results);
  });
}

function displayRoles() {
  const query = "SELECT * FROM role";
  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log();
    console.table(results);
  });
}

function displayEmployees() {
  const query = "SELECT * FROM employee";
  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log();
    console.table(results);
  });
}

function addDepartment() {
  console.log("hit addDepartment function");
}
function addRole() {
  console.log("hit addRole function");
}
function addEmployee() {
  console.log("hit addEmployee function");
}
function updateRole() {
  console.log("hit updateRole function");
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  promptUser();
});

function promptUser() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to do?",
        choices: [
          "View all departments",
          "View all roles",
          "View all employees",
          "Add a department",
          "Add a role",
          "Add an employee",
          "Update an employee role",
        ],
        name: "mainOption",
      },
    ])
    .then(function (data) {
      if (data.mainOption === "View all departments") {
        displayDepartments();
      } else if (data.mainOption === "View all roles") {
        displayRoles();
      } else if (data.mainOption === "View all employees") {
        displayEmployees();
      } else if (data.mainOption === "Add a department") {
        addDepartment();
      } else if (data.mainOption === "Add a role") {
        addRole();
      } else if (data.mainOption === "Add an employee") {
        addEmployee();
      } else if (data.mainOption === "Update an employee role") {
        updateRole();
      }
      promptUser();
    });
}

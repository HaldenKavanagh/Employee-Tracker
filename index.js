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
    promptUser();
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
    promptUser();
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
    promptUser();
  });
}

function addDepartment() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter the name of the new department:",
        name: "newDepartment",
      },
    ])
    .then(function (data) {
      const query = "INSERT INTO department (department_name) VALUES (?)";
      const values = [data.newDepartment];
      db.query(query, values, (err, results) => {
        if (err) {
          console.error(err);
          return;
        }

        console.log("Department added successfully!");

        displayDepartments();

        promptUser();
      });
    });
}
function addRole() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter the name of the new role:",
        name: "roleName",
      },
      {
        type: "input",
        message: "Enter the salary of the new role:",
        name: "roleSalary",
      },
      {
        type: "input",
        message: "Enter the department id of the new role",
        name: "roleDepartment",
      },
    ])
    .then(function (data) {
      const query =
        "INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)";
      const values = [data.roleName, data.roleSalary, data.roleDepartment];
      db.query(query, values, (err, results) => {
        if (err) {
          console.error(err);
          return;
        }

        console.log("Role added successfully!");

        displayRoles();

        promptUser();
      });
    });
}
function addEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter the first name of the new employee:",
        name: "employeeFirst",
      },
      {
        type: "input",
        message: "Enter the last name of the new employee:",
        name: "employeeLast",
      },
      {
        type: "input",
        message: "Enter id of their role:",
        name: "employeeRole",
      },
      {
        type: "input",
        message: "Enter the manager's id of the new employee:",
        name: "employeeManager",
      },
    ])
    .then(function (data) {
      const query =
        "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)";
      const values = [
        data.employeeFirst,
        data.employeeLast,
        data.employeeRole,
        data.employeeManager,
      ];
      db.query(query, values, (err, results) => {
        if (err) {
          console.error(err);
          return;
        }

        console.log("Employee added successfully!");

        displayEmployees();

        promptUser();
      });
    });
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
    });
}

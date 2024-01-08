INSERT INTO department (department_name)
VALUES ("Science"), ("Social Studies"), ("Math"), ("faculty");

INSERT INTO role (title, salary, department_id)
VALUES ("Teacher", 50.2, 1), ("Substitute", 25.3, 4), ("Librarian", 35.8, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Macey", "Gibbons", 1, 33), ("Robert", "Thorne", 2, 44), ("Marcus", "Moore", 3, 33);

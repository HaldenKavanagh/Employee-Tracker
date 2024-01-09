INSERT INTO department (department_name)
VALUES ("management"), ("boh"), ("foh"), ("utility");

INSERT INTO role (title, salary, department_id)
VALUES ("line_cook", 33.5, 2), ("prep_cook", 27.3, 2), ("executive_chef", 75.7, 2), ("sous_chef", 60.3, 1), ("dishwasher", 20.1, 4), ("janitor", 20, 4), ("server", 30, 3), ("host", 34.2, 3), ("busser", 17, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Macey", "Gibbons", 3, 1), ("Robert", "Thorne", 4, 1), ("Marcus", "Moore", 1, 2);

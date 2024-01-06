INSERT INTO department (id, department_name)
VALUES (1, "Science"), (2, "Social Studies"), (3, "Math"), (4, "faculty");

INSERT INTO role (id, title, salary, department_id)
VALUES (1, "Teacher", 50.2, 1), (2, "Substitute", 25.3, 4), (3, "Librarian", 35.8, 4);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (66, "Macey", "Gibbons", 1, 33), (55, "Robert", "Thorne", 2, 44), (77, "Marcus", "Moore", 3, 33);

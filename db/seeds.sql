INSERT INTO department (department_name)
VALUES  ("placeholder1"),
        ("placeholder2"),
        ("placeholder3"),
        ("placeholder4");

INSERT INTO employee_role (title, salary, department_id)
VALUES  ("RockAndRole", 4500000, 3),
        ("SausageRole", 96000, 1),
        ("FruitRoleUp", 69000, 2),
        ("RoleModel", 1, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  
        ("Al", "Green", 1, NULL),
        ("Hank", "Hill", 3, 1),
        ("Jason", "Funderberker", 2, 1),
        ("Gon", "Freecss", 2, 1),
        ("Bobby", "Caldwell", 4, 3),
        ("Ellen", "Ripley", 4, 3),
        ("Gandalf", "The Grey", 3, 2),
        ("Elliott", "Smith", 4, 3),
        ("Arsene", "Lupin III", 3, 2);

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
VALUES  ("Hank", "Hill", 1, 3),
        ("Al", "Green", 3, NULL),
        ("Jason", "Funderberker", 1, 3),
        ("Gon", "Freecss", 1, 3),
        ("John", "Locke", 1, 3),
        ("Ellen", "Ripley", 1, 3),
        ("Gandalf", "The Grey", 1, 3),
        ("Carmen", "Sandiego", 1, 3),
        ("Arsene", "Lupin III", 1, 3);

-- db.query('SELECT * FROM employees', function (err, results) {
--   console.log(results);
-- });
SELECT * 
FROM role AS employee_role
JOIN department ON role.department_id = department.id;

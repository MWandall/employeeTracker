-- db.query('SELECT * FROM employees', function (err, results) {
--   console.log(results);
-- });
SELECT * 
FROM employee_role
JOIN department ON employee_role.department_id = department.id;

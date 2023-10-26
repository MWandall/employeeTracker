// const express = require("express");
const inquirer = require("inquirer");
// Import and require mysql2
const mysql = require("mysql2");
const sequelize = require('./config/connection');
const cTable = require('console.table');

// const PORT = process.env.PORT || 3001;
// const app = express();

const asciiArt = `
     /\\_/\\  /\\_/\\  /\\_/\\  /\\_/\\  /\\_/\\  /\\_/\\  /\\_/\\  /\\_/\\  /\\_/\\ 
    ( o.o )( o.o )( o.o )( o.o )( o.o )( o.o )( o.o )( o.o )( o.o )
     > ^ <  > ^ <  > ^ <  > ^ <  > ^ <  > ^ <  > ^ <  > ^ <  > ^ < 

            ╔═╗╔╦╗╔═╗╦  ╔═╗╦ ╦╔═╗╔═╗  ╔╦╗╦═╗╔═╗╔═╗╦╔═╔═╗╦═╗ 
            ║╣ ║║║╠═╝║  ║ ║╚╦╝║╣ ║╣    ║ ╠╦╝╠═╣║  ╠╩╗║╣ ╠╦╝ 
            ╚═╝╩ ╩╩  ╩═╝╚═╝ ╩ ╚═╝╚═╝   ╩ ╩╚═╩ ╩╚═╝╩ ╩╚═╝╩╚═  

     /\\_/\\  /\\_/\\  /\\_/\\  /\\_/\\  /\\_/\\  /\\_/\\  /\\_/\\  /\\_/\\  /\\_/\\ 
    ( o.o )( o.o )( o.o )( o.o )( o.o )( o.o )( o.o )( o.o )( o.o )
     > ^ <  > ^ <  > ^ <  > ^ <  > ^ <  > ^ <  > ^ <  > ^ <  > ^ < 
 `;
console.log(asciiArt);

// Express middleware
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// Connect to database

// sequelize.sync({ force: false }).then(() => {
//   app.listen(PORT, () => console.log('Now listening'));
// });

const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: "root",
    // MySQL password
    password: "123qwe",
    database: "employees_db",
  },
  console.log(`Connected to the employees_db database.`)
);



const questions = [
  {
    type: "list",
    name: "choices",
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
  },
];



//to add a department
function addDepartment() {
  inquirer.prompt({
    type: "input",
    name: "department_name",
    message: "What would you like the name of new department?"
  })
  .then((answers)=> {
    console.log(answers);
    console.log(answers.department_name);
    const query = `INSERT INTO department (department_name) VALUES ("${answers.department_name}")`
    db.query(query, (err, results) => {
      if (err) {
      console.log(err);
      } else {
        console.log("Department added successfully!");
        questionsMenu();
      }
    })

  }) 
};

//to update and employee role
function updateEmployeeRole () {
  const temp = results.map((employee) => ({
    name: `${employee.first_name} ${employee.last_name}`,
    value: `${employee.id}`,
  }));
  inquirer.prompt([{
    type: "choices",
    name: "employee",
    message: "What would you like to update?",
    choices: temp
  },
  
  {
    type: "input",
    name: "employee_role",
    message: "What would you like the employee's new role to be?"
  }
])
  .then ((answers) => {
    console.log(answers);
    console.log(answers.employee_role);
    const query = `UPDATE employee SET role_id = ${answers.employee_role} WHERE id = ${answers.employee}`

  })
db.query (
"UPDATE employee SET role_id = 5 WHERE id = 2", function (err, result) {
  if (err) {console.log(err)
  } else {
    console.log("Successfully updated employee role.")
  }
})
}


//main menu function
function questionsMenu() {

inquirer.prompt(questions).then((answers) => {
  if (answers.choices === "View all departments") {
    db.query("SELECT * FROM department", function (err, results) {
      console.table(results);
       questionsMenu(); 
    });
  }

  if (answers.choices === "View all roles") {
    db.query( "SELECT * FROM employee_role JOIN department ON employee_role.department_id = department.id",
      function (err, results) {
        console.table(results);
        questionsMenu();
      }
    );
  }

  if (answers.choices === "View all employees") {
    db.query("SELECT * FROM employee", function (err, results) {
      console.table(results);
      questionsMenu();

    });
  }

  if (answers.choices === "Add a department") {
    addDepartment()
  }

  // if (answers.choices === "Add a role") {

  // }

  // if (answers.choices === "Add an employee") {

  // }

      if (answers.choices === "Update an employee role") {
        updateEmployeeRole()
      }
})};

questionsMenu();













//*for update employee
// const temp = results.map((employee) => ({
//   name: `${employee.first_name} ${employee.last_name}`,
//   value: `${employee.id}`,
// }));
// inquirer
//   .prompt([
//     {
//       type: "list",
//       message: "Which is employee do you wish to select?",
//       name: "employee",
//       choices: temp,
//     },
//   ])
//   .then((response) => console.log(response));













//TODO use inquirer 'type: list' to ask user the following options:
// *view all departments --- get
// *view all roles --- get
// *view all employees --- get
// *add a department --- post
// *add a role --- post
// *add an employee --- post
// *update an employee role --- put
//extra
// 'Update an employee manager',
// "View employees by department",
// 'Delete a department',
// 'Delete a role',
// 'Delete an employee',
//TODO
//TODO
//TODO
//TODO

//
// WHEN I choose to view all departments
// THEN I am presented with a formatted table showing department names and department ids
// WHEN I choose to view all roles
// THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
// WHEN I choose to view all employees
// THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
// WHEN I choose to add a department
// THEN I am prompted to enter the name of the department and that department is added to the database
// WHEN I choose to add a role
// THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
// WHEN I choose to add an employee
// THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
// WHEN I choose to update an employee role
// THEN I am prompted to select an employee to update and their new role and this information is updated in the database

//GIVEN a command-line application that accepts user input
// WHEN I start the application
// THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role

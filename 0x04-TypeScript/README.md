# TypeScript Project

This repository contains the solutions for the TypeScript exercises in the Frontend JavaScript curriculum. The tasks are designed to enhance your understanding of TypeScript, including its basic types, interfaces, classes, functions, and more advanced concepts like namespaces, declaration merging, and nominal typing.

## Tasks

### 0. Creating an Interface for a Student
- Implemented an interface for a student with attributes like firstName, lastName, age, and location.
- Created a table dynamically rendering student data using Vanilla JavaScript.

### 1. Let's Build a Teacher Interface
- Created an interface for a Teacher with attributes like firstName, lastName, location, fullTimeEmployee, and optional yearsOfExperience.
- Enabled adding additional attributes dynamically.

### 2. Extending the Teacher Class
- Extended the Teacher interface to create a Director interface, requiring an additional attribute numberOfReports.

### 3. Printing Teachers
- Created a function printTeacher to format and return a teacher's first letter of the first name and the full last name.
- Used TypeScript interface for the function.

### 4. Writing a Class
- Defined a StudentClass that includes methods to work on homework and display the student's name.

### 5. Advanced Types Part 1
- Created interfaces for Director and Teacher with methods like workFromHome, getCoffeeBreak, and task-specific methods.
- Implemented createEmployee function that returns either a Teacher or a Director based on the salary.

### 6. Creating Functions Specific to Employees
- Implemented the isDirector function to check if an employee is a director.
- Implemented executeWork function to call specific methods depending on the employee type.

### 7. String Literal Types
- Created a string literal type Subjects with values Math and History.
- Implemented the teachClass function that returns different messages based on the todayClass.

### 8. Ambient Namespaces
- Created an interface and type for RowID and RowElement.
- Defined functions for CRUD operations and created an ambient type declaration for the third-party crud.js library.

### 9. Namespace & Declaration Merging
- Used declaration merging to extend the Teacher interface and create classes like Cpp, React, and Java within the same namespace, each having specific methods and requirements.

### 10. Update task_4/js/main.ts
- Exported constants for subjects and teachers.
- Demonstrated usage by logging requirements and available teachers for different subjects.

### 11. Brand Convention & Nominal Typing
- Created interfaces for MajorCredits and MinorCredits with unique brand properties.
- Implemented functions to sum credits for major and minor subjects.

## Requirements

The project requires the following tools:

- TypeScript
- Webpack
- ESLint
- Jest (for testing)

### Allowed Editors
- Visual Studio Code
- vi
- vim
- emacs

### File Extensions
- TypeScript files should have the .ts extension.

### Configuration Files
- package.json
- .eslintrc.js
- tsconfig.json
- webpack.config.js

## Setup

1. Clone the repository:

   `bash
   git clone https://www.github.com/K1dus/frontend-javascript.git
   cd 0x04-TypeScript

// main.ts

// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two student objects
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York"
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "Los Angeles"
};

// Create an array of students
const studentsList: Student[] = [student1, student2];

// Function to render the student list in a table
const renderTable = (students: Student[]): void => {
  const table = document.createElement('table');
  document.body.appendChild(table);

  // Add table headers
  const headerRow = table.insertRow();
  const headerFirstName = headerRow.insertCell();
  headerFirstName.textContent = 'First Name';
  const headerLocation = headerRow.insertCell();
  headerLocation.textContent = 'Location';

  // Add a row for each student
  students.forEach(student => {
    const row = table.insertRow();
    const cellFirstName = row.insertCell();
    cellFirstName.textContent = student.firstName;
    const cellLocation = row.insertCell();
    cellLocation.textContent = student.location;
  });
};

// Render the table with the students list
renderTable(studentsList);

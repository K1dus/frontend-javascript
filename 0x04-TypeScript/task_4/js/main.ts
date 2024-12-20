import { Cpp } from './subjects/Cpp';
import { Java } from './subjects/Java';
import { React } from './subjects/React';
import { Teacher } from './subjects/Teacher';

// Create and export a constant cpp for Cpp Subject
export const cpp = new Cpp();

// Create and export a constant java for Java Subject
export const java = new Java();

// Create and export a constant react for React Subject
export const react = new React();

// Create and export a Teacher object cTeacher with experienceTeachingC = 10
export const cTeacher: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  experienceTeachingC: 10,
};

// For Cpp subject, log to the console "C++", set cTeacher as the teacher,
// call the two methods getRequirements and getAvailableTeacher, and print the strings they return
console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// For Java subject, log to the console "Java", set cTeacher as the teacher,
// call the two methods getRequirements and getAvailableTeacher, and print the strings they return
console.log('Java');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// For React subject, log to the console "React", set cTeacher as the teacher,
// call the two methods getRequirements and getAvailableTeacher, and print the strings they return
console.log('React');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());

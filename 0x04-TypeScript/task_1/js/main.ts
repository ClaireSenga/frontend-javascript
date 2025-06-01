// File: task_1/js/main.ts

/** Task 1: Teacher and Directors Interfaces **/

interface Teacher {
  // These two can only be set at initialization
  readonly firstName: string;
  readonly lastName: string;

  // Always required
  fullTimeEmployee: boolean;
  location: string;

  // Optional
  yearsOfExperience?: number;

  // Allow any other property (e.g., contract: boolean)
  [propName: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

// Example usage for Teacher
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,  // extra attribute not predefined
};

console.log(teacher3);
// Expected output in console:
// {
//   contract: false,
//   firstName: "John",
//   fullTimeEmployee: false,
//   lastName: "Doe",
//   location: "London"
// }

// Example usage for Directors
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);
// Expected output in console:
// {
//   firstName: "John",
//   fullTimeEmployee: true,
//   lastName: "Doe",
//   location: "London",
//   numberOfReports: 17
// }


/** Task 3: printTeacher Function and Its Interface **/

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

console.log(printTeacher('John', 'Doe')); // Output: J. Doe


/** Task 4: StudentClass with Interfaces **/

// Interface describing the constructor parameters (student’s basic properties)
interface StudentInterface {
  firstName: string;
  lastName: string;
}

// Interface describing the class methods
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentInterface, StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage for StudentClass
const student1 = new StudentClass('Alice', 'Johnson');
console.log(student1.displayName());      // Output: Alice
console.log(student1.workOnHomework());   // Output: Currently working

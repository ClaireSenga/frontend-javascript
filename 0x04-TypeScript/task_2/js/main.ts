```typescript
// File: task_3/js/main.ts

/** Task 6: Employee‐Specific Functions **/

// 1. Interfaces for Director and Teacher (reused from Task 2)
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// 2. Director and Teacher classes (implementing their respective interfaces)
class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

// 3. Factory function to create either a Teacher or Director
function createEmployee(salary: number | string): Teacher | Director {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

// 4. Type predicate to check if an employee is a Director
function isDirector(employee: Teacher | Director): employee is Director {
  return employee instanceof Director;
}

// 5. executeWork: calls the appropriate method based on employee type
function executeWork(employee: Teacher | Director): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

// Example usage for Task 6:
console.log(executeWork(createEmployee(200)));   // Output: Getting to work
console.log(executeWork(createEmployee(1000)));  // Output: Getting to director tasks


/** Task 7: String Literal Types **/

// 1. Define a literal type Subjects that allows only 'Math' or 'History'
type Subjects = 'Math' | 'History';

// 2. teachClass: returns a string based on which subject is passed
function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  }
  return 'Teaching History';
}

// Example usage for Task 7:
console.log(teachClass('Math'));     // Output: Teaching Math
console.log(teachClass('History'));  // Output: Teaching History

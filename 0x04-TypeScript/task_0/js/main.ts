interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Alice',
  lastName: 'Johnson',
  age: 22,
  location: 'New York',
};

const student2: Student = {
  firstName: 'Bob',
  lastName: 'Smith',
  age: 20,
  location: 'San Francisco',
};

const studentsList: Student[] = [student1, student2];

// Create a table and add a header row
const table = document.createElement('table');
table.style.borderCollapse = 'collapse';
table.style.marginTop = '20px';

const headerRow = document.createElement('tr');

const nameHeader = document.createElement('th');
nameHeader.innerText = 'First Name';
nameHeader.style.border = '1px solid #000';
nameHeader.style.padding = '8px';

const locationHeader = document.createElement('th');
locationHeader.innerText = 'Location';
locationHeader.style.border = '1px solid #000';
locationHeader.style.padding = '8px';

headerRow.appendChild(nameHeader);
headerRow.appendChild(locationHeader);
table.appendChild(headerRow);

// Populate rows from studentsList
for (const student of studentsList) {
  const row = document.createElement('tr');

  const firstNameCell = document.createElement('td');
  firstNameCell.innerText = student.firstName;
  firstNameCell.style.border = '1px solid #000';
  firstNameCell.style.padding = '8px';

  const locationCell = document.createElement('td');
  locationCell.innerText = student.location;
  locationCell.style.border = '1px solid #000';
  locationCell.style.padding = '8px';

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
}

// Append the table to the body (or to a specific container)
document.body.appendChild(table);

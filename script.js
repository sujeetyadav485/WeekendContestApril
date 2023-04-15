const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const professionInput = document.getElementById('profession');
const ageInput = document.getElementById('age');
const successMessage = document.getElementById('success-message');
const errorMessage = document.getElementById('error-message');
const employeeList = document.getElementById('employee-list');
let employees = [];

function addEmployee(event) {
  event.preventDefault();
  
  if (!nameInput.value || !professionInput.value || !ageInput.value) {
    errorMessage.textContent = 'Please fill in all fields';
    successMessage.textContent = '';
    return;
  }

  const employee = {
    id: employees.length + 1,
    name: nameInput.value,
    profession: professionInput.value,
    age: parseInt(ageInput.value),
  };

  employees.push(employee);
  renderEmployees();
  successMessage.textContent = 'Employee added successfully';
  errorMessage.textContent = '';
  form.reset();
}

function deleteEmployee(event) {
  const button = event.target;
  const id = parseInt(button.dataset.id);
  employees = employees.filter((employee) => employee.id !== id);
  renderEmployees();
}

function renderEmployees() {
  employeeList.innerHTML = '';
  employees.forEach((employee) => {
    const div = document.createElement('div');
    div.classList.add('employee');
    div.innerHTML = `
      <p>ID: ${employee.id}</p>
      <p>Name: ${employee.name}</p>
      <p>Profession: ${employee.profession}</p>
      <p>Age: ${employee.age}</p>
      <button data-id="${employee.id}">Delete</button>
    `;
    div.querySelector('button').addEventListener('click', deleteEmployee);
    employeeList.appendChild(div);
  });
}

form.addEventListener('submit', addEmployee);

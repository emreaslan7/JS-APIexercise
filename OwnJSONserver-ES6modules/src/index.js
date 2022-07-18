import {Request} from "./request.js";
import {UI} from "./ui.js";

const request = new Request('http://localhost:3000/employees');
const ui = new UI();

const form = document.querySelector('#employee-form');


// request.PUT(1,{name: 'Aslan',departmant: 'developer',salary : 5000})
// .then(response => console.log(response))
// .catch(err => new Error(err));

// request.DELETE(1)
// .then(response => console.log(response))
// .catch(err => new Error(err));

eventListeners();

function eventListeners(){
    document.addEventListener('DOMContentLoaded',GetAllEmployees);
    document.addEventListener('submit',AddNewEmployee);
    
}


function GetAllEmployees(){
    request.GET()
    .then(response => ui.GetAllEmployeestoUI(response))
    .catch(err => new Error(err));
}

function AddNewEmployee(){
    request.POST({
        name: ui.inputName.value,
        department : ui.inputDepartment.value,
        salary: Number(ui.inputSalary.value)})
    .then(response => ui.AddNewEmployeetoUI(response))
    .catch(err => new Error(err));
}
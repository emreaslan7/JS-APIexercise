import {Request} from "./request.js";
import {UI} from "./ui.js";

const request = new Request('http://localhost:3000/employees');
const ui = new UI();

const form = document.querySelector('#employee-form');

eventListeners();

function eventListeners(){
    document.addEventListener('DOMContentLoaded',GetAllEmployees);
    form.addEventListener('submit',AddNewEmployee);
    ui.employeeList.addEventListener('click',UpdateorDelete);
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
    .then(response => {
        ui.AddNewEmployeetoUI(response);
        ui.ClearInputs();
    })
    .catch(err => new Error(err));
    e.preventDefault();
}

function UpdateorDelete(e){
    
    if(e.target.id == 'update-employee'){

        const employeeid = ui.FromListToForm(e);

        ui.btnUpdate.addEventListener('click', ()=>{
        request.PUT(employeeid,{
            name: ui.inputName.value,
            department : ui.inputDepartment.value,
            salary: Number(ui.inputSalary.value)})
        })

    }if(e.target.id == 'delete-employee'){
        const employeeid = ui.FromListToForm(e);
        request.DELETE(employeeid)
        ui.ClearInputs();
    }
    
}

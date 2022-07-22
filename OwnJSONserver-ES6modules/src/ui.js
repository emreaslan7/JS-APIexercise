export class UI{
    constructor(){
        this.employeeList = document.querySelector('#employees');
        this.btnUpdate = document.querySelector('#update');
        this.inputName = document.querySelector('#name');
        this.inputDepartment = document.querySelector('#department');
        this.inputSalary = document.querySelector('#salary');
    }

    GetAllEmployeestoUI(response) {
            response.forEach(employee =>{
                console.log(employee);
                this.employeeList.innerHTML += `
                <tr>                                
                    <td>${employee.name}</td>
                    <td>${employee.department}</td>
                    <td>${employee.salary}</td>
                    <td>${employee.id}</td>
                    <td><a href="#" id = "update-employee" class= "btn btn-danger">Update</a></td> 
                    <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Delete</a></td>
                </tr>`
            });
    }

    AddNewEmployeetoUI(response){
        this.employeeList.innerHTML +=`
        <tr>                                
            <td>${response.name}</td>
            <td>${response.department}</td>
            <td>${response.salary}</td>
            <td>${response.id}</td>
            <td><a href="#" id = "update-employee" class= "btn btn-danger">Update</a></td> 
            <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Delete</a></td>
        </tr>`
    }

    FromListToForm(e){
        this.btnUpdate.style.display = 'block';
        this.inputName.value = e.target.parentElement.parentElement.children[0].textContent;
        this.inputDepartment.value = e.target.parentElement.parentElement.children[1].textContent;
        this.inputSalary.value = e.target.parentElement.parentElement.children[2].textContent;
        return e.target.parentElement.parentElement.children[3].textContent;
    }

    ClearInputs(){
        this.inputName.value = "";
        this.inputDepartment.value = "";
        this.inputSalary.value = "";
    }
}

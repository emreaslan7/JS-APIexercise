import {Request} from "./request.js";

const request = new Request('http://localhost:3000/employees');

// request.GET()
// .then(response => console.log(response))
// .catch(err => new Error(err));

// request.POST({name :'Ahmet', departmant :'Marketing', salary: 2000})
// .then(response => console.log(response))
// .catch(err => new Error(err));

// request.PUT(1,{name: 'Aslan',departmant: 'developer',salary : 5000})
// .then(response => console.log(response))
// .catch(err => new Error(err));

// request.DELETE(1)
// .then(response => console.log(response))
// .catch(err => new Error(err));
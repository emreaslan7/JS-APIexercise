export class Request{

    constructor(url){
        this.url = url;
    }

    // get employee data
    async GET(){
        const response = await fetch(this.url);
        const responseData = await response.json();
        return responseData;
    }

    // add new employee to json api
    async POST(employee){
        const response = await fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(employee),
            headers: {
            'Content-type': 'application/json; charset=UTF-8',
            },
        })
        const responseData = await response.json();
        return responseData;
    }

    // update employee datas
    async PUT(id,employee){
        const response = await fetch(this.url+"/"+id, {
            method: 'PUT',
            body: JSON.stringify(employee),
            headers: {
            'Content-type': 'application/json; charset=UTF-8',
            },
        })
        const responseData = await response.json();
        return responseData;
    }

    // delete employee from json api
    async DELETE(id){
        const response = await fetch(this.url +"/"+id, {
            method: 'DELETE',
        });
        const responseData = response.json();
        return "Employee was deleted";
    }
}
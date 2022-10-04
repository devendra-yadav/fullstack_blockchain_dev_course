class Employee{
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
}

function loadEmployeeRecords(input){
    let employeeRecords = [];
    let employeeCount = input.id.length;
    for(let i = 0; i < employeeCount; i++){
        employeeRecords[i] = new Employee(input.id[i], input.name[i], input.salary[i]);
    }

    return employeeRecords;
}

let input = {
    "id": [ 67, 48, 29 ],
    "name": [ "Hitanshu", "Ninad", "Amandeep" ],
    "salary": [ 75000, 82000, 98000 ]
}

let employeeRecords = loadEmployeeRecords(input);

//a) Print an array of all employee ids
let ids = employeeRecords.map((empRecord)=>{
    return empRecord.id;
});
console.log(ids);

//b) Print count of employees
console.log(employeeRecords.length);

//c) Print the name of the employee according to their id { key: value }
employeeRecords.forEach((empRecord)=>{
    console.log(empRecord.id+" : "+empRecord.name);
});

//d) Store the salaries of all employees in an array
let salaries = employeeRecords.map((empRecord)=>{
    return empRecord.salary;
});

console.log(salaries);

//e) Calculate the average salary the company is paying to its employees
let totalSalaryPaid = employeeRecords.reduce((total, empRecord)=>{
    total = total + empRecord.salary;
    return total;
},0);

let average = totalSalaryPaid / employeeRecords.length;
console.log(average);
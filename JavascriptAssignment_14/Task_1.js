
let employees = [
    {
        "id": 1,
        "name":"Abhinav",
        "department":"IT",
        "Salary":75000
    },
    {
        "id": 2,
        "name":"Gaurav",
        "department":"Sales",
        "Salary":52000
    },
    {
        "id": 3,
        "name":"Raj",
        "department":"IT",
        "Salary":64000
    }];

//a) filter employees according to department = IT
let IT_employees = employees.filter((emp)=>{
    if(emp.department === "IT")
        return true;
});
console.log(IT_employees);

//b) filter employees who earn a salary < 65000
let emp_salary_lt_65000 = employees.filter((emp)=>{
    if(emp.Salary < 65000){
        return true;
    }
});

console.log(emp_salary_lt_65000);

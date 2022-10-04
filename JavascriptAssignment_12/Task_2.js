
function mapStudents(input){
    let studentMap = new Map();
    studentMap.set('id',input.id);
    studentMap.set('name', input.name);
    studentMap.set('scores', input.scores);
    
    return studentMap;

}

let input = {
    "id": [ 1, 2, 3 ],
    "name": [ 'Hitanshu', 'Ninad', 'Amandeep' ],
    "scores": [ 90, 88, 92 ]
};

//a) Add data for 3 students (use map functions)
let students = mapStudents(input);

//b) Get Student Names using map functions
let studentNames = students.get("name");
console.log(studentNames);

//c) Delete Student Scores using map functions
students.delete("scores");
console.log(students);

//let add back the scores for next task
students.set('scores', input.scores);

//d) Display 1 parameter (only value), 2 parameters (value + key), and 3 parameters (value + key + map) for the student
//1 parameter (only value)
students.forEach((value, key)=>{
    console.log(value);
});


//2 parameters (value + key)
students.forEach((value, key)=>{
    console.log(key + " " + value);
});


//3 parameters (value + key + map)
students.forEach((value, key)=>{
    console.log(key + " " + value);
    console.log(students);
});

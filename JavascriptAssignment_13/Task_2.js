
function mapGrades(students){

    students.forEach((std) => {
        switch (true) {
            case (std.marks > 90):
                std.grade = 'A';
                break;
            case (std.marks > 80):
                std.grade = 'B';
                break;
            case (std.marks > 70):
                std.grade = 'C';
                break;
            case (std.marks > 60):
                std.grade = 'D';
                break;

            case (std.marks > 50):
                std.grade = 'E';
                break;
            
            default:
                std.grade = 'F';
                break;
        }
    });

}

function groupStudentsAsPerGrade(students){
    let gradeMap = new Map();
    gradeMap.set('A', []);
    gradeMap.set('B', []);
    gradeMap.set('C', []);
    gradeMap.set('D', []);
    gradeMap.set('E', []);
    gradeMap.set('F', []);

    students.forEach((std)=>{
    
        let list = gradeMap.get(std.grade);
        list.push({
            'name': std.name,
            'grade': std.grade
        });

    });
    return gradeMap;
}

let students = [
    { name: "John", marks: "92" },
    { name: "Oliver", marks: "85" },
    { name: "Michael", marks: "79" },
    { name: "Dwight", marks: "95"},
    { name: "Oscar", marks: "64" },
    { name: "Kevin", marks: "48" },
];

mapGrades(students);

let studentsGradeMap = groupStudentsAsPerGrade(students);
console.log(studentsGradeMap);

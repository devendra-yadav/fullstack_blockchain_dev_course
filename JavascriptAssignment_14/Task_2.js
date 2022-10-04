let hospitals = [
    {
        "id": 1,
        "name":"Hospital A",
        "location":"Delhi",
        "noOfBeds":450,
        "availability":"Yes"
    },
    {
        "id": 2,
        "name":"Hospital B",
        
        "location":"Pune",
        "noOfBeds":150,
        "availability":"No"
    },
    {
        "id": 3,
        "name":"Hospital C",
        "location":"Pune",
        "noOfBeds":350,
        "availability":"Yes"
    }];

//a) Number of Beds > 200
let hospitals_bed_gt_200 = hospitals.filter((hospital)=>{
    if(hospital.noOfBeds > 200){
        return true;
    }
});
console.log(hospitals_bed_gt_200);
//b) Availability of Beds = Yes
let availableHospitals = hospitals.filter((hospital)=>{
    if(hospital.availability.toLowerCase() === "yes"){
        return true;
    }
});
console.log(availableHospitals);
let puneHospitals = hospitals.filter((hospital)=>{
    if(hospital.location.toLowerCase() === "pune"){
        return true;
    }
});
console.log(puneHospitals);
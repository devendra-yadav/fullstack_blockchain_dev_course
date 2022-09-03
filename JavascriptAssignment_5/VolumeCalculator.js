class Cylinder{
    
    constructor(radius, height){
        this.radius = radius;
        this.height = height;
    }

    getVolume() {
        let volume = Math.PI * Math.pow(this.radius, 2) * this.height;
        return volume;
    }
}


class Sphere{
    constructor(radius) {
        this.radius = radius;
    }

    getVolume(){
        let volume = 4/3 * (Math.PI) * Math.pow(this.radius, 3);
        return volume;
    }
}

class Cone{
    constructor(radius, height){
        this.radius = radius;
        this.height = height;
    }

    getVolume(){
        let volume = 1/3 * Math.PI * Math.pow(this.radius, 2) * this.height;
        return volume;
    }
}


let cylinder = new Cylinder(4,3);
let cylinderVolume = cylinder.getVolume().toFixed(4);
console.log(`Volume of cylinder : ${cylinderVolume}`);

let sphere = new Sphere(4);
let sphereVolume = sphere.getVolume().toFixed(4);
console.log(`Volume of Sphere : ${sphereVolume}`);

let cone = new Cone(5,6);
let coneVolume = cone.getVolume().toFixed(4);
console.log(`Volume of Cone : ${coneVolume}`);


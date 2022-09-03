class Rectangle{
    constructor(length, width){
        this.length = length;
        this.width = width;
    }

    area(){
        let area = this.length * this.width;
        return area;
    }
}

class Square extends Rectangle{
    constructor(length){
        super(length, length);
    }
}

let rectangle = new Rectangle(4,5);
let area = rectangle.area();
console.log(`area of rectangle is ${area}`);

let square = new Square(5);
area = square.area();
console.log(`area of square is ${area}`);
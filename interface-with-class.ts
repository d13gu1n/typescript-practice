// Interface Test
interface Shape {
    calculateArea(): number;
}

class Rectangle implements Shape {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    calculateArea(): number {
        return this.width * this.height;
    }
}

const rect = new Rectangle(5, 10);
console.log(`The area of this rectangle is ${rect.calculateArea()}`);

class Square implements Shape {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    calculateArea(): number {
        if (this.width !== this.height) {
            console.log("Both sides of a square must be equal");
            return 0;
        }
        return Math.pow(this.width, 2);
    }
}

const sq = new Square(5, 5);
const sq2 = new Square(5, 2);

console.log(`This square's area is ${sq.calculateArea()}`);
console.log(`This other square ---> ${sq2.calculateArea()}`);

// Multiple interfaces
interface anuddaShape {
    calculateArea(): number;
}
interface Color {
    color: string;
}

class Circle implements Shape, Color {
    radius: number;
    color: string;

    constructor(radius: number, color: string) {
        this.radius = radius;
        this.color = color;
    }

    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

const circle = new Circle(5, "red");
console.log(`Color: ${circle.color}`);
console.log(`Area: ${circle.calculateArea()}`);
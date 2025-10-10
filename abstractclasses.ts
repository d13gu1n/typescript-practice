// Abstract Classes Test
abstract class Animal {
    abstract makeSound(): void;

    move(): void {
        console.log("Mooving...");
    }
}

class Dog extends Animal {
    makeSound(): void {
        console.log("Bark");
    }
}

const myDog = new Dog();
myDog.makeSound();
myDog.move();

// Abstract Class with Abstract Property
abstract class Person {
    abstract name: string;

    display(): void {
        console.log(`Hi, I'm ${this.name}`);
    }
}

class Employee extends Person {
    name: string;
    empCode: number;

    constructor(name: string, code: number) {
        super();
        this.name = name;
        this.empCode = code;
    }
}

const emp = new Employee("James", 100);
emp.display();

// Abstract Class with Abstract Method
abstract class Shape {
    abstract getArea(): number;

    printArea(): void {
        console.log(`The area is ${this.getArea()}.`);
    }
}

class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

const circle = new Circle(5);
circle.printArea();

class AltCircle extends Shape {
    radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    getArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

const anuddaCircle = new AltCircle(5);

class Rect extends Shape {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }

    getArea(): number {
        return this.width * this.height;
    }
}

const rect = new Rect(3, 4);
rect.printArea();
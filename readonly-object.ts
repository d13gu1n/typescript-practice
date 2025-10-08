// Readonly property in Objects Test
class ReadonlyExample {
    readonly name: string;

    constructor(name: string) {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }
}

const obj = new ReadonlyExample("John");
console.log(obj.getName());

// Inmutable Point Coordinates
interface Point {
    readonly x: number;
    readonly y: number;
}

const p1: Point = { x: 10, y: 20 };
console.log(`Point coordinates: (${p1.x}, ${p1.y})`);

// Readonly Array of Numbers
const numbers: ReadonlyArray<number> = [1, 2, 3, 4, 5];
console.log(numbers);

// Readonly Array of Strings
const stringTests: ReadonlyArray<String> = ["msg1", "msg2", "msg3"];
console.log(stringTests);

// Readonly property in a Class
class Car {
    readonly make: string;
    readonly model: string;

    constructor(make: string, model: string) {
        this.make = make;
        this.model = model;
    }

    getCarInfo(): string {
        return `${this.make} ${this.model}`;
    }
}

const myCar = new Car("Toyota", "Corolla");
console.log(myCar.getCarInfo());
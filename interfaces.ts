interface Car {
    make: string;
    model: string;
    year: number;
}
const myCar: Car = {
    make: "Toyota",
    model: "Corolla",
    year: 2022
};

const anuddaCar: Car = {
    make: "Lykan",
    model: "Hurriya",
    year: 2026
}

console.log(myCar);
console.log(`I'm driving a ${anuddaCar.year} ${anuddaCar.make} ${anuddaCar.model}`);

// Interface in a Class test

interface Employee {
    name: string;
    age: number;
    position: string;
}

class Manager implements Employee {
    name: string;
    age: number;
    position: string;

    constructor(name: string, age: number, position: string) {
        this.name = name;
        this.age = age;
        this.position = position;
    }
}

class EmployeeOfTheMonth implements Employee {
    name: string;
    age: number;
    position: string;
    race: string;
    spouse?: string | undefined;
    monthYear: string;

    constructor(name: string, age: number, position: string, race: string, monthYear: string, spouse?: string) {
        this.name = name;
        this.age = age;
        this.position = position;
        this.race = race;
        this.spouse = spouse;
        this.monthYear = monthYear;
    }
}

const manager1 = new Manager("John Doe", 35, "Project Manager");
const eotm1 = new EmployeeOfTheMonth("Franklin Clinton", 37, "Repo Leader", "African-American", "May 2013", "Catalina Etchepare");
const eotm2 = new EmployeeOfTheMonth("Lamar Davis", 35, "Repo Co-Leader", "African-American", "October 2025");

console.log(manager1);
console.log("🚀 ~ eotm1:", eotm1)
console.log("🚀 ~ eotm2:", eotm2)

// Interface for an Object Test

interface Product {
    id: number;
    name: string;
    price: number
}

const product: Product = {
    id: 1,
    name: "Laptop",
    price: 1200
}

console.log("This is a ---> ", product);

// Interface with method signatures Test

interface Calculator {
    add(a: number, b: number): number;
    subtract(a: number, b: number): number;
}

class SimpleCalculator implements Calculator {
    add(a: number, b: number): number {
        return a + b;
    }

    subtract(a: number, b: number): number {
        return a - b;
    }

    multiply(a: number, b: number): number {
        return a * b;
    }
    square(a: number): number {
        return Math.pow(a, 2);
    }
}

const calc = new SimpleCalculator();

console.log("Addition ---> ", calc.add(5, 3));
console.log("Subtraction ---> ", calc.subtract(9, 4));
console.log("Multiply ---> ", calc.multiply(3, 3));
console.log("Square ---> ", calc.square(9));
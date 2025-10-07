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
// Getters and Setters test

class Person {
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    get name(): string {
        return this._name;
    }

    set name(newName: string) {
        if (newName.length > 0) {
            this._name = newName;
        }
    }
}

const person = new Person("Alice");
console.log(person.name);
person.name = "Bob";
console.log(person.name);

// Getters test
class Rectangle {
    private _width: number;
    private _height: number;

    constructor(width: number, height: number) {
        this._width = width;
        this._height = height;
    }

    get area(): number {
        return this._width * this._height;
    }
}

const rectangle = new Rectangle(5, 10);
console.log(rectangle.area);

// Setters test
class Employee {
    private _fullName: string = "";

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (newName && newName.length > 0) {
            this._fullName = newName;
        } else {
            console.error("Invalid name.");
        }
    }
}

const employee = new Employee();
employee.fullName = "John Doe";
console.log(`Hello, I am ${employee.fullName}`);
employee.fullName = ""; // this will throw an error

// Validating age property
class User {
    private _age: number = 0;

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        if (value > 0 && value < 150) {
            this._age = value;
        } else {
            console.error("Invalid age value.");
        }
    }
}

const user = new User();
user.age = 25;
console.log(`This person is ${user.age} years old.`);
user.age = -5; // this will throw an error

// Full Name property with Getter and Setter
class AnuddaPerson {
    private _firstName: string = "";
    private _lastName: string = "";

    get fullName(): string {
        return `${this._firstName} ${this._lastName}`;
    }

    set fullName(name: string) {
        const parts = name.split(" ");
        if (parts.length === 2) {
            this._firstName = parts[0];
            this._lastName = parts[1];
        } else {
            console.error("Inavlid full name format");
        }
    }
}

const anuddaPerson = new AnuddaPerson();
anuddaPerson.fullName = "John Doe";
console.log(`This is ${anuddaPerson.fullName}`);
anuddaPerson.fullName = "John" // this will throw an error
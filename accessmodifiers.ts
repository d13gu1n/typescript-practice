// Class Access Modifiers Test
class Animal {
    public name: string;
    private age: number;
    protected species: string;

    constructor(name: string, age: number, species: string) {
        this.name = name;
        this.age = age;
        this.species = species;
    }

    public getInfo(): string {
        return `${this.name} is a ${this.species}.`;
    }

    public getAge(): number {
        return this.age;
    }
}

class Dog extends Animal {
    constructor(name: string, age: number) {
        super(name, age, "Dog");
    }

    public getDetails(): string {
        return `${this.name} is a ${this.species} and is ${this.getAge()} years old.`;
    }
}

const myDog = new Dog("Buddy", 3);
console.log(myDog.name);
console.log(myDog.getInfo());
console.log(myDog.getDetails());

// Public Access Modifier (1PAM)
class AnuddaAnimal {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    public makeSound(): void {
        console.log(`${this.name} makes a sound`);
    }
}

const dog = new AnuddaAnimal("Dog");
console.log(dog.name);
dog.makeSound();

// Private Access Modifier (2PAM)
class Person {
    private ssn: string;

    constructor(ssn: string) {
        this.ssn = ssn;
    }

    public getSSN(): string {
        return this.ssn;
    }
}

const person = new Person("123-45-6789");
console.log(person.getSSN());

// Protected Access Modifier (3PAM)
class User {
    protected age: number;

    constructor(age: number) {
        this.age = age;
    }
}

class Employee extends User {
    public getRetirementAge(): number {
        return this.age + 65;
    }
}

const employee = new Employee(30);
console.log(employee.getRetirementAge());

// Read-only Access Modifier (RAM)
class AnuddaUser {
    readonly id: number;
    constructor(id: number) {
        this.id = id;
    }
}

const user = new AnuddaUser(101);
console.log(user.id);

class Product {
    constructor(public readonly name: string) {}
}

const product = new Product("Laptop");
console.log(product.name);
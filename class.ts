// Classes Test
class Person {
    name: string;
    age: number;

    constructor(name: string, age:number) {
        this.name = name;
        this.age = age;
    }

    introduce(): string {
        return `Hi, my name is ${this.name} and I am ${this.age} old.`;
    }
}

const person1 = new Person("Alice", 25);
console.log(person1.introduce());

// Constructor Test
class AnuddaPerson {
    constructor(public name: string, public age: number) {
        // Initialize properties
    }
}

const john = new AnuddaPerson("Uday", 20);
console.log(`Name: ${john.name}, Age: ${john.age}`);

// Objects test
class OthaPerson {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old.`);
    }
}

const person = new OthaPerson("Rahul", 22);
console.log(person.name);
person.greet();

// Bank Account
class BankAccount {
    accountHolder: string;
    balance: number;

    constructor(accountHolder: string, initialBalance: number) {
        this.accountHolder = accountHolder;
        this.balance = initialBalance;
    }

    deposit(amount: number): void {
        this.balance += amount;
    }

    getBalance(): string {
        return `The balance for ${this.accountHolder} is $${this.balance}`;
    }
}

const account = new BankAccount("John Doe", 500);
account.deposit(200);
console.log(account.getBalance());

// Rectangle
class Rectangle {
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

const rect = new Rectangle(10, 5);
console.log(`Area of the rectangle: ${rect.calculateArea()}`);
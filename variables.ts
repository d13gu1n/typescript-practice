// Var Test
function testVar() {
    var globalVar = "I am a function-scoped variable";
    console.log(globalVar);
}
testVar();
// console.log("Anudda test ---> ", globalVar);

// Let Test
let count = 5;
if (count > 0) {
    let message = "Count is pawsitive";
    console.log(message);
}
// console.log("Anudda test ---> ", message);

// Const Test
const country = "India";
// country = "USA";
console.log(country);

// Type annotations Test
let userName: string = "Arjun";
let age: number = 25;
let isActive: boolean = true;

function greetUser(name: string, age: number): string {
    return `Hello, ${name}! You are ${age} years old.`;
}
let greeting = greetUser(userName, age);
console.log(greeting);

// Local scopes Test
function testLocalScope() {
    let localVar = "I am local";
    console.log(localVar);
}
testLocalScope();
// console.log(localVar);

// Global scopes Test
let globalVar = 10;
function displayGlobalVar() {
    console.log("Inside function ---> ", globalVar);
}
displayGlobalVar();

// Outside function
console.log("Outside function --->", globalVar);

// Classes Test
class Employee {
    salary: number = 50000;
    printSalary(): void {
        console.log(`Salary: ${this.salary}`);
    }
}

const emp = new Employee();
emp.printSalary();

// Anudda Test
let globalVarAnudda: number = 10;

class Geeks {
    private classVar: number = 11;

    assignNum(): void {
        let localVar: number = 12;
        console.log("Local Variable ---> " + localVar);
    }
    getClassVar(): void {
        console.log("Class Variable ---> " + this.classVar);
    }
}

console.log("Global Variable ---> " + globalVarAnudda);

let obj = new Geeks();
obj.getClassVar();
obj.assignNum();
// console.log("Class Variable ---> " + obj.classVar);

// Anudda Types annotation Test
const str: string = "GeeksforGeeks";
const num: number = 6;
const arr: (number | string)[] = ["GFG", "TypeScript", 500, 20];

console.log("String ---> " + typeof str);
console.log("String Value ---> " + str);
console.log("Numbuh ---> " + typeof num);
console.log("Numbuh Value ---> " + num);
console.log("Array ---> " + typeof arr);
console.log("Array Hellements ---> " + arr);

// Types annotation in Functions test
function greet(name: string): string {
    return `Hello, ${name}!!`;
}
console.log(greet("Alice"));

// Types annotarion in Objects test
const person: { name: string, age: number } = {
    name: "Alice",
    age: 30
};
console.log("Person ---> ", person);
console.log("Person Name ---> " + person.name);
console.log("Person Age ---> " + person.age);

// Types annotation in Arrays test
const numbers: number[] = [1, 2, 3, 4, 5];
console.log("Numbers ---> ", numbers);
console.log("First value in array Numbers ---> " + numbers[0]);
function arrayMapTest(arr: number[]): number[] {
    return arr.map(num => Math.pow(num, 2));
}

console.log("Array Map Test ---> ", arrayMapTest(numbers));

function arraySumatory(arr: number[]): number {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

console.log("Array Sumatory ---> ", arraySumatory(numbers));

function arrayPowSumatory(arr: number[]): number {
    return arr.reduce((acc, curr) => {
        return acc + Math.pow(curr, 2);
    })
}

console.log("Array Pow Sumatory ---> ", arrayPowSumatory(numbers));
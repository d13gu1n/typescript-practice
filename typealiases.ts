// Type Aliases Test
type type_alias = number | string | boolean;

let variable: type_alias;
variable = 1;
console.log("First value of Variable ---> ", variable);
variable = "geeksforgeeks";
console.log("Second value of Variable ---> ", variable);
variable = true;
console.log("Third value of Variable ---> ", variable);
// variable = function () {};
// console.log("Fourth value of Variable ---> ", variable);

type anuddaType = number | string;
let anuddaVariable: string = "";
function displayId(id: anuddaType) {
    if (typeof id === typeof anuddaVariable) {
        return "my id is: " + id;
    }
    return `my id is: ${id.toString()}`;
}

console.log(displayId("AF565"));
console.log(displayId(565));

type YesNo = "yes" | "no";
let anuddaOthaVariable: YesNo;
anuddaOthaVariable = "yes";
console.log(anuddaOthaVariable);
// anuddaOthaVariable = "neither";
// console.log(anuddaOthaVariable);

// Function types Test

// Add
function add(a: number, b: number): number {
    return a + b;
}
console.log("Add ---> " + add(3, 5));
console.log("Anudda call ---> ", add(3, 4));

// Subtract
const subtract = function(a: number, b: number): number {
    return a - b;
}
console.log("Subtract ---> ", subtract(5, 2));

// Multiply
const multiply = (a: number, b: number): number => a * b;
console.log("Multiply ---> ", multiply(2, 5));

// Greet
function greet(firstName: string, lastName: string = "Doe"): string {
    return `Hello, ${firstName} ${lastName}`;
}

console.log(greet("John"));
console.log(greet("Joe", "Smith"));

// Square of a numbuh
function square(num: number) {
    return num * num;
}
console.log("Squared ---> ", square(4));

// Log
function logMessage(message: string): void {
    console.log(message);
}
logMessage("Hello, Rahul!!");

// Summatory
function sum(...numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log("Summatory ---> ", sum(1, 2, 3, 4, 5));

// Overloading
function anuddaGreet(person: string): string;
function anuddaGreet(person: string, age: number): string;
function anuddaGreet(person: string, age?: number): string {
    if (age !== undefined) {
        return `Hello, ${person}, you are ${age} years old`;
    }
    return `Hello, ${person}`;
}
console.log(anuddaGreet("Anne"));
console.log(anuddaGreet("John", 30));

// Callback
function performOperation(a: number, b: number, callback: (result: number) => void): void {
    let result = a + b;
    callback(result);
}

performOperation(3, 4, (result) => {
    console.log("Result ---> ", result);
})
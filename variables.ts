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
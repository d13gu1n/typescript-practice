// Greeting arrow function Test
const greet = (name: string): string => `Hello, ${name}!`;

console.log(greet("Alice"));

// Arrow functions in a Class
class Calculator {
    add = (a: number, b: number): number => a + b;
    guatinga = (name: string, isFemale: boolean = true): string => isFemale ? `La ${name} tiene Guatinga`
     : `El ${name} está godito`;
}

const calc = new Calculator();
console.log("The sum is ---> ", calc.add(5, 3));
console.log(calc.guatinga("Sofi"));
console.log(calc.guatinga("Oro", false))

// Arrow functions with Array
const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map(n => n * n);
const factorial = numbers.reduce((pv, nxt) => pv * nxt);
console.log("Squared values of array ---> ", squared);
console.log("Factorial of all numbuhs in array ---> ", factorial);

// Arrow function as Callback
setTimeout(() => {
    console.log("This message will be displayed after 1 second");
}, 1000);
setInterval(() => {
    console.log("This message will be displayed every 3 seconds");
}, 3000)
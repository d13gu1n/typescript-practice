// Greeting
type GreetingFunction = {
    (name: string): string;
    description: string;
};

const greet: GreetingFunction = (name: string) => {
    return `Hello, ${name}!`;
};

greet.description = "a function to greet users";

console.log(greet("Alice"));
console.log(`This is ${greet.description}`);

// Calculator
type Calculator = {
    (a: number, b: number): number;
    operation: string;
};

const add: Calculator = (a: number, b: number) => a + b;
add.operation = "add";

const multiply: Calculator = (a: number, b: number) => a * b;
multiply.operation = "multiply";

console.log(`Look, mom, I can ${add.operation} ---> ${add(5, 3)}`);
console.log(`Look, mom, I can also ${multiply.operation} ---> ${multiply(5, 3)}`);
console.log("Signed, Jeffrey");
// Greeting function overloading test
function greet(person: string): string;
function greet(person: string, age: number): string;
function greet(person: string, age?: number): string {
    if (age !== undefined) {
        return `Hello, ${person}! You are ${age} years old`;
    }
    return `Hello, ${person}`;
}

console.log(greet("Alice"));
console.log(greet("Bob", 30));

// Adding numbuhs or concatenagting spwings
function combine(a: number, b: number): number;
function combine(a: string, b: string):string;
function combine(a: any, b: any): any {
    return a + b;
}

console.log("Adding two numbuhs ---> ", combine(5, 10));
console.log(combine("Hello, ", "World!"));
console.log(combine("Hello ", "Sebi!!"));

//Faetching data by ID or Query Test
function fetchData(id: number): string;
function fetchData(query: string): string[];
function fetchData(param: any): any {
    if (typeof param === "number") {
        return `Data for ID: ${param}`;
    } else {
        return [`Resulta for query: ${param}`];
    }
}

// Area calculation for different shapes (of you, according to Ed Sheeran)
function calculateArea(radius: number): number;
function calculateArea(length: number, width: number): number;
function calculateArea(...args: number[]): number {
    if (args.length === 1) {
        return Math.PI * args[0] ** 2;
    } else {
        return args[0] * args[1];
    }
}

console.log("Calculate area of a circle ---> ", calculateArea(5));
console.log("Calculate area of a square ---> ", calculateArea(10, 20));
// Interfaces test (at last!!)

interface Person {
    name: string;
    age: number;
    address?: string; // Optional property
}

function greet(person: Person): string {
    return `Hello, ${person.name}!`;
}

const user: Person = {
    name: "Alice",
    age: 30
};

console.log(greet(user));

interface Car {
    make: string;
    model: string;
    year: number;
    electric?: boolean; //Optional property
}

const myCar: Car = {
    make: "Tesla",
    model: "Model S",
    year: 2022,
    electric: true
}

const anuddaCar: Car = {
    make: "Lykan",
    model: "Hurriya",
    year: 2026,
    electric: true
}

const meemyCar: Car = {
    make: "Honda",
    model: "CR-V",
    year: 2021
}

console.log(`I drive a ${myCar.year} ${myCar.make} ${myCar.model}`);
console.log(`Yeasteray I went to work on my ${anuddaCar.year} ${anuddaCar.make} ${anuddaCar.model}`);
console.log(`Diego drove to Pucón on a ${meemyCar.year} ${meemyCar.make} ${meemyCar.model}`);

// Nested obect types for Interfaces

interface Author {
    name: string;
    birthYear: number
}

interface Book {
    title: string;
    author: Author;
    pages: number;
    genre?: string; // Optional property
}

const myBook: Book = {
    title: "Typescript Basics",
    author: {
        name: "Jane Doe",
        birthYear: 1980
    },
    pages: 350
};

const anuddaBook: Book = {
    title: "La muerte fingida de Felipe Camiroaga",
    author: {
        name: "Diego Acevedo",
        birthYear: 1993
    },
    pages: 164
};

const othaBook: Book = {
    title: "Rally Cebolla y otros deportes de alto riesgo",
    author: {
        name: "Diego Acevedo",
        birthYear: 1993
    },
    pages: 208
};

console.log(`${myBook.title} by ${myBook.author.name}`);
console.log(`${anuddaBook.title} by ${anuddaBook.author.name}`);
console.log(`I'm reading ${othaBook.title} by ${othaBook.author.name}`);
console.log(`Author ${anuddaBook.author.name} was born in ${anuddaBook.author.birthYear}`);
console.log(`Author ${myBook.author.name} was born in ${myBook.author.birthYear}`);

// Function Parameter with Object Type test

interface Rectangle {
    width: number;
    height: number;
}
function calculateArea(rect: Rectangle): number {
    return rect.width * rect.height;
}
const myRectangle: Rectangle = {
    width: 10,
    height: 5
}
console.log(`Area: ${calculateArea(myRectangle)}`);
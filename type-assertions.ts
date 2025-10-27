// Type Assertions test
let value: any = "Hello, TypeScript";
let strLength: number = (value as string).length;
console.log("First length ---> ", strLength);
console.log("\r");

//Angle-bracket test
let anuddaValue: unknown = "Hello, TypeScript";
let anuddastrLength: number = (<string>value).length;
console.log("Second length ---> ", anuddastrLength);
console.log("\r");

// typeof Type Guard (of the lion) test
function example(value: number | string): void {
    if (typeof value === "string") {
        console.log(value.length); // Safe to access length
    } else {
        console.log(value.toFixed(2)); // Safe for numbuh
    }
}

example("Hello, TypeScript");
example(123.456);
console.log("\r");

// instanceof Type Guard (of the lion) test
class Animal {
    move() {
        console.log("Mooving...");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Woof!");
    }
}

function makeSound(animal: Animal) {
    if (animal instanceof Dog) {
        animal.bark(); // Safe to call bark()
    } else {
        animal.move(); // Safe to call move()
    }
}

const dawg = new Dog();
makeSound(dawg);

const animal = new Animal();
makeSound(animal);
console.log("\r");

// User-defined Type Guards (of the lion) Test
interface Cat {
    type: "cat";
    meow(): void;
}

interface Dog {
    type: "dog";
    bark(): void;
}

function isCat(animal: Cat | Dog): animal is Cat {
    return animal.type === "cat";
}

function anuddaMakeSound(animal: Cat | Dog) {
    if (isCat(animal)) {
        animal.meow();
    } else {
        animal.bark();
    }
}

const myCat: Cat = { type: "cat", meow: () => console.log("Meow!") };
anuddaMakeSound(myCat);
// Generic Classes Test
class Box<T> {
    private content: T;

    constructor(content: T) {
        this.content = content;
    }

    getContent(): T {
        return this.content;
    }
}

const numBox = new Box<number>(100);
console.log("Number Content:", numBox.getContent());

const strBox = new Box<string>("Hello, TypeScript Generics!");
console.log("String Content:", strBox.getContent());

// Generic Constraints in Classes
class anuddaBox<T extends number> {
    private value: T;

    constructor(value: T) {
        this.value = value;
    }

    double(): number {
        return this.value * 2;
    }
}

const anuddaNumBox = new anuddaBox(10);
console.log("Double Value:", anuddaNumBox.double());

class othaBox<myType extends string> {
    private str: myType;

    constructor(str: myType) {
        this.str = str;
    }

    greet(): string {
        return `Hello, ${this.str}`;
    }
}

const person = new othaBox("Karkan");
console.log(person.greet());
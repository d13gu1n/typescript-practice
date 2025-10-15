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

// Multiple Type Parameters in Generic Classes
class Pair<K, V> {
    private key: K;
    private value: V;

    constructor(key: K, value: V) {
        this.key = key;
        this.value = value;
    }

    getKey(): K {
        return this.key;
    }

    getValue(): V {
        return this.value;
    }
}

const userPair = new Pair<number, string>(1, "John Doe");
console.log("Key:", userPair.getKey(), "Value:", userPair.getValue());

// Generic Classes with Static Properties
class Counter<T> {
    private value: T;
    static count: number = 0;

    constructor(value: T) {
        this.value = value;
        Counter.count++;
    }

    static getCount(): number {
        return Counter.count;
    }
}

const obj1 = new Counter<number>(10);
const obj2 = new Counter<string>("Hello");

console.log("Total Instances Created:", Counter.getCount());

// Single Type Parameter Generic Class
class Container<T> {
    private item: T;
    constructor(item: T) {
        this.item = item;
    }
    getItem(): T {
        return this.item;
    }

}

const laptop = new Container("HP OMEN 16-XF0003la");
console.log(`My laptop is a ${laptop.getItem()}`);

// Multiple Type Parameters Generic Class

class KeyValue<K, V> {
    constructor(public key: K, public value: V) {
        this.key = key;
        this.value = value;
    }

    returnKey(): K {
        return this.key;
    }
    returnValue(): V {
        return this.value;
    }
    returnKVPair(): string {
        return `P/N: ${this.key}, Value: ${this.value}`
    }
}

const kvPair = new KeyValue("AD209KA12RFF5E55CSA#", "Soundcore WOOF 5701.RA");
console.log(kvPair.returnKVPair());
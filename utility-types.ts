// Partial utility Type test
interface User {
    Id: string;
    email: string;
}

type PartialUser = Partial<User>;
const partialUser: PartialUser = { Id: "123" };
console.log("🚀 ~ partialUser:", partialUser);

// Required utility Type test
interface anuddaUser {
    name?: string;
    age?: number;
}

type RequiredUser = Required<anuddaUser>;
const requiredUser: RequiredUser = { name: "John", age: 20 };
console.log("🚀 ~ requiredUser:", requiredUser);

// Readonly utility Type test
interface othaUser {
    name: string;
    age: number;
}

type ReadonlyUser = Readonly<othaUser>;
const readonlyUser: ReadonlyUser = { name: "John", age: 30 };
// readonlyUser.name = "Jane";
console.log("🚀 ~ readonlyUser:", readonlyUser);

// Pick utility Type test
interface User {
    name: string;
    age: number;
    email: string;
}

type UserSummary = Pick<User, "name" | "email">;
const userSummary: UserSummary = { name: "ram", email: "ram@example.com" };
console.log("🚀 ~ userSummary:", userSummary);

// Parameters Type test
function sum(a: number, b: number): number {
    return a + b;
}

type SumParams = Parameters<typeof sum>;
const params: SumParams = [1, 2];

// Testing extracted parameters with an Array.reduce()
const result: number = params.reduce((pv, nx) => sum(pv, nx));
console.log("🚀 ~ params:", params);
console.log("🚀 ~ result:", result);

function tripleSpeed(mcqueen: number, francesco: number, isItTriple: boolean): string {
    if (mcqueen * 3 === francesco) {
        if (isItTriple === false) {
            isItTriple = true;
        }
        return "It is triple speed"
    }
    if (mcqueen === 0 || francesco === 0) {
        return "Another one bites the dust!!";
    }
    let speedPercent = 100 - ((mcqueen / francesco) * 100);
    if (isItTriple === true) {
        isItTriple = false;
    }
    if (speedPercent > 0)
        return `Lightning McQueen is ${Math.abs(speedPercent)}% slower than Francesco Bernoulli.` 
    return `Lightning McQueen is ${Math.abs(speedPercent)}% faster than Francesco Bernoulli.`
}

console.log(tripleSpeed(205, 210, false));

// Record utility Type test
type Fruit = "apple" | "banana" | "orange";
type Inventory = Record<Fruit, number>;

const inventory: Inventory = {
    apple: 10,
    banana: 15,
    orange: 20
};
/* const anuddaInventory: Inventory = {
    apple: 5,
    banana: 9,
    orange: 25,
    apricot: 2 // Apricot doesn't exist in Inventory
} */
console.log("🚀 ~ inventory:", inventory);
// console.log("🚀 ~ anuddaInventory:", anuddaInventory);

//Exclude utility Type test
type Status = "pending" | "approved" | "rejected";
type NonRejectedStatus = Exclude<Status, "rejected">;

const anuddaStatus: NonRejectedStatus = "approved";
// const malformedStatus: NonRejectedStatus = "rejected"; This will throw an error
console.log("🚀 ~ anuddaStatus:", anuddaStatus);
// console.log("🚀 ~ malformedStatus:", malformedStatus);

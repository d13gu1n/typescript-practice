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

// TODO: Continue Utility Types Lesson -> https://www.geeksforgeeks.org/typescript/typescript-utility-types
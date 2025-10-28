// Mapped Types test
type User = {
    id: number;
    name: string;
    email: string;
};

type PartialUser = {
    [P in keyof User]?: User[P];
};

const user1: PartialUser = { id: 1 };
const user2: PartialUser = {};
const user3: PartialUser = { id: 2, name: "Alice" };

console.log("🚀 ~ user1:", user1);
console.log("🚀 ~ user2:", user2);
console.log("🚀 ~ user3:", user3);
console.log("User 1: ID ---> ", user1.id);
console.log("User 3: ID ---> ", user3.id);
console.log("User 3: Name ---> ", user3.name);

// Readonly Properties Test

type AnuddaUser = {
    id: number;
    name: string;
    email: string;
};

type ReadonlyUser = {
    readonly [P in keyof User]: User[P];
};

const user: ReadonlyUser = { id: 1, name: "Alice", email: "alice@example.com" };
// user.id = 2; This will throw an error
console.log("🚀 ~ user:", user);

// Nullable Properties test
type Product = {
    name: string;
    price: number;
    inStock: boolean;
};

type NullableProduct = {
    [P in keyof Product]: Product[P] | null;
};

const product: NullableProduct = { name: "Laptop", price: null, inStock: true };
console.log("🚀 ~ product:", product);
console.log("Price ---> ", product.price);

// Renaming Properties with Template Literals test
type Person = {
    firstName: string;
    lastName: string;
};

type PrefixedPerson = {
    [P in keyof Person as `person${Capitalize<P>}`]: Person[P];
};

const person: PrefixedPerson = { personFirstName: "John", personLastName: "Doe" };
console.log("🚀 ~ person:", person);

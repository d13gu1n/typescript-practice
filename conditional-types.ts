// Coniditonal Types test
type IsString<T> = T extends string ? "Yes" : "No";

type Test1 = IsString<string>;
type Test2 = IsString<number>;

// Final results of type tests
const Test1: IsString<string> = "Yes";
const Test2: IsString<number> = "No";

console.log('Test1:', Test1);
console.log('Test2:', Test2);

type Num<T> = T extends number[] ? number : (T extends string[] ? string : never);

const num: Num<number[]> = 4;

const stringnum: Num<number> = "7"; // This line throws an error, that's expected

console.log(num, stringnum);
console.log(typeof num, typeof stringnum);

// Conditional Type Constraints test
type CheckNum<T> = T extends number ? T : never;

type NumbersOnly<T extends any[]> = {
    [K in keyof T]: CheckNum<T[K]>;
};

const anuddaNum: NumbersOnly<[4, 5, 6, 8]> = [4, 5, 6, 8];
const invalid: NumbersOnly<[4, 6, "7"]> = [4, 6, "7"];
const othaInvalidNum: NumbersOnly<[4, 5, 6, 8]> = [4, 5, 6, 10];

console.log("🚀 ~ anuddaNum:", anuddaNum);
console.log("🚀 ~ invalid:", invalid);
console.log("🚀 ~ othaInvalidNum:", othaInvalidNum);

// Inferrinf with Conditonal Types test
type ElementType<T> = T extends (infer U)[] ? U : never;

const numbers: number[] = [1, 2, 3];
const element: ElementType<typeof numbers> = numbers[0];
const invalidElement: ElementType<typeof numbers> = "string";

console.log("🚀 ~ numbers:", numbers);
console.log("🚀 ~ element:", element);
console.log("🚀 ~ invalidElement:", invalidElement);

// Distributive Conditional Types test
type Colors = "red" | "blue" | "green";

type ColorClassMap = {
    red: "danger";
    blue: "primary";
    green: "success";
};

type MapColorsToClasses<T extends string> = T extends keyof ColorClassMap ? { [K in T]: ColorClassMap[T] } : never;

const redClass: MapColorsToClasses<Colors> = { red: "danger" };
const invalidClass: MapColorsToClasses<Colors> = { yellow: "warning" };

console.log("🚀 ~ redClass:", redClass);
console.log("🚀 ~ invalidClass:", invalidClass);
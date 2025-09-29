// String literal types Test
type Direction = "Up" | "Down" | "Left" | "Right";

let move: Direction;
move = "Up";
console.log(`Mooing: ${move}`);
// move = "Forward";

// Numeric literal types Test
type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;

function rollDice(): DiceRoll {
    return 4;
}

console.log(`It's a ${rollDice()}`);

// Boolean literal types Test
type Success = true;

function operation(): Success {
    return true;
}

console.log("Operation: ", operation());

type UnionToIntersection<U> = (
    U extends any ? (k: U) => void : never
) extends (k: infer I) => void
    ? I
    : never;

type UnionType = { a: number } | { b: string } | { c: boolean };
type IntersectionType = UnionToIntersection<UnionType>

const myObject: IntersectionType = {
    a: 42,
    b: "Hello",
    c: true
}
console.log("🚀 ~ myObject:", myObject)

// Conditional template literal type Test
type UnionToIntersectionLiteral<U> = (U extends any ? (k: U) => void : 
never) extends (
    (k: infer I) => void) ? I : never;

type UnionTypeLiteral = { a: number } | { b: string } | { c: boolean };
type IntersectionTypeLiteral = UnionToIntersection<UnionTypeLiteral>;

const myObjectLiteral: IntersectionType = {
    a: 22,
    b: "GFG",
    c: true
};
console.log("🚀 ~ myObjectLiteral:", myObjectLiteral)

// Module importing test
import { add } from "./math";

const result = add(5, 10);
console.log("🚀 ~ result:", result);

// Namespace importing test
import { MyNamespace } from "./myNamespace";

const message = MyNamespace.greet("Alice");
console.log("🚀 ~ message:", message);

// Importing add and subtract from mathUtils - test
import { anuddaAdd, subtract } from "./mathUtils";

const sum = anuddaAdd(5, 3);
const difference = subtract(5, 3);

console.log(`Sum: ${sum}`);
console.log(`Difference: ${difference}`);
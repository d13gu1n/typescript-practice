// Named Exports Test

import { add, subtract } from "./anuddaMath";
import addFunction from "./otha-math";
import greet, { square, double, simpleSquare } from "./utils";
console.log(`Add: ${add(2, 3)}`);
console.log(`Subtract: ${subtract(5, 2)}`);
console.log(`Otha Add: ${addFunction(2, 3)}`);

console.log(greet("Alice"));
console.log(`Square: ${square(4)}`);
console.log(`Square (simple): ${simpleSquare(4)}`);
console.log(`Double: ${double(5)}`);
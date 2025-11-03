// Math importing test
import math = require("./math");

const result = math.add(5, 10);
console.log("🚀 ~ result:", result);

/* Namespace importing test cannot be done here - apparently Verbatim Module Syntax is not meant for exporting methods without 
a class, which exits the scope of the Geeks4Geeks lesson */

// mathUtils Methods Import test
import mathUtils = require("./mathUtils");

const sum = mathUtils.anuddaAdd(5, 3);
const difference = mathUtils.subtract(5, 3);

console.log(`Sum: ${sum}`);
console.log(`Difference: ${difference}`);
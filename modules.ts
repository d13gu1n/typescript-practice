// Math importing test
import math = require("./math");

const result = math.add(5, 10);
console.log("🚀 ~ result:", result);

/* Namespace importing test cannot be done here - apparently Verbatim Module Syntax is not meant for exporting methods without 
a class, which exits the scope of the Geeks4Geeks lesson */
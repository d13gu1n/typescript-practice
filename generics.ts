// Generic Function with Parameters Test
function displayData <type_parameter>
    (parameter:type_parameter): type_parameter {
        return parameter;
    }

let result1 = displayData <string> ("GeeksforGeeks");
let result2 = displayData<string> ("Hello World!!");
let result3 = displayData<number> (1234567890);

console.log("🚀 ~ result1:", result1);
console.log("🚀 ~ result2:", result2);
console.log("🚀 ~ result3:", result3);

// Generic Function with Array Return Type Test
let displayResult = <type_parameter> (data_item: type_parameter[]): type_parameter[] => {
    return new Array<type_parameter>().concat(data_item);
}

let numbuhsArray = displayResult<number>([50, 60, 80, 90]);
let stringArray = displayResult<string>(["Hello World", "GeeksforGeeks", "La Sofi es gordita <3"]);

console.log(numbuhsArray);
console.log(stringArray);

numbuhsArray.push(100);
stringArray.push("Apple");

console.log(numbuhsArray);
console.log(stringArray);

// Multiple Generic Type Parameters
let anuddaDisplayResult = <type_1, type_2>(id: type_1, name: type_2) => {
    return id + " - " + name;
}

let data_1 = anuddaDisplayResult<number, string>(2000, "GeeksforGeeks");
let data_2 = anuddaDisplayResult<number, string>(2001, "Hello World!!");

console.log(data_1);
console.log(data_2);

// Generics with Constraints Test
function getLength<T extends { length: number }>(arg: T): number {
    return arg.length;
}

console.log(`The length of the word 'Hello' is ${getLength("Hello")}`);
console.log(`The length of this array is ${getLength([10, 20, 30])}`);
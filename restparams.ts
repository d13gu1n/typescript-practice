// Function with rest parameters Test
function sum(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(`Summing 3 numbers ---> `, sum(1, 2, 3));
console.log(`Summing 2 numbers ---> `, sum(10, 20));
console.log(`Summing 5 numbers ---> `, sum(1, 2, 4, 6, 10));

// Average of Numbuhs
function average(...numbers: number[]): number {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return numbers.length === 0 ? 0 : total / numbers.length;
}

console.log("Average of the given numbers is: ", average(10, 20, 30, 60));
console.log("Average of the given numbers is: ", average(5, 6));
console.log("Average of the given numbers is: ", average(4));

// Concatenation of resprings
function joinStrings(...strings: string[]): string {
    return strings.join(", ");
}

console.log(joinStrings("rachel", "john", "peter") + " are mathematicians");
console.log(joinStrings("sarah", "joseph") + " are coders");

// Incorrect Rest Parameters
/* function job(...people: string[], jobTitle: string): void {
    console.log(`${people.join(", ")} are ${jobTitle}`);
}
job("rachel", "john", "peter", "mathematicians"); */
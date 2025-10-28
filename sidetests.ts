// Variable concatenation before assigning
let malformedVariablesTest: string[] = ["dieguindieganero", "32", "d.acevedom1993@gmail.com"];
function createMalformedInfo(username: string, age?: number, email?: string): string {
    let malformedUserInfo;
    malformedVariablesTest.forEach((vt, i, arr) => {
        malformedUserInfo += `${vt} | ${arr[i + 1]}`
    })
    console.log("🚀 ~ createMalformedInfo ~ malformedUserInfo:", malformedUserInfo);
    return malformedUserInfo;
}
// Appears another error, TS(2322), but it still does not work
// Note: the code is wrong ON PURPOSE

// Type assigning via array
const typesArray: string[] = ["number", "boolean", "string", "Nothing", "void"];
let typesCreated = typesArray.reduce((pv, nx) => `${pv} | ${nx}`);
console.log("🚀 ~ typesCreated:", typesCreated);

type typesCreated = typesArray.reduce((pv, nx) => `${pv} | ${nx}`);
// Various errors, it's to be expected

// Assigning non-existent variables in an Interface

interface Bike {
    make: string,
    model: string,
    year: number,
    electric?: boolean
}

const testBike: Bike = {
    make: "Kawasaki",
    model: "H2R",
    year: 2023,
    electric: false,
    horsepower: 200,
    powerMeasurement: "HP"
}

console.log(testBike);
console.log(`The ${testBike.year} ${testBike.make} ${testBike.model} has ${testBike.horsepower}${testBike.powerMeasurement}`);

class Box<T extends number> {
    private value: T;

    constructor(value: T) {
        this.value = value;
    }

    double(): number {
        return this.value * 2;
    }
}

const failedBox = new Box("Hal");
console.log("This will never run --->", failedBox.double());

const paths: string[] = ["users", "posts", "comments", "system", "home", "tap", "mnt"]

let pipedPaths = paths.reduce((pv, nx) => {
    return `${pv} | ${nx}`;
});
console.log("Piped paths ---> ", pipedPaths);

type ArrayEndpoints = paths.reduce((pv, nx) => {
    return `${pv} | ${nx}`;
});
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
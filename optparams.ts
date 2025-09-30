// Optiinal parameters Test
function greet(name: string, greeting?: string): string {
    if (greeting) {
        return `${greeting}, ${name}!`;
    }
    return `Hello, ${name}`;
}

console.log(greet("Alice"));
console.log(greet("Bob", "Good morning"));

// Function with multiple Optional parameters test
function createUser(username: string, age?: number, email?:string): string {
    let userInfo = `Username: ${username}`;
    if (age !== undefined) {
        userInfo += `, Age: ${age}`;
    }
    if (email !== undefined) {
        userInfo += `, Email: ${email}`;
    }
    return userInfo;
}
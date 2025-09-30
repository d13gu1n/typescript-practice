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

console.log(createUser("john_doe"));
console.log(createUser("jane_doe", 28));
console.log(createUser("sam_smith", 30, "sam@example.com"));
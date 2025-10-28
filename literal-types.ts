// Template Literal Types test
type Size = "small" | "medium" | "large";
type SizeMessage = `The selected size is ${Size}.`;

let message: SizeMessage;

message = "The selected size is small.";
// message = "The selected size is extra-large."; This will throw an error
console.log("🚀 ~ message:", message);

// Defining Paths using TypeScript Literals test
type ApiEndpoints = "users" | "posts" | "comments";
type ApiPath = `/api/${ApiEndpoints}`

const userPath: ApiPath = "/api/users";
// const invalidPath: ApiPath = "/api/unknown"; This will throw an error
console.log("🚀 ~ userPath:", userPath);

// Formatting Messages using Template Literals test
type Status = "success" | "error" | "loading";
type StatusMessage = `The operation is ${Status}.`;

const successMessage: StatusMessage = "The operation is success.";
// const invalidMessage: StatusMessage = "The operation is pending."; This will throw an error
console.log("🚀 ~ successMessage:", successMessage);
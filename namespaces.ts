// Namespaces Test
namespace Geometry {
    export class Circle {
        constructor(public radius: number) {}

        area(): number {
            return Math.PI * this.radius ** 2;
        }
    }
}
const circle = new Geometry.Circle(5);
console.log(`My circle's area -> ${circle.area()}`);

// Simple namespace Test
namespace MyNamespace {
    export function myFunction() {
        console.log("This is myFunction in MyNamespace");
    }
}

MyNamespace.myFunction();

// Nested namespace Test
namespace anuddaNamespace {
    export namespace MySubNamespace {
        export function myFunction() {
            console.log("This is myFunction in MySubNamespace");
        }
    }
}

anuddaNamespace.MySubNamespace.myFunction();
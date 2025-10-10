// Type Aliases Test

type Point = {
    x: number;
    y: number
}

function printPoint(point: Point): void {
    console.log(`x: ${point.x}, y: ${point.y}`);
}

const myPoint: Point = { x:10, y: 20 };
printPoint(myPoint);

// Interfaces Test

interface AnuddaPoint {
    x: number;
    y: number
}

function displayPoint(point: Point): void {
    console.log(`x: ${point.x}, y: ${point.y}`);
}

const myAnuddaPoint: Point = { x: 15, y: 25 };
displayPoint(myAnuddaPoint);
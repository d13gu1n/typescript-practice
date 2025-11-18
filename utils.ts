export function square(x: number): number {
    return Math.pow(x, 2);
}

export function simpleSquare(x: number): number {
    return x * x;
}

export function double(x: number): number {
    return x * 2;
}

export default function greet(name: string): string {
    return `Hello, ${name}!`;
}
// Numeric enums Test
enum Direction {
    Up = 1,
    Down = 3,
    Left = 5,
    Right = 7
}

let move: Direction = Direction.Up;
console.log("Move Direction ---> " + move);

//String enums Test
enum newDirection {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}

let newMove: newDirection = newDirection.Up;
console.log("Move newDirection ---> " + newMove);

// Heterogeneous enums Test
enum Status {
    Active = 1,
    Inactive = "INACTIVE",
    Pending = 2,
    Cancelled = "CANCELLED"
}

let currentStatus: Status = Status.Active;
console.log("Current Status ---> " + currentStatus);

let cancelledStatus: Status = Status.Cancelled;
console.log("Cancelled Status ---> " + cancelledStatus);
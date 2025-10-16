// Sports interface with a name property Test
interface Sports {
    name: string;
}

// Function to print sport name, ensuring T extends Sports
function printSportName<T extends Sports>(sport: T): void {
    console.log(`Sport Name: ${sport.name}`);
}

// Create a sport object of type Sports
let sport: Sports = { name: "baseball" };

// Call function with sport object
printSportName(sport);

// K and T generic type Parameter
interface newSports {
    name: string;
    players: number;
}

function getNumberOfPlayers<T extends newSports, K extends keyof T>(sport: T, players: K): T[K] {
    return sport[players];
}

let anuddaSport: newSports = { name: "baseball", players: 9 };

let players: number = getNumberOfPlayers(anuddaSport, "players");
console.log(`Number of Players are: ${players}`);

// Generic Type Parameter class object implements a specific interface

interface othaSports {
    name: string;
    players: number;
    getNumberOfGloves(): number;
    disabled?: boolean;
}

class Baseball implements othaSports {
    constructor(public name: string, public players: number) { }

    getNumberOfGloves(): number {
        return this.players * 2;
    }
}

function getNumberOfGloves<T extends othaSports>(sport: T): void {
    console.log(`Number of Gloves required are: ${sport.getNumberOfGloves()}`);
}

let baseball = new Baseball("baseball", 9);
getNumberOfGloves(baseball);

class newBaseball implements othaSports {
    constructor(public name: string, public players: number, public disabled: boolean) { }

    getNumberOfGloves(): number {
        return this.disabled ? this.players : this.players * 2;
    }
}

function newGetNumberOfGloves<T extends othaSports>(sport: T): void {
    console.log(`Number of Gloves required are: ${sport.getNumberOfGloves}`);
}
let paralympicBaseball = new newBaseball("baseball", 10, true);
getNumberOfGloves(paralympicBaseball);

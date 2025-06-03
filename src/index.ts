// number 
let age: number = 25;
console.log(age);

// string
let myName: string = "maxamed";
console.log(myName);

// array
let numbers: number[] = [1, 2, 3, 4, 5];
console.log(numbers.slice(0, 3));

// tuple
let person: [string, number] = ["maxamed", 25];
console.log(person);

// enum
enum Gender {Male, Female}

let myGender: Gender =  Gender.Male;
console.log(myGender);

enum Roles {Admin, User, Guest}
let currentUser: Roles = Roles.Admin;

// any
let randomValue: any = "Hello";
randomValue = 42; // can be reassigned to any type
console.log(randomValue);

// void
function logMessage(message: string): void {
    console.log(message);
}
logMessage("This is a void function");

const returnValue  = (number: number): number => {
    return number * 2;
}
console.log(returnValue(5));

const nameConsole: (a: number, b: number) => number = (a,b) => {
    return a + b;
}

console.log(nameConsole(2, 5)); 
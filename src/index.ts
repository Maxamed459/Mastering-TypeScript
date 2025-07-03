//

// type
// type User = {
//     name: string,
//     age: number
// }

// let User1: User = {
//     name: "mohamed",
//     age: 10
// }

// interface
// interface User {
//   name: string;
//   age: number;
//   description: string;
// }

// let User1: User = {
//   name: "moh4",
//   age: 20,
//   description: "Student at SIU",
// };

// generics
// without generic
function containsString(arr: string[], item: string): boolean {
  return arr.includes(item);
}
console.log(containsString(["m", "n", "o"], "o"));

function containsNumber(arr: number[], item: number): boolean {
  return arr.includes(item);
}
console.log(containsNumber([1, 2, 3], 1));

// with generics
function contains<T>(arr: T[], item: T) {
  return arr.includes(item);
}
console.log(contains<string>(["m", "n", "o"], "o"));
console.log(contains<number>([1, 2, 3], 6));

// interface with generic
interface pair<T, U> {
  first: T;
  second: U;
}

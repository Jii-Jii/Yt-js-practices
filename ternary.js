//Ternary operator is a shorthand for if-else statement.
// --> condition ?(ture) expressionIfTrue :(else) expressionIfFalse
const age = 18;
const message = age >= 18 ? "Adult" : "Minor";
console.log(message);

const number = 7;
const result = number % 2 === 0 ? "Even" : "Odd";
console.log(result);

//Nested ternary operator
const score = 75;
const grade = score >= 80 ? "A" : score >= 70 ? "B" : score >= 60 ? "C" : "D";
console.log(grade);

//With map()
const nums = [1, 2, 3, 4];
const labeled = nums.map((n) => (n % 2 === 0 ? "Even" : "Odd"));
console.log(labeled);

//Ternary checks the truthiness of the condition --> Falsy value: 0,"",false,null,undefined,NaN. if falsy the ternary choses the second option.
const something = "" ? "Yes" : "No";
console.log(something);

//---------Objects-----------
const myStop = {
  name: "Mee",
  age: 23,
  isStudent: true,
};
console.log(myStop.name);

myStop.age = 25; //updated
console.log(myStop.age);

myStop.city = "Bangkok"; //add
console.log(myStop);

//Destructuring
const { name, age: userAge } = myStop;
console.log(name, userAge);

const user = {
  //nested
  name: "Jii",
  address: {
    city: "Bangkok",
    country: "Thailand",
  },
};
console.log(user.address.city);

//Spread
const updatedUser = {
  ...user, //shallow copy
  age: 30,
};
console.log(updatedUser);

//---------map,filter,reduce-----------
const numbers = [1, 2, 3, 4];
const doubled = numbers.map((n) => n * 2);

const words = ["apple", "banana"]; // Convert to strings
const upper = words.map((word) => word.toUpperCase());

const evens = numbers.filter((n) => n % 2 === 0);

const names = ["Joji", "Miko", "Lili"]; // Filter long words
const longNames = names.filter((name) => name.length > 3);

//with objects
const users = [
  { name: "A", score: 10 },
  { name: "B", score: 20 },
];
const updated = users.map((user) => ({
  ...user,
  score: user.score + 5,
}));
console.log(updated);

console.log("users === updated:", users === updated); //false, because they are different objects in memory.

console.log("users[0] === updated[0]:", users[0] === updated[0]); //false, because they are separate objects in memory, even though they have the same properties and values.

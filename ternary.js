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
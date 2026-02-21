//Arrow function is a shorter syntax for writing functions.
const addition = (x,z) => {   
  return x + z;
};
console.log(addition(3,5));
//OR
//const noparameter = () => {}; //for anonymous function.
//console.log(noparameter(5));  //(5)-undefined, because no return statement in the function.

//arrow function with map()
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(x => x * 2);
console.log(doubled);

//arrow function with filter()
const evenNumbers = numbers.filter(x => x % 2 === 0);
console.log(evenNumbers);

const users = [
  { id: 1, name: "Jii" },
  { id: 2, name: "Alex" }
];
const container = document.getElementById("app");
users.forEach(user => {
  const p = document.createElement("p");
  p.textContent = user.name;
  container.appendChild(p);
});
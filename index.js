//First try at javascript.

// let name = "Jii";
// console.log(name);

// //let-->variable cannot be re-declared but can be updated.
// let firstName = "Mee";
// firstName = "Dorae";
// console.log(firstName);

//const-->variable cannot be re-declared or updated.


let person = {
    name: 'Jii',
    age: 12
};
//Dot notation
person.name = 'Dorae';

//Bracket notaion
let selection = 'name';
person[selection] = 'Kiki';
console.log(person);


//array
let selectedColors = ['red', 'blue'];
selectedColors[2] = 1;
console.log(selectedColors)

//function
function greet(name, lastName) {
    console.log('Hello ' + name + lastName);
}
function square(number){
    return number * number;
}
// let number = square(2);
// console.log(number);
//OR
greet('jii ', 'Mee');
console.log(square(2));
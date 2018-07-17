 /*

 var myString = "Hello World!*76 ";

 var myNumber = 43; // PRIMITIVE
 var myOtherNumber = new Number (43); //NUMBER OBJECT

 var isLoggedIn = false; //Boolean

 let newVarible = "I am the best variable!";
 console.log(newVarible, 'AFTER being declared');

 {
  let newVarible = "I am the worst... "; //DELCARATION AND DEFINITION
  console.log(newVarible, 'INSIDE the scope');
 }

 let newVarible; // DECLARATION
 newVarible = "My dog is ugly"; // DEFINITION
 console.log(newVarible, 'OUTSIDE the scope');


 isLoggedIn = null;

 const age = 32; // Have to declare and define *Most common in module imports.

 {
   const age = 35;
   console.log(age);
 };

 console.log(age);

 let today = new Date();
 let myBirthday = new Date('07/01/1987');
 console.log(myBirthday);

 let bestNumber = 42.7;

 Math.floor(bestNumber);
 let calc = Math.ceil(bestNumber) * Math.PI;
 console.log(Math.ceil(calc));

 let classRoom = "Room 1";
 let objectClassRoom = new String("Room 1");
 console.log(typeof classRoom);
 console.log(typeof objectClassRoom);
 console.log(classRoom.length); // Javascript will convert a primitive to an object and back to a primitive.

 // alert ("Hey there...") // One directional comm to your user.

 // const isReady = confirm("Isu Ready?!");

 // alert(isReady);

 let userName = prompt("What's your name?", "John");
 console.log(userName);

 */

// let bestNumber = false;
// let isTrue = false;

// console.log(isTrue || bestNumber);

// console.log(!isTrue);

// let num = 11;
// let string = '11';

// console.log(num == string); //loose equality checks for value

// console.log(num === string); //strict Equality checks for value AND type

// const prim = "Hello World";
// const otherString =  new String ("Hello World");

// console.log(prim === otherString); //false
// console.log(prim == otherString); //TRUE

//MODULUS
// console.log(5 % 2); // returns

// INC and DEC
let start = 1;

// ....after some logic
start--; // start = start - 1;
//console.log(start); //start++ returns 2

let nonNumber ="cheese";

// console.log(parseInt(nonNumber));

// console.log(isNaN(nonNumber)); // NaN = not a number

let fifty = "50";

// console.log(parseInt(fifty));

let nonString = 50000;

// console.log(nonString.toString()); // NOT A REASSIGNMENT
nonString += 20;

// console.log(nonString); //nonString = nonString + 20

// let firstNum = parseInt(prompt("Pick a number...", "10"));
// let secondNum = parseInt(prompt("Pick a second number...", "10"));

// if(!isNaN(firstNum) && !isNaN(secondNum)) {
//   alert(firstNum + secondNum);
// } else if (isNaN(secondNum)) {
//   secondNum = parseInt(prompt('No, I said a number!!!', '10'));
//   alert(firstNum + secondNum);
// } else {
//   alert('No dummie!');
// };

//SWITCH

// let greeting = prompt ("Tell me how to say hello", "Hola!");

// switch(greeting.toLowerCase()) { //NORMALIZING DATA!
//   case 'hello':
//     alert(`I love saying ${greeting}!`);
//     break;
//   case 'wassup':
//     alert(`${greeting} is SO 90s!!!`);
//     break;
//   default:
//     alert(`I've never heard ${greeting} before!`);
//     break;
// }

// TERNARY

// let money = 10;
// let currency = confirm("In dollars or not?");
//
// currency ? alert (`$${money}`) : alert(money); //TERNARY - MOST OF THE TIME WHEN YOU SEE A ? IT IS A TERNARY

// ARRAYS

// let myArray = []; // MOST basic form of myArray
// let myFavoriteFoods = ["pizza", "hamburgers", "french fries"];
// let allTheThings = ["string", 23, ["stuff"], {}, false];

// console.log(myFavoriteFoods[1]);

// let funFacts = ["Avengers", 30, true, 2005];

// console.log(funFacts, funFacts.length);

// Check if it is an Array
// console.log(Array.isArray(funFacts), typeof funFacts);

// PUSH - adds elements to the end of an array
// console.log(funFacts);
// funFacts.push("Mark Walberg"); //Changes the value of original array.
// console.log(funFacts);

// UNSHIFT - adds elements to the beginning of an array
// funFacts.unshift("Denise Lopez");
// console.log(funFacts);

// POP
// let lastMember = funFacts.pop();
// console.log(lastMember, funFacts);

// SHIFT
// funFacts.shift();
// console.log(funFacts);

// SPLICE
// funFacts.splice(2);//1 argument: BEGINNING with that index, removes ALL indices after
// console.log(funFacts);

// console.log(funFacts, 'BEFORE');
// funFacts.splice(1, 1); //2 arguements: Starting at the first number (index) and INCLUDING it, remove the second number amount of items(count).
// console.log(funFacts, 'AFTER');

// console.log(funFacts, 'BEFORE');
// funFacts.splice(3,1, ["I got added!"]); // 3 arguements: starting at, remove 1 things, and then add my array
// console.log(funFacts, 'AFTER');

// funFacts.splice(-3, 1); // use negative number if you want the index to start at the end of the array, counting backwards)

// Reminder - Boolean means true or false

// SLICE
// let copy = funFacts.slice(1, 4);
// console.log(copy, funFacts);

//IndexOf *will be used in later takehome practice
// let removeIndex =funFacts.indexOf(42); // returns the index of 42 in our funFacts array
// console.log(removeIndex);
// funFacts.splice(removeIndex, 1);

// let myNums = [1, 2, 3, 4, 5];
// console.log(myNums.reverse()); // modifies the array for this point
// console.log(myNums);

// SORT
// console.log(funFacts);
//funFacts.sort();
// console.log(funFacts);

//let multiDimemsional =[['hello,', 1], ['goodbye', 0]];

// console.log(multiDimemsional[0][1], multiDimemsional[1][1]);

// Try it Out Day 4

//let favMovies = [];

//let favorite = ["Star Wars", "Luke"];
//let secondFav =["Batman", "Bruce"];
//let thirdFav = ["Taken", "Liam"];
//let fourthFav = ["Ironman", "Tony"];
//let fifthFav = ["Hulk", "Bruce Banner"]

//favMovies.unshift(favorite, secondFav, thirdFav, fourthFav, fifthFav);
//console.log(favMovies);

//let titles = [];
//titles.unshift(favMovies[0][0], favMovies[2][0]);
//console.log(titles);

//let favAndLeast = [];
//favAndLeast.push(favMovies[0], favMovies[1]);
//console.log(favAndLeast);

//alert(favMovies.length);

// for (let i = 0; i < 11; i++) {
//   console.log(`The number is ${i * 10}`);
// }

// LOOPS

// FOR LOOPS

// const colors = ['blue', 'purple', 'green', 'red', 'aquamarine', 'chartreuse'];
//
// for (let index = 0; index < colors.length; index++) {
//   console.log(colors[index]);
//   if (index === 1) break;
// }

// break ends a loops
// continue restarts a loop

// WHILE LOOPS

// let counter = 0;
// while (counter < 5) {
//   console.log(`before ${counter}`);
//   counter++;
//   console.log(`after ${counter}`);
// }

// FOR EACH

// const captains = ['Kirk', 'Picard', 'Sisko', 'Janeway', 'Lorca'];
// captains.forEach( (captain, index) => { // (value, index)
//   console.log(captain, index);
// } );

// FOR...OF (is for ARRAYS, returns just the value NOT the index)
// const captains = ['Kirk', 'Picard', 'Sisko', 'Janeway', 'Lorca'];
// for (let captain of captains) { // (let value of varible)
//   console.log(`Hello Captain ${captain}`);
// }
//
// // FOR..IN (is for OBJECTS)
// const me = {
//   firstName: 'Cody',
//   lastName: 'Smith',
//   age: 31,
// };
//
// for (let property in me) {
//     console.log(me[property]);
// }

let favMovies = [];

let favorite = ["Star Wars", "Luke"];
let secondFav =["Batman", "Bruce"];
let thirdFav = ["Taken", "Liam"];
let fourthFav = ["Ironman", "Tony"];
let fifthFav = ["Hulk", "Bruce Banner"]

favMovies.unshift(favorite, secondFav, thirdFav, fourthFav, fifthFav);
let input = "Taken";
for (let i = 0; i < favMovies.length; i++) {

  if(favMovies[i][0] === "Taken") alert (`${favMovies[i][0]} ${favMovies[i][1]}`);
}

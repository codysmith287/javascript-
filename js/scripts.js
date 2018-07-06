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

 // let newVarible; // DECLARATION
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

 // DAY 7 - MORE DOM STUFF!!!!

 const blah = "http://www.cheatsheet.com/wp-content/uploads/2016/03/Yoda-in-Star-Wars-The-Empire-Strikes-Back.jpg"
 let image =
 document.querySelector("img");


 image.addEventListener('click', (e) => {
   image.setAttribute("src", blah);
 })

 // const div = document.querySelector('.myDiv');

// console.log(div.textContent); // Returns text only in ALL children

// div.textContent = "Say cheese and die!!!"; // RESET the value of the text inside an element.

// console.log(div.innerHTML);

// div.innerHTML = "<h1>Hey there, R.L. Stein. Did you die in the 90s?</h1>";

// let newH1 = document.createElement("h1");
// newH1.textContent = "I am the greatest...";
// newH1.id += "red_bg";
// div.appendChild(newH1); // Always add AFTER the last element in the parent.
//
// let newH2 = document.createElement("h2");
// newH2.textContent = "I am before the h1!!";
// newH2.className = "blue-bg";
// newH2.className += " white-text";
// div.insertBefore(newH2, newH1);
//
//
// let newP = document.createElement("p");
// newP.textContent = "I am a squirrel...";
// newP.classList.add("purple-text", "green-bg");
// div.appendChild(newP);


let span = document.querySelector("span");
span.addEventListener("mouseenter", (e) => {
  span.classList.remove("white-text");
});

span.addEventListener("click", (e) => {
  span.classList.toggle("giant-text");
  span.classList.contains("green-bg") ? // <= Ternary // contains returns a boolean (true/false)
  span.classList.replace("green-bg", "blue-bg")
  :
  span.classList.replace("blue-bg", "green-bg")
});

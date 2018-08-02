let sentence = new String("Ann went walking one day.");
let number = new Number(32);
// console.log(Object.getPrototypeOf(sentence));

let dude = { // Most basic way to create an object
  catchPhrase: "Where is my car?", // KEY : VALUE pair, which make a PROPERTY
  firstName: "Big",
  lastName: "Lebowski",
  age: Infinity
};


function User(name, email, password, favorites, cart) {
  this.name = name;
  this.email = email;
  this.password = password;
  this.favorites = favorites;
  this.cart = cart;
}; // 4th was to bind THIS

let cody = new User("Cody", "code-man-5000@gmail.com", "123456", [], []);
// console.log(cody);
// console.log(Object.getPrototypeOf(cody));

let ryeker = new User("Ryker", "best_teach@truth.com", "11111", [], []);
ryeker.isAdmin = true; // dot notation
ryeker["isAdmin"] = false; // bracket notation
console.log(ryeker, cody);

// TRY IT OUT: build a new user with a form in HTML and your user getPrototypeOf


const userForm = document.forms.userForm;

userForm.addEventListener("submit", e => {
  e.preventDefault();
  let newUser = new User(userForm.name.value, userForm.email.value, userForm.password.value, [], []);
  console.log(newUser);
  userForm.reset();
})

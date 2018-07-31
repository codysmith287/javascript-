let loginForm = document.forms.login;
let emailInput = loginForm.email;
let passwordInput = loginForm.password;

//different ways of data submission to a backend server
  // parameters e.g. file:///Users/cms287/Documents/projects/javascript-/index.html?email=cms287%40gmail.com&password=chuckwow87
    // ? = afterthis = query parameters; & = separates parameters
// Other methods are GET and POST
  // GET - they don't send you any data and you give them information(data) back
  // POST - you gather information from the user and you them information(data) back

// Take Home - Day 7

emailInput.addEventListener("keydown", e => {
  console.log(this) // What key did they hit?
  e.target.value // What is getting typed in
});

// Read up on RegExp


// loginForm.addEventListener("submit", e => {
//   e.preventDefault(); // stops default action from happening and allows you validate or redirect the data(info)
//   //... do some checks, submit the form, etc
//   loginForm.reset(); // Clear inputs on form
// });

// THIS
// let favorites = ["pickles"];


function listItems(pet) {
  listItems.call();
  console.log(this);
  alert(`${this.name} loves ${this.favorites[0]} and has a ${pet}`);
};


  // THIS will always default to the windoe unless we change it.
  let user = {
    name: "Ryeker",
    cart: [],
    coupons: [],
    favorites: ["cheese"],
    listFavorites: listItems // IMPLICITYLY BINDS "THIS"
  };

  // IMPLICIT "THIS" BINDING
  user.listFavorites(); // call site
  // log out: Ryeker loves cheese.

  //  EXPLICITY BINDING
  let jr = {
    name: "Junior Royce",
    cart: ["guns n rose"],
    coupons: [1.99],
    favorites: ["Star Wars"]
  };

  listItems.call(jr, "dog"); // Rule 1 about call is it must be called on a FUNCTION
  // Rule 2 for call is if the function being bound requires Arguements, they being as the SECOND argument of call()

  // APPLY
  listItems.apply(jr, ["cat"]);

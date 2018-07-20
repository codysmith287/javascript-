 // DAY 6 - Querying the DOM

const body = document.getElementsByTagName("body"); // () must be contain a string, otherwise JS will think it's undefinied variable
// console.log(body[0]);
const header = document.getElementsByClassName("heading");

const paragraph = document.getElementById("paragraph1");
// console.log(paragraph);

let div = document.querySelector("#beth_mvp");

// let divs = document.querySelectorAll(".jr-mvp");

  div.addEventListener(
    "mouseover",
    ev => {
      console.log(ev);
      div.style.backgroundColor = "blue";
    }

    // function(ev) {
    //   div.style.backgroundColor = "#000";
    // }
  );

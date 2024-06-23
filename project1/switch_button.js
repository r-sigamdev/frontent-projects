let body = document.querySelector("body");
let button = document.querySelector(".button");
let modeBtn = document.querySelector(".mode");

let mode = "light";

button.addEventListener("click", () => {
  if (mode === "light") {
    mode = "dark";
    modeBtn.style.float = "right";
    modeBtn.style.backgroundColor = "black";
    body.style.backgroundColor = "rgb(88, 91, 85)";
  } else {
    mode = "light";
    modeBtn.style.float = "left";
    modeBtn.style.backgroundColor = "whitesmoke";
    body.style.backgroundColor = "rgb(213, 189, 175)";
  }
});

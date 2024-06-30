let addBtn = document.querySelector(".plus-icon");
let cont = document.querySelector(".mainCont");

const createList = () => {
  // main div
  const div = document.createElement("div");
  div.style.width = "90%";
  div.style.height = "2.8rem";
  div.style.backgroundColor = " none";
  div.style.borderRadius = "1rem";
  div.style.display = "flex";
  div.style.flexFlow = "row nowrap";
  div.style.alignItems = "center";
  div.style.justifyContent = "space-around";
  // checkbox
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.style.width = "1.5rem";
  checkbox.style.height = "1.5rem";
  checkbox.style.border = "none";
  let checkboxState = "notActive";

  checkbox.addEventListener("click", () => {
    if (checkboxState === "notActive") {
      checkboxState = "active";
      if (text.innerText == false) {
        text.style.textDecoration = "line-through";
      } else {
        prompt("Please fill the input field");
      }
    } else {
      checkboxState = "notActive";
      text.style.textDecoration = "none";
    }
  });
  // input field
  const text = document.createElement("input");
  text.setAttribute("type", "text");
  let placeholderCont = text.setAttribute("placeholder", "Type here");

  text.style.width = "75%";
  text.style.height = "2rem";
  text.style.border = "none";
  text.style.borderRadius = "1rem";
  text.style.padding = "1rem";
  text.style.fontSize = "1rem";
  text.style.fontWeight = "bold";
  text.style.textTransform = "capitalize";

  // remove button
  const removeBtn = document.createElement("button");
  removeBtn.style.width = "1.5rem";
  removeBtn.style.height = "1.5rem";
  removeBtn.style.border = "none";
  removeBtn.innerText = "❌";
  removeBtn.style.borderRadius = "5rem";
  removeBtn.style.backgroundColor = "transparent";

  removeBtn.addEventListener("click", () => {
    div.style.display = "none";
  });

  div.prepend(checkbox, text, removeBtn);
  cont.append(div);
};

addBtn.addEventListener("click", () => {
  createList();
  console.log("button was clicked");
});

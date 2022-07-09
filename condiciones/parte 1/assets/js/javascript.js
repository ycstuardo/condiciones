let button = document.querySelector("#button");
console.log("hola");
button.addEventListener("click", (e) => {
  if (
    button.style.borderStyle != "solid") {
    //button.style.border = "solid red 2px";
    button.setAttribute("style","border: solid red 2px;");
  } 
  else {
    button.style.removeProperty("border");
  }
});

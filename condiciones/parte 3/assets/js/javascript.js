let number1 = document.querySelector("#number1");
let number2 = document.querySelector("#number2");
let number3 = document.querySelector("#number3");
let total = document.querySelector("#total");
let calculate = document.querySelector("#calc");
calculate.onclick = function () {
  let pass = number1.value + number2.value + number3.value;
  total.innerHTML = pass;
  if (pass == "911") {
    total.innerHTML = "Password 1 esta correcto , puedes pasar";
  } else if (pass == "714") {
    total.innerHTML = "Password 2 esta correcto , felicidades";
  } else {
    total.innerHTML = "Password incorrecto ";
  }
};

let stickers1 = document.querySelector("#stickers1");
let stickers2 = document.querySelector("#stickers2");
let stickers3 = document.querySelector("#stickers3");
let calculate = document.querySelector("#calculate");
let total = document.querySelector("#total");
calculate.onclick = function () {
  let addition =
    Number(stickers1.value) + Number(stickers2.value) + Number(stickers3.value);
  total.innerHTML = addition;
  let missing = Number(10) - addition;
  let left_over = addition - Number(10);

  if (addition == 10) {
    total.innerHTML = " bueno";
  } else if (addition < 10 && addition != 0) {
    total.innerHTML = ` solo llevaras esos stickers? `;
  } else if (addition > 10) {
    total.innerHTML = `  llevas muchos stickers `;
  } else if (addition == 0) {
    total.innerHTML = "no te gustan ?";
  }
};

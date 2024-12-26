const counter = document.getElementById("counter");
const increase = document.getElementById("increase-btn");
const reset = document.getElementById("reset-btn");
const decrease = document.getElementById("decrease-btn");

let count = 0;

increase.addEventListener("click", () => {
  count++;
  changeColorValue();
});

reset.addEventListener("click", () => {
  count = 0;
  changeColorValue();
});

decrease.addEventListener("click", () => {
  count--;
  changeColorValue();
});

const changeColorValue = () => {
    counter.textContent = count;
    counter.style.color = count === 0 ? "black" : count > 0 ? "green" : "red";
};


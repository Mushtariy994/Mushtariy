
const red = document.getElementById("red");
const yellow = document.getElementById("yellow");
const green = document.getElementById("green");

const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");

let timer = null;
let step = 0;

function changeLight() {
  red.classList.remove("active");
  yellow.classList.remove("active");
  green.classList.remove("active");

  if (step === 0) {
    red.classList.add("active");
  } else if (step === 1) {
    yellow.classList.add("active");
  } else if (step === 2) {
    green.classList.add("active");
  }

  step = (step + 1) % 3;
}

startBtn.addEventListener("click", () => {
  if (timer !== null) return;

  changeLight();
  timer = setInterval(changeLight, 2000);
});

stopBtn.addEventListener("click", () => {
  clearInterval(timer);
  timer = null;

  red.classList.remove("active");
  yellow.classList.remove("active");
  green.classList.remove("active");

  step = 0;
});

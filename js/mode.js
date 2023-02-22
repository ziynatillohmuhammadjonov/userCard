const body = document.querySelector("body");
const darkBtn = document.getElementById("dark-btn");
const lightBtn = document.getElementById("light-btn");
const modeImg = document.querySelector(".mode-img");
if (JSON.parse(localStorage.getItem("mode"))) {
  document.body.classList.toggle("dark-mode");
  modeImg.src = "./images/svg/sun-icon.svg";
}
darkBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  let mode = document.body.classList.contains("dark-mode");
  localStorage.setItem("mode", mode);
  if (mode) {
    modeImg.src = "./images/svg/sun-icon.svg";
  } else {
    modeImg.src = "./images/svg/moon-icon.svg";
  }
});

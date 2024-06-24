function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const changeColorBtn = document.querySelector(".change-color");
const setColor = document.querySelector("body");
const setSpanColor = document.querySelector("span");
changeColorBtn.addEventListener("click", () => {
  setColor.style.backgroundColor = getRandomHexColor();
  setSpanColor.textContent = getRandomHexColor();
});

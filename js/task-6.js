function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function createBoxes(amount) {
  let str = "";
  for (let i = 0; i < amount; i++) {
    const clr = getRandomHexColor();
    const size = 30 + i * 10;
    const strCurrent = `<div style='width:${size}px;height:${size}px;border:1px solid ${clr};background:${clr}'></div>`;
    str = str + strCurrent;
    console.log(str);
  }
  divs.insertAdjacentHTML("beforeend", str);
  console.log(divs.children);
}
function destroyBoxes() {
  const childrenCounts = divs.children.length;
  for (let i = 0; i < childrenCounts; i++) {
    const child = divs.firstChild;
    child.remove();
  }
}
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const input = document.querySelector("input");
const divs = document.querySelector("#boxes");
divs.style.display = "flex";
divs.style.flexDirection = "row";
divs.style.flexWrap = "wrap";
createBtn.addEventListener("click", () => {
  if (input.value >= 1 && input.value <= 100) {
    destroyBoxes();
    const amount = input.value;
    createBoxes(amount);
    input.value = "";
  }
});

destroyBtn.addEventListener("click", () => {
  destroyBoxes();
});

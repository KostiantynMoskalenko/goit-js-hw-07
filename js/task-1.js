const list = document.querySelector("#categories");
const listChildren = list.children;
console.log("Number of categories:", listChildren.length);
for (const listChild of listChildren) {
  const category = listChild.querySelector("h2");
  console.log("Category:", category.textContent);
  const sublist = listChild.querySelector("ul");
  console.log("Elements:", sublist.children.length);
}

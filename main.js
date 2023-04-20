// Cache DOM elements
const myUL = document.getElementById("myUL");
const input = document.getElementById("myInput");
const closeButtons = document.getElementsByClassName("close");

// Attach event listener to the parent <ul> element for event delegation
myUL.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("checked");
  } else if (event.target.classList.contains("close")) {
    event.target.parentElement.style.display = "none";
  }
});

// Create a new list item when clicking on the "Add" button
function newElement() {
  const li = document.createElement("li");
  const inputValue = input.value;
  const t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    myUL.appendChild(li);
  }
  input.value = "";

  const span = document.createElement("span");
  const txt = document.createTextNode("\u00D7");
  span.classList.add("close");
  span.appendChild(txt);
  li.appendChild(span);

  // Attach event listener to the new close button
  span.onclick = function () {
    this.parentElement.style.display = "none";
  };
}

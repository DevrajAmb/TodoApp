let form = document.querySelector("form");
let ul = document.querySelector("ul");
let container = document.querySelector("#container");

// This is for the text count feature
let input = document.querySelector("#todo-input");
let wordCounter = document.querySelector("#word-counter");


// Save Todo
const saveTodo = (e) => {
  // Prevents Reloading
  e.preventDefault();
  // Create li
  let li = document.createElement("li");
  //   Insert Text Into Li From Input
  li.innerText = input.value;
  //   Add Class To Li
  li.className = "list-group-item rounded-0";
  //   Create Delete Button
  let delBtn = document.createElement("button");
  //   Enter Text Into Button
  delBtn.innerText = "Delete";
  //   Add Class Into Button
  delBtn.className = "btn btn-sm btn-danger float-end rounded-0";
  //   Append Button To Li
  li.appendChild(delBtn);
  //   Append Li To Ul
  ul.appendChild(li);
  //   Reset Form
  form.reset();
};

// This the code for the word limit
const updateWordCount = () => {
  let words = input.value.trim().split(/\s+/).filter(word => word !== "");
  let wordCount = words.length;

  wordCounter.textContent = `Words: ${wordCount}/50`;

  if (wordCount > 50) {
    input.value = words.slice(0, 50).join(" ");
    wordCounter.textContent = "Words: 50/50 (Limit Reached)";
  }
};

input.addEventListener("input", updateWordCount);



form.addEventListener("submit", saveTodo);

const removeTodo = (e) => {
  if (e.target.className.includes("btn-danger")) {
    let li = e.target.parentElement;
    if (window.confirm("Are You Sure?")) {
      ul.removeChild(li);
    }
  }
};

ul.addEventListener("click", removeTodo);

// Effect
const runEffect = (e) => {
  //   container.style.backgroundColor = `rgb(${e.clientX}, ${e.clientY} , 123)`;
};

container.addEventListener("mousemove", runEffect);


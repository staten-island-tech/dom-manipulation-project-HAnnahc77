const DOMSelectors = {
  button: document.getElementById("button"),
  form: document.getElementById("form"),
  inputs: document.querySelectorAll(".input"),
  container: document.querySelector(".container"),
  card: document.querySelector(".card"),
};

DOMSelectors.button.addEventListener("click", function () {});

function input() {
  DOMSelectors.inputs.forEach((input) => {
    console.log(input);
  });
}
let albumName = {
  name: document.querySelector("input[name='albumName']").value,
};

let albumImageID = {
  name: document.querySelector("input[name='albumImageID']").value,
};

let albumDescription = {
  name: document.querySelector("input[name='albumDescription']").value,
};

DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(albumName);
  console.log(albumImageID);
  console.log(albumDescription);
});

DOMSelectors.container.insertAdjacentHTML(
  "beforeend",
  `<h1 id="card-header">${albumName}</h1>
  <img src="${albumImageID}" alt="Album Image">
  <h2>${albumDescription}</h2>`
);

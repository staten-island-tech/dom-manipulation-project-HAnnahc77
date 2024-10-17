const DOMSelectors = {
  button: document.getElementById("button"),
  form: document.getElementById("form"),
  inputs: document.querySelector(".input"),
  container: document.querySelector(".container"),
  card: document.querySelector(".card"),
};

DOMSelectors.button.addEventListener("click", function () {});

function input() {
  DOMSelectors.inputs.forEach((input) => {
    console.log(input);
  });
}

DOMSelectors.form.addEventListener("submit", function (event) {
  const albumName = document.querySelector("input[name='albumName']").value;
  const albumImageID = document.querySelector(
    "input[name='albumImageID']"
  ).value;
  const albumDescription = document.querySelector(
    "input[name='albumDescription']"
  ).value;
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

if (card.length > 0) {
  DOMSelectors.container.classList.remove("hidden");
}

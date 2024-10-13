const DOMSelectors = {
button: document.getElementById("button"),
form: document.getElementById("form"),
container: document.querySelector(".container"),
}

DOMSelectors.button.addEventListener("click", function(event) {
  console.log(event.target.parentElement);
});

DOMSelectors.form.addEventListener("submit", function(event) {
  event.preventDefault();
  console.log(document.querySelector("input").value)
});

DOMSelectors.container.insertAdjacentHTML(
  "beforeend",
  `<h1 id=card.header></h1>
  <img src="" alt="Image">
  <h2></h2>`
);


if (cards.length > 0) {
  cardContainer.classList.remove('hidden');
}

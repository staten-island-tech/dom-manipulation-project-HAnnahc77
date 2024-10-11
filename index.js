const form = document.querySelectorAll("form");
const buttons = document.querySelectorAll("button");

DOMSelectors.container.insertAdjacentHTML(
  "beforeend",
  `<h1 id = card.header> Title </h1>
  <img src="cover.jfif" alt="Image">
  <h2> Description </h2>`
);

buttons.forEach((button) =>
  button.addEventListener("click", function (event) {
    console.log(event.target.textContent);
  })
);

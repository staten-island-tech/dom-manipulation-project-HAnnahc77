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
  console.log(document.querySelector("input[name='albumName']").value);
  console.log(document.querySelector("input[name='albumImageID']").value);
  console.log(document.querySelector("input[name='albumDescription']").value);
});

DOMSelectors.container.insertAdjacentHTML(
  "beforeend",
  `<h1 id="card-header">${albumName}</h1>
  <img src="https://example.com/${albumImageID}" alt="Album Image">
  <h2>${albumDescription}</h2>`
);


if (cards.length > 0) {
  container.classList.remove('hidden');
}

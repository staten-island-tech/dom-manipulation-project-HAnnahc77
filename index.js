const DOMSelectors = {
  button: document.getElementById("button"),
  card: document.querySelector(".card"),
 inputname: document.getElementById("inputname"),
 inputimg: document.getElementById("inputimg"),
 inputdesc: document.getElementById("inputdesc"),
 };

 DOMSelectors.button.addEventListener("click", function (event) {
DOMSelectors.card.style.padding = "5px";
DOMSelectors.card.style.marginBottom = "10px";
DOMSelectors.card.style.borderWidth="3px";
DOMSelectors.card.style.borderStyle="solid";
event.preventDefault();
let input1 = DOMSelectors.inputname.value;
let input2 = DOMSelectors.inputimg.value;
let input3 = DOMSelectors.inputdesc.value;
DOMSelectors.card.insertAdjacentHTML("beforeend",
  `<h1 id="card-header">${input1}</h1>
  <img src="${input2}" alt="Album Image">
  <h2>${input3}</h2>);`)});
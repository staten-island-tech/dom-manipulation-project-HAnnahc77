const DOMSelectors = {
  spacing: document.querySelector(".spacing"),
  button: document.getElementById("button"),
  inputname: document.getElementById("inputname"),
  inputimg: document.getElementById("inputimg"),
  inputdesc: document.getElementById("inputdesc"),
};

DOMSelectors.button.addEventListener("click", function (event) {
  event.preventDefault();
  let input1 = DOMSelectors.inputname.value;
  let input2 = DOMSelectors.inputimg.value;
  let input3 = DOMSelectors.inputdesc.value;


    if (input1 && input2 && input3) {
      DOMSelectors.spacing.insertAdjacentHTML("afterbegin",` <div class="card">
        <h1 id="card-header">${input1}</h1>
        <img src="${input2}" alt="Album Image">
        <h2>${input3}</h2>
        <button class="removebutton">Remove</button>
      </div>`);

    clearInputs();
    }
});

function clearInputs() {
  DOMSelectors.inputname.value = '';
  DOMSelectors.inputimg.value = '';
  DOMSelectors.inputdesc.value = '';
}

DOMSelectors.spacing.addEventListener("click", function (event) {
  if (event.target.classList.contains("removebutton")) {
  event.target.parentElement.remove(); 
  }});
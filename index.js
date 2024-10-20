const DOMSelectors = {
  button: document.getElementById("button"),
  spacing: document.querySelector(".spacing"),
  removebutton: document.querySelector(".removebutton"),
  container: document.querySelector(".container"),
  inputname: document.getElementById("inputname"),
  inputimg: document.getElementById("inputimg"),
  inputdesc: document.getElementById("inputdesc"),
};

DOMSelectors.button.addEventListener("click", function (event) {
  event.preventDefault();

  let input1 = DOMSelectors.inputname.value;
  let input2 = DOMSelectors.inputimg.value;
  let input3 = DOMSelectors.inputdesc.value;

    const cardHTML = 
    ` <div class="card">
        <h1 id="card-header">${input1}</h1>
        <img src="${input2}" alt="Album Image">
        <h2>${input3}</h2>
        <button class="removebutton">Remove</button>
      </div>`;

    if (input1 && input2 && input3) {
      DOMSelectors.spacing.insertAdjacentHTML("afterbegin", cardHTML);
      DOMSelectors.container.classList.remove('hidden');
    }

    DOMSelectors.inputname.value = '';
    DOMSelectors.inputimg.value = '';
    DOMSelectors.inputdesc.value = '';
});

DOMSelectors.spacing.addEventListener("click", function (event) {
  if (event.target.classList.contains("removebutton")) {
    const cardToRemove = event.target.parentElement; 
    cardToRemove.remove();
  }
});
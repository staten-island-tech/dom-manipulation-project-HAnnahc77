const DOMSelectors = {
  button: document.getElementById("button"),
  spacing: document.querySelector(".spacing"),
  inputname: document.getElementById("inputname"),
  inputimg: document.getElementById("inputimg"),
  inputdesc: document.getElementById("inputdesc"),
};

DOMSelectors.button.addEventListener("click", function (event) {
  event.preventDefault();

  let input1 = DOMSelectors.inputname.value;
  let input2 = DOMSelectors.inputimg.value;
  let input3 = DOMSelectors.inputdesc.value;

    const cardHTML = `
      <div class="card" style="padding: 5px; margin-bottom: 10px; border-width: 3px; border-style: solid; border-color: black; background-color: white; width: 400px;">
        <h1 id="card-header">${input1}</h1>
        <img src="${input2}" alt="Album Image" style="width: 100%; height: auto;">
        <h2>${input3}</h2>
        <button class="removebutton">Remove</button> <!-- Remove button -->
      </div>
    `;

    if (input1 && input2 && input3) {
    DOMSelectors.spacing.insertAdjacentHTML("afterbegin", cardHTML);
    }

    DOMSelectors.inputname.value = '';
    DOMSelectors.inputimg.value = '';
    DOMSelectors.inputdesc.value = '';


    const removeButtons = document.querySelectorAll(".removebutton");
    const latestRemoveButton = removeButtons[removeButtons.length - 1]; 
    latestRemoveButton.addEventListener("click", function () {
      const cardToRemove = latestRemoveButton.parentElement; 
      cardToRemove.remove();
    });
});

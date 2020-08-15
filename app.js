const triggers = document.getElementsByClassName("trigger");
const triggerArray = Array.from(triggers).entries();

const modals = document.getElementsByClassName("modal");
const closeButtons = document.getElementsByClassName("close-button");

for (let [index, trigger] of triggerArray) {
    let triggerIndex = index;
    function toggleModal() {
      modals[triggerIndex].classList.toggle("show-modal");
    }
    trigger.addEventListener("click", toggleModal);
    closeButtons[triggerIndex].addEventListener("click", toggleModal);
  }


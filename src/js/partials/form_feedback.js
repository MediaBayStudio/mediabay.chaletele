document.querySelector(`#agreeded`).onclick = function () {
  if (this.checked) {
    document.querySelector(`#contacts`).disabled = false;
  } else {
    document.querySelector(`#contacts`).disabled = true;
  }
};

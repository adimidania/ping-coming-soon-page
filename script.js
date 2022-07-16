const button = document.querySelector("button");
const input = document.querySelector("input");
const warningText = document.querySelector(".warning-text");

function ValidateEmail(mail) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (mail.match(mailformat)) {
    return true;
  } else {
    return false;
  }
}

function submitEmail(e) {
  e.preventDefault();
  const userInput = input.value;
  if (!ValidateEmail(userInput)) {
    warningText.style.display = "block";
    input.classList.add("input-non-valid");
  } else {
    warningText.style.display = "none";
    input.classList.remove("input-non-valid");
  }
}

button.addEventListener("click", submitEmail);

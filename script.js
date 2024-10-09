"use strict";

const inputField = document.getElementById("userInput");
const button = document.getElementById("submitButton");
const message = document.getElementById("message");

button.addEventListener("click", function () {
  const inputValue = inputField.value;

  if (inputValue !== "") {
    message.textContent = `You entered: ${inputValue}`;
  } else {
    message.textContent = "Please enter a value";
    message.style.color = "red";
  }
});

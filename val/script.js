const form = document.querySelector("form");
const result = document.querySelector("#result");

form.addEventListener("submit", event => {
  event.preventDefault();
  const name = document.querySelector("#name").value;
  result.textContent = `${name}, will you be my Valentine?`;
});

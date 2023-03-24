// UI Logic

function handleRadio(event)  {
  event.preventDefault();
  const radioSelection = document.querySelector("input[name='use']:checked").value;
  console.log(radioSelection);
}
function handleText(event) {
  event.preventDefault();
  const userName = document.getElementById("Input1").value;
  const userEmail = document.getElementById("Input2").value;
  console.log(userName);
  console.log(userEmail);
}

window.addEventListener("load", function()  {
  document.getElementById("user-form").addEventListener("submit", handleRadio);
  document.getElementById("user-form").addEventListener("submit", handleText);
});

// UI Logic

function handleRadio(event)  {
  event.preventDefault();
  const radioSelection = document.querySelector("input[name='use']:checked").value;
  console.log(radioSelection);
}

window.addEventListener("load", function()  {
  document.getElementById("user-form").addEventListener("submit", handleRadio);
});

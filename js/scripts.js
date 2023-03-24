// UI Logic
function hideResults() {
  document.getElementById("python").setAttribute("class", "hidden");
  document.getElementById("javascript").setAttribute("class", "hidden");
  document.getElementById("c").setAttribute("class", "hidden");
  document.getElementById("general-resources").setAttribute("class", "hidden");
}
function handleRadio(event) {
  event.preventDefault();
  hideResults();
  const radioSelection = document.querySelector("input[name='use']:checked").value;
  if (radioSelection === "school") {
    let pythonOutput = document.getElementById("python");
    pythonOutput.removeAttribute("class");
  } else if (radioSelection === "projects") {
    let javascriptOutput = document.getElementById("javascript");
    javascriptOutput.removeAttribute("class");
  } else if (radioSelection === "career") {
    let cOutput = document.getElementById("c");
    cOutput.removeAttribute("class");
  } else if (radioSelection === "other") {
    let generalResources = document.getElementById("general-resources");
    generalResources.removeAttribute("class");
  }
}
function handleText(event) {
  event.preventDefault();
  const userName = document.getElementById("Input1").value;
  const userEmail = document.getElementById("Input2").value;
  let greeting = document.getElementById("greeting");
  greeting.removeAttribute("class");
  document.getElementById("name-output").innerText = userName;
}
function handlePronouns(event) {
  event.preventDefault();
  const pronouns = document.getElementById("pronouns").value;
}
function handleAge(event) {
  event.preventDefault();
  const dob = document.getElementById("born").value;
}

window.addEventListener("load", function() {
  document.getElementById("user-form").addEventListener("submit", handleRadio);
  document.getElementById("user-form").addEventListener("submit", handleText);
  document.getElementById("user-form").addEventListener("submit", handleAge);
  document.getElementById("user-form").addEventListener("submit", handlePronouns);
});

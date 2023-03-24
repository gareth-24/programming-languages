// UI Logic
function hideResults() {
  document.getElementById("python").setAttribute("class", "hidden");
  document.getElementById("javascript").setAttribute("class", "hidden");
  document.getElementById("c").setAttribute("class", "hidden");
}
function handleRadio(event)  {
  event.preventDefault();
  hideResults();
  const radioSelection = document.querySelector("input[name='use']:checked").value;
  console.log(radioSelection);

  if (radioSelection === "school")  {
    console.log("Python desc");
    let python = document.getElementById("python");
    python.removeAttribute("class");
  } else if (radioSelection === "projects") {
    console.log("JavaScript desc");
    let javascript = document.getElementById("javascript");
    javascript.removeAttribute("class");
  } else if (radioSelection === "career") {
    console.log("C# desc");
    let c = document.getElementById("c");
    c.removeAttribute("class");
  }
}
function handleText(event) {
  event.preventDefault();
  const userName = document.getElementById("Input1").value;
  const userEmail = document.getElementById("Input2").value;
  console.log(userName);
  console.log(userEmail);

  let greeting = document.getElementById("greeting");
  greeting.removeAttribute("class");
  document.getElementById("name-output").innerText = userName;
}
function handlePronouns(event)  {
  event.preventDefault();
  const pronouns = document.getElementById("pronouns").value;
  console.log(pronouns);
}
function handleAge(event) {
  event.preventDefault();
  const dob = document.getElementById("born").value;
  console.log(dob);
}


window.addEventListener("load", function()  {
  document.getElementById("user-form").addEventListener("submit", handleRadio);
  document.getElementById("user-form").addEventListener("submit", handleText);
  document.getElementById("user-form").addEventListener("submit", handleAge);
  document.getElementById("user-form").addEventListener("submit", handlePronouns);
});

// UI Logic

function handleRadio(event)  {
  event.preventDefault();
  const radioSelection = document.querySelector("input[name='use']:checked").value;
  console.log(radioSelection);
  if (radioSelection === "school")  {
    console.log("Python desc");
  } else if (radioSelection === "projects") {
    console.log("JavaScript desc");
  }  else if (radioSelection === "career") {
      console.log("C# desc");
  }
}
function handleText(event) {
  event.preventDefault();
  const userName = document.getElementById("Input1").value;
  const userEmail = document.getElementById("Input2").value;
  console.log(userName);
  console.log(userEmail);
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

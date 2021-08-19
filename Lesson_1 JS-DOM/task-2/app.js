let eyeIcon = document.querySelector("img");
let input = document.querySelector("#pass");

eyeIcon.addEventListener("click", function (e) {
  let inputType = input.type;

  if (inputType === "password") {
    input.type = "text";
    eyeIcon.src = "./image/close-eye.png";
  } else {
    input.type = "password";
    eyeIcon.src = "./image/visible-eye.png";
  }
});

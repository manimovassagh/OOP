const screen = document.getElementById("screen");
const numberStorage = [];
const buttonsAll = document.querySelectorAll(".btn");

const ListenToMe = document.addEventListener("click", (e) => {
  if (e.target.value == undefined) {
    screen.innerHTML = "Please select proper place";
  } else {
    screen.innerHTML = e.target.value;
  }
  return e.target.value;
});


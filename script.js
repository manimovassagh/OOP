const screen = document.getElementById("screen");
const numberStorage = [];
const buttonsAll = document.querySelectorAll(".btn");

const ListenToMe = document.addEventListener("click", (e) => {
  if (e.target.value == undefined) {
   alert('Please Select Buttons not Page!!')
  } else {
    screen.innerHTML = e.target.value;
  }
  numberStorage.push(e.target.value)
});

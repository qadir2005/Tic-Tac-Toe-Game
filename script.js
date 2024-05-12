// Correct way to select buttons using querySelectorAll
let buttons = document.querySelectorAll("button");
let reset = document.querySelector(".reset");
let winner = document.querySelector(".winner");
let result = document.querySelector(".game_box")
reset.addEventListener("click", () => {
  buttons.forEach((button) => {
    button.innerHTML = "";
    button.disabled = false;
  });
  console.log("khatam");
});
let winningPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [3, 4, 5],
  [2, 4, 6],
  [2, 5, 8],
  [6, 7, 8],
];

let player = true; // player ki turn ko set krne kelye
buttons.forEach((mybutton, index) => {
  mybutton.addEventListener("click", function () {
    if (player === true) {
      mybutton.innerHTML = "X";
      player = false;
      mybutton.disabled = true;
    } else {
      mybutton.innerHTML = "O";
      mybutton.style.color= "#ff3fa4"
      player = true;
      mybutton.disabled = true;
    }
    checkwin();
  });
});


let checkwin = () => {
  for (let i = 0; i < winningPatterns.length; i++) {
    let val1 = buttons[winningPatterns[i][0]].innerHTML;
    let val2 = buttons[winningPatterns[i][1]].innerHTML;
    let val3 = buttons[winningPatterns[i][2]].innerHTML;
    if (val1 !== "" && val2 !== "" && val3 !== "") {
      if (val1 === val2 && val2 === val3) {
        result.innerHTML= `Congratulation Winner " ${val1} "`;
      }
    }
  }
};

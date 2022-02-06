let number = document.querySelector(".number");
let secretNumber = Math.floor(Math.random() * 20) + 1;
console.log(secretNumber);

// number.textContent = secretNumber;
let check = document.querySelector(".check");
let message = document.querySelector(".message");
let score = document.querySelector(".score");
let highscore = document.querySelector("#highscore");
let again = document.querySelector(".again");

check.addEventListener("click", () => {
  let guess = Number(document.querySelector("#guess").value);
  if (guess === secretNumber) {
    message.textContent = "🎉 Congrats.You won...";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".gamescore").style.backgroundColor = "#60b347";
    highscore.style.backgroundColor = "#60b347";
    number.textContent = secretNumber;
    if (score.value > highscore.value) {
      highscore.value = score.value;
    } else {
      highscore.value = score.value;
    }
  } else if (score.value > 1) {
    if (guess > secretNumber) {
      message.textContent = "🔥 Too high📈";
      score.value--;
    } else {
      message.textContent = "🔥 Too low 📉";
      score.value--;
    }
  } else if (score.value <= 1) {
    message.textContent = "🔥 You lost...";
  }
});

again.addEventListener("click", () => {
  secretNumber = Math.floor(Math.random() * 20) + 1;
  console.log(secretNumber);
  document.querySelector("#guess").value = "";
  document.querySelector("body").style.backgroundColor = " rgb(34, 34, 34)";
  document.querySelector(".gamescore").style.backgroundColor =
    " rgb(34, 34, 34)";
  highscore.style.backgroundColor = " rgb(34, 34, 34)";
  score.value = 20;
  // highscore.value = 0;
  number.textContent = "?";
});

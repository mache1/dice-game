var player = document.querySelectorAll(".player");

var currentScore = document.querySelector(".current-score");
var score = document.querySelector(".score");

var currentScoreNumber = Number(currentScore.textContent);
var scoreNumber = Number(score.textContent);

var roll = document.querySelector(".btn--roll");
var hold = document.querySelector(".btn--hold");
var newGame = document.querySelector(".btn--new");

var image = document.querySelector(".dice");
var currentPlayer = 0;

var switchPlayer = function () {
    if (currentPlayer % 2 === 0) {
        player[0].classList.remove("player--active");
        player[1].classList.add("player--active");
    }
    else if (currentPlayer % 2 != 0) {
        player[1].classList.remove("player--active");
        player[0].classList.add("player--active");
    }
    if (player[0].classList.contains("player--active")) {
        score = document.querySelector("#score--0");
        scoreNumber = score.textContent;
        currentScore = document.querySelector("#current--0");
    }
    else if (player[1].classList.contains("player--active")) {
        score = document.querySelector("#score--1");
        scoreNumber = score.textContent;
        currentScore = document.querySelector("#current--1");
    }
    currentPlayer++;
}

roll.addEventListener("click", function () {
    let randomNumber = Math.floor(Math.random() * 6 + 1);
    let imageName = "dice-" + String(randomNumber) + ".png";

    image.setAttribute("src", imageName);
    currentScoreNumber = currentScoreNumber + randomNumber;
    currentScore.textContent = currentScoreNumber;

    if (randomNumber === 1) {
        currentScoreNumber = 0;
        currentScore.textContent = currentScoreNumber;
        switchPlayer();
    }
});

hold.addEventListener("click", function () {
    if (currentScoreNumber > scoreNumber)
        scoreNumber = currentScoreNumber;

    score.textContent = scoreNumber;
    currentScoreNumber = 0;
    currentScore.textContent = currentScoreNumber;

    if (scoreNumber >= 15) {
        if (currentPlayer % 2 === 0)
            player[0].classList.add("player--winner");
        if (currentPlayer % 2 === 1)
            player[1].classList.add("player--winner");
        roll.disabled = true;
        hold.disabled = true;
    }
    switchPlayer();
});

newGame.addEventListener("click", function () {
    location.reload();
});
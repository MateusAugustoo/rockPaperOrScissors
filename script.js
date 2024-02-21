let quantityVictory = getElementHtml(".quantity__victory");
let quantityDraw = getElementHtml(".quantity__draw");
let quantityDefeat = getElementHtml(".quantity__defeat");

let choiceComputerText = getElementHtml(".computer__choice");

const choice = ["rock", "paper", "scissors"];

const out = {
  rock: { winner: "scissors" },
  paper: { winner: "rock" },
  scissors: { winner: "paper" },
};

function choiceComputer() {
  return choice[Math.floor(Math.random() * choice.length)];
}

function runGamer(params) {
  let = selectedPlayerUser = params.value;
  let = selectedChoiceComputer = choiceComputer();

  choiceComputerText.innerHTML = selectedChoiceComputer;

  condition(selectedPlayerUser, selectedChoiceComputer);
}

function condition(selectedPlayerUser, selectedChoiceComputer) {
  if (selectedChoiceComputer === selectedPlayerUser) {
    incrementDraw();
  } else if (out[selectedChoiceComputer].winner === selectedPlayerUser) {
    incrementDefeat();
  } else {
    incrementVictory();
  }
}

function incrementDraw() {
  quantityDraw.innerHTML = parseInt(quantityDraw.innerHTML) + 1
}

function incrementVictory() {
  quantityVictory.innerHTML = parseInt(quantityVictory.innerHTML) + 1
}

function incrementDefeat() {
  quantityDefeat.innerHTML = parseInt(quantityDefeat.innerHTML) + 1
}

function getElementHtml(className) {
  return document.querySelector(className)
}

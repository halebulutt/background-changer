const body = document.querySelector("body");
const changeButton = document.querySelector("#change-button");
const sequenceButton = document.querySelector("#sequence-button");

const colors = [
    "black", 
    "yellow",
    "#6dd6cc", 
    "blue",
    "cyan",
    "green",
    "#b25ecc",
    "#420a14", 
    "#1448d9",
    "#cc5e1f",
];

changeButton.addEventListener("click", changeRandomBackground);
sequenceButton.addEventListener("click", changeSequenceBackground);

let sequence = 0;

function changeRandomBackground() {
    // choose a random color.
    const randomNumber = Math.floor(Math.random() * colors.length);
    const chosenColor = colors[randomNumber];
    body.style.backgroundColor = chosenColor;
}

function changeSequenceBackground() {
    // choose background color respectively.
    const chosenColor = colors[sequence];
    if (sequence == 10) sequence = 0
    sequence ++;
    body.style.backgroundColor = chosenColor;
}

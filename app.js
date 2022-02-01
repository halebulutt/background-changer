const body = document.querySelector("body");
const button = document.querySelector("button");
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


button.addEventListener("click", changeBackground);

let sequence = 0;

function changeBackground() {
    // choose a random color.
    const randomNumber = Math.floor(Math.random() * colors.length);
    const chosenColor = colors[randomNumber];
    console.log(randomNumber, chosenColor);
    body.style.backgroundColor = chosenColor;

    // choose background color respectively.

    // const chosenColor = colors[sequence];
    // if(sequence == 10) sequence = 0
    // sequence ++;

    // body.style.backgroundColor = chosenColor;



}

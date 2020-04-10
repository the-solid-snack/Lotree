let howManyDice = 0, diceValue=0, card=0;

const rand1D = document.querySelector(".rand1D");
const rand2D = document.querySelector(".rand2D");
const rand3D = document.querySelector(".rand3D");
const pioche = document.querySelector(".pioche");

function rollD8(howManyDice) {
    diceValue += Math.floor(Math.random() * (8*howManyDice - howManyDice) ) + howManyDice;
    return howManyDice * diceValue;
}

function draw() {
    card = Math.floor(Math.random() * (103 - 1)) + 1;
    return card;
}

rand1D.addEventListener("click", () => {
    diceValue = 0;
    rollD8(1);
    console.log(diceValue);
});

rand2D.addEventListener("click", () => {
    diceValue = 0;
    rollD8(2);
    console.log(diceValue);
});

rand3D.addEventListener("click", () => {
    diceValue = 0;
    rollD8(3);
    console.log(diceValue);
});

pioche.addEventListener("click", () => {
    draw();
    console.log(`carte numéro ${card}`);
});
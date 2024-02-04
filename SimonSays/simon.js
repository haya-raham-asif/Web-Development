let score = document.getElementById("user-score");
let red = document.getElementById("red");
let blue = document.getElementById("blue");
let yellow = document.getElementById("yellow");
let green = document.getElementById("green");
let turnStatus = document.getElementById("whoIsPlaying"); 
let compPickedColours = []
let userPickedColours = []

function game(user, comp) {
turnStatus.innerHTML = "Computer is playing..."
switch (compChoice) {
    case 0:
        compChoice = 'red';
        compPickedColours.push('red');
        break;
    case 1:
        compChoice = 'blue';
        compPickedColours.push('blue');
        break;
    case 2:
        compChoice = 'yellow';
        compPickedColours.push('yellow');
        break;
    case 3:
        compChoice = 'green';
        compPickedColours.push('green');
        break;   
}
}

red.addEventListener('click', function() {
    let compChoice =Math.floor(Math.random(0, 4) * 4);
    let userChoice = 'red'
    game(userChoice, compChoice)
})

blue.addEventListener('click', function() {
    let compChoice =Math.floor(Math.random(0, 4) * 4);
    let userChoice = 'blue'
    game(userChoice, compChoice)
})
yellow.addEventListener('click', function() {
    let compChoice =Math.floor(Math.random(0, 4) * 4;
    let userChoice = 'yellow'
    game(userChoice, compChoice)
})
green.addEventListener('click', function() {
    let compChoice =Math.floor(Math.random(0, 4) * 4);
    let userChoice = 'green'
    game(userChoice, compChoice)
})
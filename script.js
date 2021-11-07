const imgCard = ["<img src='img/explodyparrot.gif' alt=''>", 
"<img src='img/fiestaparrot.gif' alt=''>",
"<img src='img/metalparrot.gif' alt=''>",
"<img src='img/revertitparrot.gif' alt=''>",
"<img src='img/tripletsparrot.gif' alt=''>",
"<img src='img/unicornparrot.gif' alt=''>",
"<img src='img/anotherparrot.gif' alt=''>"];

let imgSelection = [];

let divCards = document.querySelector(".cards");
let divCronometer = document.querySelector(".cronometer");

let flippedCard = 0;
let firstCard = '';
let secondCard = '';
let moves = 0;
let points = 0;
let cronometer = 0;
let cardQuant = 0;
let interval = 0;

startGame();


function startGame() {
    while (cardQuant === 0 | cardQuant%2 !== 0 | cardQuant<4 | cardQuant>14) {

        cardQuant = parseInt(prompt("How many cards do you want?"));
    }

    for (let i=0; i<(cardQuant/2); i++){
        imgSelection.push(imgCard[i]);
        imgSelection.push(imgCard[i]);
    };
    
    imgSelection.sort(compare);
     
    for (let i = 0; i < cardQuant; i++) {
    
        divCards.innerHTML += `
        <div onclick="flipCard(this)" class="card" data-identifier="card">
            <div  class="face front-face" data-identifier="front-face">
                <img  src="img/front.png" alt="">
            </div>
            <div class="face back-face" data-identifier="back-face">
                ${imgSelection[i]}
            </div>
        </div>`;
    };

    interval = setInterval(time, 1000);
};

function compare() { 
    return Math.random() - 0.5; 
}

function resetDisplay() {
    divCards.innerHTML = null;
    cronometer = 0;
    clearInterval(interval);
    points =0;
    moves = 0;
    imgSelection = [];
    console.log(imgSelection);
    divCronometer.innerHTML = "0";
    cardQuant = 0;
}

function time() {
    cronometer++;
    divCronometer.innerHTML = cronometer;
}

function resetCards(){
    firstCard.classList.toggle("flip");
    secondCard.classList.toggle("flip");
    flippedCard = 0;
};

function flipCard(cardClicked) {
    if (flippedCard === 0) {
        firstCard = cardClicked;
        firstCard.classList.toggle("flip");
        flippedCard++;
    }else if (flippedCard===1){
        secondCard = cardClicked;
        secondCard.classList.toggle("flip");
        flippedCard++;
        if (firstCard.innerHTML !== secondCard.innerHTML){
            setTimeout(resetCards, 1000);
        }else{
            firstCard.onclick = null;
            secondCard.onclick = null;
            points++;
            flippedCard = 0;
        };
    };
    movesCount();
};

function movesCount(){
    moves++;
    console.log(moves);
    if (points===cardQuant/2){
        setTimeout(alertWin, 500);
    }
};

function alertWin() {
    alert(`You won in ${moves} turns and spent ${cronometer} seconds!`);
    restartGame();
};

function restartGame() {
    if (confirm("Press 'OK' if you want to play again.")) {
        resetDisplay();
        startGame();
    }else{
        console.log("cancel");
    };
};

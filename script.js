const cardQuant = parseInt(prompt("How many cards do you want?"));

const imgCard = ["<img src='img/explodyparrot.gif' alt=''>", 
"<img src='img/fiestaparrot.gif' alt=''>",
"<img src='img/metalparrot.gif' alt=''>",
"<img src='img/revertitparrot.gif' alt=''>",
"<img src='img/tripletsparrot.gif' alt=''>",
"<img src='img/unicornparrot.gif' alt=''>",
"<img src='img/anotherparrot.gif' alt=''>"];

const imgSelection = [];

let divCards = document.querySelector(".cards");
let divCronometer = document.querySelector(".cronometer");

let flippedCard = 0;
let firstCard = '';
let secondCard = '';
let moves = 0;
let points = 0;
let cronometer = 0;

for (let i=0; i<(cardQuant/2); i++){
    imgSelection.push(imgCard[i]);
    imgSelection.push(imgCard[i]);
};

imgSelection.sort(compare);

function compare() { 
	return Math.random() - 0.5; 
}

for (let i = 0; i < cardQuant; i++) {

    divCards.innerHTML += `
    <div onclick="flipCard(this)" class="card">
        <div  class="face front-face">
            <img  src="img/front.png" alt="">
        </div>
        <div class="face back-face">
            ${imgSelection[i]}
        </div>
    </div>`;
};

setInterval(time, 1000);

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
        setTimeout(alertWin, 1000);
    }
};

function alertWin() {
    alert(`You won in ${moves} turns and spent ${cronometer} seconds!`);
};

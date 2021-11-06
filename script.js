const cardQuant = prompt("How many cards do you want?");

let divCards = document.querySelector(".cards");
const imgCard = ["<img src='img/explodyparrot.gif' alt=''>", 
                "<img src='img/fiestaparrot.gif' alt=''>",
                "<img src='img/metalparrot.gif' alt=''>",
                "<img src='img/revertitparrot.gif' alt=''>",
                "<img src='img/tripletsparrot.gif' alt=''>",
                "<img src='img/unicornparrot.gif' alt=''>",
                "<img src='img/front.gif' alt=''>"];

const imgSelection = [];

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

function flipCard(cardClicked) {
    cardClicked.classList.toggle("flip");
};


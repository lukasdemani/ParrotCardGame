const cardQuant = prompt("How many cards do you want?");

let divCards = document.querySelector(".cards");

for (let i = 0; i < cardQuant; i++) {

    divCards.innerHTML += `
    <div onclick="flipCard(this)" class="card">
        <div  class="face front-face">
            <img  src="img/front.png" alt="">
        </div>
        <div class="face back-face">
            Verso
        </div>
    </div>`;
}

function flipCard(cardClicked) {
    cardClicked.classList.toggle("flip");
};


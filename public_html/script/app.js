/****** CARD INFO ******/
let card = document.querySelector('.card');


/******** NEW CARD INFO *********/
const newCard = document.createElement('div')
newCard.className = 'card';

const newTitleCard = document.createElement('h2');
newTitleCard.textContent = '¿Qué Ofrezco?';
newTitleCard.className = 'section-title';

const infoArticle = document.createElement('article');
infoArticle.className = 'info';
infoArticle.style.textAlign = 'center';

const firstParagraph = document.createElement('p');
firstParagraph.textContent = "Servicio de reparación de PC's"

const secondParagraph = document.createElement('p');
secondParagraph.textContent = 'Diagnóstico de computadoras';

const thirdParagraph = document.createElement('p');
thirdParagraph.textContent = 'Presupuestos de ordenadores';

const fourthParagraph = document.createElement('p');
fourthParagraph.textContent = 'Diseño y desarrollo de sitios web';

newCard.append(newTitleCard);
newCard.append(infoArticle);
infoArticle.append(firstParagraph);
infoArticle.append(secondParagraph);
infoArticle.append(thirdParagraph);
infoArticle.append(fourthParagraph);
newCard.classList.toggle('hidden');

/********** SELECTING ARROWS ************/

let aboutSection = document.querySelector('#about-us');
let leftArrow = aboutSection.firstElementChild;
let rightArrow = aboutSection.lastElementChild;
leftArrow.classList.toggle('hidden')

/************* FUNCTIONS ************/


const showNewCard = () => {
    leftArrow.classList.toggle('hidden');
    rightArrow.classList.toggle('hidden');
    card.classList.toggle('hidden')
    aboutSection.append(newCard);
    newCard.classList.toggle('hidden');

    if (matchMedia('only screen and (min-width:320px) and (max-width:760px)').matches) {
        infoArticle.classList.toggle('infoArticle');
    } else if (matchMedia('only screen and (min-width:760px) and (max-width: 1024px)').matches) {
        infoArticle.style.display = 'flex';
        infoArticle.style.flexDirection = 'column';
        infoArticle.style.padding = '0';
    }

};
const showPreviousCard = () => {
    showNewCard();
};

/******** MANIPULATING THE CARD **********/

rightArrow.addEventListener('click', showNewCard);
leftArrow.addEventListener('click', showPreviousCard);
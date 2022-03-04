const cardList = document.querySelectorAll(".card");

const cardBackList = document.querySelectorAll(".card__side--back");

let cardBackTranslation;
let cardBackWidth;
let cardBackHeight;

const setCardBackTranslation = () => {
  cardBackTranslation = [...cardBackList].map((card) => [
    cardBackList[0].getBoundingClientRect().x -
      card.getBoundingClientRect().x -
      parseInt(getComputedStyle(cardList[0]).margin),
    cardBackList[0].getBoundingClientRect().y -
      parseInt(getComputedStyle(cardList[0]).margin) -
      card.getBoundingClientRect().y,
  ]);
};
const setCardBackWidth = () => {
  cardBackWidth =
    window.innerWidth > 600
      ? `${
          2 * parseInt(getComputedStyle(cardList[0]).width) +
          4 * parseInt(getComputedStyle(cardList[0]).margin)
        }px`
      : `${
          parseInt(getComputedStyle(cardList[0]).width) +
          2 * parseInt(getComputedStyle(cardList[0]).margin)
        }px`;
};

const setCardBackHeight = () => {
  cardBackHeight = `${window.innerHeight - 125}px`;
};

window.addEventListener("load", function (e) {
  setTimeout(setCardBackTranslation(), 10000);
  setCardBackWidth();
  setCardBackHeight();
});
window.addEventListener("resize", function (e) {
  setCardBackTranslation();
  setCardBackWidth();
  setCardBackHeight();
});

const cardShowBack = (card, i) => {
  card.querySelector(
    ".card__side--back"
  ).style.transform = `translate3d(${cardBackTranslation[i][0]}px, ${cardBackTranslation[i][1]}px, 0)`;
  console.log(getComputedStyle(card).width, getComputedStyle(card).margin);
  card.querySelector(".card__side--back").style.width = cardBackWidth;
  card.querySelector(".card__side--back").style.height = cardBackHeight;
};

const cardShowFront = (card) => {
  card.querySelector(
    ".card__side--back"
  ).style.transform = `translate3d(0,0,0) rotateY(180deg)`;
};

cardList.forEach((card, i) => {
  if (window.matchMedia("(hover: hover)").matches) {
    card.addEventListener("mouseenter", function (e) {
      cardShowBack(card, i);
    });
    card.addEventListener("mouseleave", function (e) {
      cardShowFront(card);
    });
  } else {
    card.previousElementSibling.addEventListener("change", function (e) {
      if (card.previousElementSibling.checked == true) {
        cardShowBack(card, i);
      }
      if (card.previousElementSibling.checked == false) {
        cardShowFront(card);
      }
    });
  }
});

// everythings got a color which is grey and everythings got a background colour which is white.
// create a modifyier class which determines background color and color.
// Apply that class to relevent parts of the webpage when selected in radio

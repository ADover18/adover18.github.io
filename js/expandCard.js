"use strict";

const cardList = document.querySelectorAll(".card");

const cardBack = document.querySelectorAll(".card__side--back");

let cardPos;

["resize", "load"].forEach((event) => {
  window.addEventListener(event, function (e) {
    cardPos = [...cardBack].map((card) => [
      cardBack[0].getBoundingClientRect().x - card.getBoundingClientRect().x,
      cardBack[0].getBoundingClientRect().y - card.getBoundingClientRect().y,
    ]);
  });
});

const cardShowBack = (card, i) => {
  card.querySelector(
    ".card__side--back"
  ).style.transform = `translate(${cardPos[i][0]}px, ${cardPos[i][1]}px)`;
};

const cardShowFront = (card) => {
  card.querySelector(
    ".card__side--back"
  ).style.transform = `translate(0,0) rotateY(180deg)`;
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

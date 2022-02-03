"use strict";

const cardList = document.querySelectorAll(".card");

const cardBack = document.querySelectorAll(".card__side--back");

let cardPos;

["resize", "load"].forEach((event) => {
  window.addEventListener(event, function () {
    cardPos = [...cardBack].map((card) => [
      cardBack[0].getBoundingClientRect().x - card.getBoundingClientRect().x,
      cardBack[0].getBoundingClientRect().y - card.getBoundingClientRect().y,
    ]);
  });
});

cardList.forEach((card, i) => {
  card.addEventListener("mouseenter", function (event) {
    card.querySelector(
      ".card__side--back"
    ).style.transform = `translate(${cardPos[i][0]}px, ${cardPos[i][1]}px)`;
  });
  card.addEventListener("mouseleave", function (event) {
    card.querySelector(
      ".card__side--back"
    ).style.transform = `rotateY(-180deg) translateY(0)`;
  });
});

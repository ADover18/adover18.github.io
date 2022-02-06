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

// cardList.forEach((card, i) => {
//   console.log(card.previousElementSibling);
//   if (
//     "ontouchStart" in window ||
//     navigator.maxTouchPoints > 0 ||
//     navigator.msMaxTouchPoints > 0
//   ) {
//     if (card.previousElementSibling.checked == true) {
//       card.querySelector(
//         ".card__side--back"
//       ).style.transform = `translate(${cardPos[i][0]}px, ${cardPos[i][1]}px)`;
//     }
//     if (card.previousElementSibling.checked == false) {
//       card.querySelector(
//         ".card__side--back"
//       ).style.transform = `rotateY(-180deg) translate(0,0)`;
//     }
//   } else {
//     card.addEventListener("mouseenter", function (e) {
//       card.querySelector(
//         ".card__side--back"
//       ).style.transform = `translate(${cardPos[i][0]}px, ${cardPos[i][1]}px)`;
//     });
//     card.addEventListener("mouseleave", function (e) {
//       card.querySelector(
//         ".card__side--back"
//       ).style.transform = `rotateY(-180deg) translate(0,0)`;
//     });
//   }
// });

cardList.forEach((card, i) => {
  if (window.matchMedia("(hover: hover)").matches) {
    card.addEventListener("mouseenter", function (e) {
      card.querySelector(
        ".card__side--back"
      ).style.transform = `translate(${cardPos[i][0]}px, ${cardPos[i][1]}px)`;
    });
    card.addEventListener("mouseleave", function (e) {
      card.querySelector(
        ".card__side--back"
      ).style.transform = `translate(0,0) rotateY(180deg)`;
    });
  } else {
    card.previousElementSibling.addEventListener("change", function (e) {
      if (card.previousElementSibling.checked == true) {
        card.querySelector(
          ".card__side--back"
        ).style.transform = `translate(${cardPos[i][0]}px, ${cardPos[i][1]}px)`;
      }
      if (card.previousElementSibling.checked == false) {
        card.querySelector(
          ".card__side--back"
        ).style.transform = `translate(0,0) rotateY(180deg)`;
      }
    });
  }
});

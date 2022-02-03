"use strict";

// window.onscroll = function () {
//   scrollFunction();
//   collapseHeader();
// };

// console.log(
//   window.getComputedStyle(document.body).getPropertyValue("font-size")
// );

// With Javascript get the amount you have scrolled down.
//Subtract one third from the height of the image. Cap at 0
//Subtract one third from the blurb font size. Cap at 0
//Subtract one third from the top header. Cap at 1.2rem
//When top header font size is 1.2rem change content to one line.

//How do we convert from pixels to Rem?
//We divide pixels by the root font size
//Get the root font size in javascript and divide the pixels by it!!

// function collapseHeader() {
//   const rootFontSize = +window
//     .getComputedStyle(document.body)
//     .getPropertyValue("font-size")
//     .slice(0, -2);
//   let reduceUnit = document.documentElement.scrollTop / rootFontSize;
//   console.log(reduceUnit);
//   document.querySelector(".header__img").style.height = `${20 - reduceUnit}rem`;
// }

//${20 - reduceUnit}
// function scrollFunction() {
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     document.querySelector(".header__heading").style.fontSize = "1.2rem";
//     document.querySelector(".header__heading").style.paddingTop = "1.5rem";
//     document.querySelector(".header__heading").textContent =
//       "Alex Dover Web Developer";
//     document.querySelector(".header__img").style.display = "none";
//     document
//       .querySelector(".header__heading")
//       .classList.remove("u-margin-bottom-small");
//     document
//       .querySelector(".header__text")
//       .classList.remove("u-margin-bottom-small");
//     document.querySelector(".header__text").style.fontSize = "0rem";
//     document.querySelector(".nav").style.margin = "1rem 0";
//   } else {
//     document.querySelector(".header__heading").style.fontSize = "3rem";
//     document.querySelector(".header__heading").innerHTML =
//       "Alex Dover <br> Web Developer";
//     document.querySelector(".header__img").style.display = "";
//     document
//       .querySelector(".header__heading")
//       .classList.add("u-margin-bottom-small");
//     document
//       .querySelector(".header__text")
//       .classList.add("u-margin-bottom-small");
//     document.querySelector(".header__text").style.fontSize = "1.6rem";
//   }
// }

//transparent element on page directly below the header. When it is observed header is full. When it is unobserved, header collapses

const sections = document.querySelectorAll("section");
const triggerHeader = document.querySelector(".trigger-header");
const header = document.querySelector(".header");
const headerHeading = document.querySelector(".header__heading");
const headerText = document.querySelector(".header__text");
const headerImg = document.querySelector(".header__img");
const nav = document.querySelector(".nav");
console.log(triggerHeader);

const debounceScroll = function () {
  "scroll wheel".split(" ").forEach((eventType) => {
    window.addEventListener(
      eventType,
      (e) => {
        e.preventDefault();
        window.scrollTo(0, 1);
        // setTimeout(() => {
        //   window.removeEventListener();
        // }, 1000);
        //remove event listener after 1 second
        // return true;
      },
      {
        once: true,
        passive: false,
      }
    );
  });
};

const regulateScroll = function () {
  "scroll wheel".split(" ").forEach((eventType) => {
    window.addEventListener(
      eventType,
      (e) => {
        // e.preventDefault();
        // window.scrollTo(0, 1);
        // return true;
        console.log("returning to true");
      },
      {
        passive: true,
      }
    );
  });
};

const adaptHeader = function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      // regulateScroll();
      header.classList.remove("header--expanded");
      headerHeading.classList.remove("header__heading--expanded");
      headerText.classList.remove("header__text--expanded");
      headerImg.classList.remove("header__img--expanded");
      nav.classList.remove("nav--expanded");
      console.log("not observing");
      return;
    }
    console.log("observing");
    header.classList.add("header--expanded");
    headerHeading.classList.add("header__heading--expanded");
    headerText.classList.add("header__text--expanded");
    headerImg.classList.add("header__img--expanded");
    nav.classList.add("nav--expanded");
  });
};

const docObserver = new IntersectionObserver(adaptHeader, {
  root: null,
  threshold: 1,
});
docObserver.observe(triggerHeader);

// sections.forEach((section) => docObserver.observe(section));
//When Section is not in the viewport include expanded header class
//When Section is in the viewport add the collapse-header class to the header

//Ensure header starts off the height of the viewport
//Observe the top section. A

// window.onscroll = function () {
//   if (window.scrollY > 0) {
//     header.classList.remove("header--expanded");
//     headerHeading.classList.remove("header__heading--expanded");
//     headerText.classList.remove("header__text--expanded");
//     headerImg.classList.remove("header__img--expanded");
//     nav.classList.remove("nav--expanded");
//     console.log("not observing");
//   } else {
//     console.log("observing");
//     header.classList.add("header--expanded");
//     headerHeading.classList.add("header__heading--expanded");
//     headerText.classList.add("header__text--expanded");
//     headerImg.classList.add("header__img--expanded");
//     nav.classList.add("nav--expanded");
//   }
// };

//Implement scroll debouncing when webpage is at the top

//When at top of website change the scroll sensitivity so any single scroll is the same as a minimum scroll (press down arrow once)
// window.onscroll = function () {
//   if (header.classList.contains("header--expanded")) {

//   }
// };

// console.log(sections[0]);

// if (window.addEventListener)
//   window.addEventListener("DOMMouseScroll", wheel, false);
// window.onmousewheel = document.onmousewheel = wheel;

// function wheel(event) {
//   var delta = 0;
//   if (event.wheelDelta) delta = event.wheelDelta / 120;
//   else if (event.detail) delta = -event.detail / 3;

//   handle(delta);
//   if (event.preventDefault) event.preventDefault();
//   event.returnValue = false;
// }

// function handle(delta) {
//   var time = 1000;
//   var distance = 300;

//   window.stop().animate(
//     {
//       scrollTop: document.querySelector(window).scrollTop - distance * delta,
//     },
//     time
//   );
// }

// document.querySelectorAll("html, b")

// document.addEventListener("wheel", (e) => {
//   console.log("Wheel!!!");
// });

// Try introducing a sticky header to the parallax wrapper part of the website. See how it affects scroll snap.
//In the main part of the page - Add padding the size of the header to each section

"use strict";

const navLinks = document.querySelectorAll(".navigation__link");

navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    document.querySelector(".navigation__checkbox").checked = false;
  });
});

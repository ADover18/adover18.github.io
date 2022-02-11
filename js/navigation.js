"use strict";
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navigation__link");
const scrollWrapper = document.querySelector(".scroll-snap-wrapper");
navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    document.querySelector(".navigation__checkbox").checked = false;
  });
});

const styleActiveNavLink = function (entries, observer) {
  entries.forEach(function (entry) {
    let targSectIndex = [...sections].indexOf(entry.target);
    if (!entry.isIntersecting) {
      navLinks[targSectIndex].style.fontWeight = "300";
      navLinks[targSectIndex].style.fontSize = "15px";
      return;
    }
    navLinks[targSectIndex].style.fontWeight = "500";
    navLinks[targSectIndex].style.fontSize = "25px";
  });
};

const sectionObserver = new IntersectionObserver(styleActiveNavLink, {
  root: null,
  threshold: 0,
});

sections.forEach((section) => sectionObserver.observe(section));

[("resize", "load")].forEach((event) => {
  window.addEventListener(event, function (e) {
    let vh = window.innerHeight * 0.01;
    let vw = window.innerWidth * 0.01;
    document.documentElement.style.setProperty("--vvh", `${vh}px`);
    document.documentElement.style.setProperty("--vvw", `${vw}px`);
  });
});

// FOR TESTING PURPOSES
// document.querySelector(
//   ".viewport"
// ).innerHTML = `tab-port 37.5em<br> tab-lan 56.25em <br> desktop 63em<br>
// ${window.innerWidth}px x ${window.innerHeight}px <br> ${
//   window.innerWidth / 16
// }em x ${window.innerHeight / 16}em`;
// window.addEventListener("resize", function (e) {
//   document.querySelector(
//     ".viewport"
//   ).innerHTML = `tab-port 37.5em<br> tab-lan 56.25em <br> desktop 63em<br> ${
//     window.innerWidth
//   }px x ${window.innerHeight}px <br> ${window.innerWidth / 16}em x ${
//     window.innerHeight / 16
//   }em`;
// });

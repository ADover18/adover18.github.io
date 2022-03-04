[("resize", "load")].forEach((event) => {
  window.addEventListener(event, function (e) {
    let vh = window.innerHeight * 0.01;
    let vw = window.innerWidth * 0.01;
    document.documentElement.style.setProperty("--vvh", `${vh}px`);
    document.documentElement.style.setProperty("--vvw", `${vw}px`);
  });
});

const textBlocks = document.querySelectorAll(".header__text");

const headings = document.querySelectorAll(".header__heading");

const header = document.querySelectorAll(".header")[0];
console.log(header[0], header[1]);

const findCenter = (el) => [
  el.getBoundingClientRect().x + el.getBoundingClientRect().width / 2,
  el.getBoundingClientRect().y + el.getBoundingClientRect().height / 2,
];

const movementOffset = window.innerWidth < 448 ? 1 : 0.8;

const movements = [...headings].map((heading, i) => [
  findCenter(header)[0] - findCenter(heading)[0],
  findCenter(header)[1] -
    findCenter(heading)[1] +
    heading.getBoundingClientRect().height * 1.1 * (i * i + i - movementOffset),
]);

const headingsLength = `${headings[1].getBoundingClientRect().width}px`;

const scrollableContent = document.querySelector(".scroll-snap-wrapper");

const stopScroll = (e) => e.preventDefault();

["scroll", "wheel"].forEach((event) =>
  scrollableContent.addEventListener(event, stopScroll)
);

setTimeout(function () {
  ["scroll", "wheel"].forEach((event) =>
    scrollableContent.removeEventListener(event, stopScroll)
  );
}, 2500);

document
  .querySelector(".header__divider")
  .setAttribute("width", headingsLength);

document.documentElement.style.setProperty(
  "--heading1-x-movement",
  `${movements[0][0]}px`
);
document.documentElement.style.setProperty(
  "--heading1-y-movement",
  `${movements[0][1]}px`
);
document.documentElement.style.setProperty(
  "--heading2-x-movement",
  `${movements[1][0]}px`
);
document.documentElement.style.setProperty(
  "--heading2-y-movement",
  `${movements[1][1]}px`
);
document.documentElement.style.setProperty("--headings-length", headingsLength);
console.log(
  document.documentElement.style.getPropertyValue("--headings-length")
);

// BUG FIX FOR SAFARI TO ALLOW VARIABLES IN ANIMATION

textBlocks.forEach((textBlock, i) => {
  textBlock.animate(
    [
      {
        transform: `translate(${movements[i][0]}px, ${movements[i][1]}px)`,
        opacity: 1,
      },
      {
        transform: `translate(${movements[i][0]}px, ${movements[i][1]}px)`,
        opacity: 1,
      },
      { transform: "translate(0,0)", opacity: 1 },
    ],
    {
      // timing options
      duration: 4000,
      fill: "forwards",
      iterations: 1,
    }
  );
});

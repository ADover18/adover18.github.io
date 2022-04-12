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

// Scrolling is prevented during animation to allow css variables to load
const stopScroll = (e) => e.preventDefault();

["scroll", "wheel"].forEach((event) =>
  scrollableContent.addEventListener(event, stopScroll)
);

setTimeout(function () {
  ["scroll", "wheel"].forEach((event) =>
    scrollableContent.removeEventListener(event, stopScroll)
  );
}, 2500);

// Dividing line's length in Hero animation set to length of the heading itself
document
  .querySelector(".header__divider")
  .setAttribute("width", headingsLength);

// CSS Varibales used in animation set (These are not currently being used as animation in implemented in JS)

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

textBlocks[0].style.transform = `translate ${movements[0][0]}px, ${movements[0][1]}px`;

textBlocks[1].style.transform = `translate ${movements[1][0]}px, ${movements[1][1]}px`;
// Animation being set in Javascript to allow it to work in Safari

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

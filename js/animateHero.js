const textBlocks = document.querySelectorAll(".header__text");

const headings = document.querySelectorAll(".header__heading");

const header = document.querySelectorAll(".header")[0];

const findCenter = (el) => [
  el.getBoundingClientRect().x + el.getBoundingClientRect().width / 2,
  el.getBoundingClientRect().y + el.getBoundingClientRect().height / 2,
];

const movements = [...headings].map((heading, i) => [
  findCenter(header)[0] - findCenter(heading)[0],
  findCenter(header)[1] -
    findCenter(heading)[1] +
    heading.getBoundingClientRect().height * 1.1 * (i * i + i - 1),
]);

const headingsLength = `${headings[0].getBoundingClientRect().width}px`;
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
        transform: `translate(var(--heading${i + 1}-x-movement), var(--heading${
          i + 1
        }-y-movement))`,
      },
      {
        transform: `translate(var(--heading${i + 1}-x-movement), var(--heading${
          i + 1
        }-y-movement))`,
      },
      { transform: "translate(0,0)" },
    ],
    {
      // timing options
      duration: 4000,
      fill: "forwards",
      iterations: 1,
    }
  );
});
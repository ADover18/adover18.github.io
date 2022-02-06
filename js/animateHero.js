const textBlocks = document.querySelectorAll(".header__text");

const headings = document.querySelectorAll(".header__heading");

const header = document.querySelectorAll(".header")[0];

const findCenter = (el) => [
  el.getBoundingClientRect().x + el.getBoundingClientRect().width / 2,
  el.getBoundingClientRect().y + el.getBoundingClientRect().height / 2,
];

const posDifference = (el1, el2) => [
  findCenter(el1)[0] - findCenter(el2)[0],
  findCenter(el1)[1] - findCenter(el2)[1],
];

[("resize", "load")].forEach((event) => {
  window.addEventListener(event, function (e) {
    let heading1XMovement = `${posDifference(header, headings[0])[0]}px`;
    let heading1YMovement = `${
      posDifference(header, headings[0])[1] -
      headings[0].getBoundingClientRect().height * 1.2
    }px`;
    let heading2XMovement = `${posDifference(header, headings[1])[0]}px`;
    let heading2YMovement = `${
      posDifference(header, headings[1])[1] +
      +headings[1].getBoundingClientRect().height * 1.1
    }px`;
    let headingsLength = `${headings[0].getBoundingClientRect().width}px`;
    document.documentElement.style.setProperty(
      "--heading1-x-movement",
      heading1XMovement
    );
    document.documentElement.style.setProperty(
      "--heading1-y-movement",
      heading1YMovement
    );
    document.documentElement.style.setProperty(
      "--heading2-x-movement",
      heading2XMovement
    );
    document.documentElement.style.setProperty(
      "--heading2-y-movement",
      heading2YMovement
    );
    document.documentElement.style.setProperty(
      "--headings-length",
      headingsLength
    );
  });
});

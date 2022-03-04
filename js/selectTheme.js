const lightRadioBtn = document.querySelector("#color-light");
const darkRadioBtn = document.querySelector("#color-dark");
const lightPinkRadioBtn = document.querySelector("#color-light-pink");
const darkPinkRadioBtn = document.querySelector("#color-dark-pink");
const greenRadioBtn = document.querySelector("#color-green");
const lilacRadioBtn = document.querySelector("#color-lilac");
const yellowRadioBtn = document.querySelector("#color-yellow");
const peachRadioBtn = document.querySelector("#color-peach");
const body = document.querySelector("body");

lightRadioBtn.addEventListener("change", function () {
  body.classList.add("theme__light");
  body.classList.remove("theme__dark");
  body.classList.remove("theme__dark-pink");
  body.classList.remove("theme__light-pink");
  body.classList.remove("theme__green");
  body.classList.remove("theme__lilac");
  body.classList.remove("theme__yellow");
  body.classList.remove("theme__peach");
});

darkRadioBtn.addEventListener("change", function () {
  body.classList.add("theme__dark");
  body.classList.remove("theme__light");
  body.classList.remove("theme__dark-pink");
  body.classList.remove("theme__light-pink");
  body.classList.remove("theme__green");
  body.classList.remove("theme__lilac");
  body.classList.remove("theme__yellow");
  body.classList.remove("theme__peach");
});

lightPinkRadioBtn.addEventListener("change", function () {
  body.classList.add("theme__light-pink");
  body.classList.remove("theme__light");
  body.classList.remove("theme__dark");
  body.classList.remove("theme__green");
  body.classList.remove("theme__lilac");
  body.classList.remove("theme__dark-pink");
  body.classList.remove("theme__yellow");
  body.classList.remove("theme__peach");
});

darkPinkRadioBtn.addEventListener("change", function () {
  body.classList.add("theme__dark-pink");
  body.classList.remove("theme__light");
  body.classList.remove("theme__dark");
  body.classList.remove("theme__green");
  body.classList.remove("theme__lilac");
  body.classList.remove("theme__light-pink");
  body.classList.remove("theme__yellow");
  body.classList.remove("theme__peach");
});

greenRadioBtn.addEventListener("change", function () {
  body.classList.add("theme__green");
  body.classList.remove("theme__light");
  body.classList.remove("theme__dark-pink");
  body.classList.remove("theme__light-pink");
  body.classList.remove("theme__dark");
  body.classList.remove("theme__lilac");
  body.classList.remove("theme__yellow");
  body.classList.remove("theme__peach");
});
lilacRadioBtn.addEventListener("change", function () {
  body.classList.add("theme__lilac");
  body.classList.remove("theme__green");
  body.classList.remove("theme__light");
  body.classList.remove("theme__dark-pink");
  body.classList.remove("theme__light-pink");
  body.classList.remove("theme__dark");
  body.classList.remove("theme__yellow");
  body.classList.remove("theme__peach");
});
yellowRadioBtn.addEventListener("change", function () {
  body.classList.add("theme__yellow");
  body.classList.remove("theme__lilac");
  body.classList.remove("theme__green");
  body.classList.remove("theme__light");
  body.classList.remove("theme__dark-pink");
  body.classList.remove("theme__light-pink");
  body.classList.remove("theme__dark");
  body.classList.remove("theme__peach");
});
peachRadioBtn.addEventListener("change", function () {
  body.classList.add("theme__peach");
  body.classList.remove("theme__light");
  body.classList.remove("theme__dark");
  body.classList.remove("theme__dark-pink");
  body.classList.remove("theme__light-pink");
  body.classList.remove("theme__green");
  body.classList.remove("theme__lilac");
  body.classList.remove("theme__yellow");
});

console.log(document.querySelector("body"));

// List the different items and their

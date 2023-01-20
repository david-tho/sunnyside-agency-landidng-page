"use strict";

const navbar = document.querySelector(".header__nav");
const navBtn = document.querySelector(".btn__navbar");

navBtn.addEventListener("click", function () {
  navbar.classList.toggle("active");
});

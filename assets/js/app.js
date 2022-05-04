"use strict";

// selectors
const btnNavOpen = document.querySelector(".btn-nav-open");
const nav = document.querySelector("nav");

// func
const handleBtnNavClick = () => {
  nav.classList.toggle("hidden");
  btnNavOpen.classList.toggle("btn-nav-close");
};

// listeners
btnNavOpen.addEventListener("click", handleBtnNavClick);

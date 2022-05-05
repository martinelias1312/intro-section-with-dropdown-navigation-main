"use strict";

// selectors
const btnNavOpen = document.querySelector(".btn-nav-open");
const nav = document.querySelector("nav");
const details = [...document.querySelectorAll("details")];
const blur = document.querySelector(".blur");

// func
const handleBtnNavClick = () => {
  nav.classList.toggle("nav-active");
  btnNavOpen.classList.toggle("btn-nav-close");
  blur.classList.toggle("nav-active");
};

const handleDetailsClick = (e) => {
  let clickedItem = e.target.closest("details");
  let arrow = clickedItem.querySelector(".arrow");

  if (clickedItem.open == false) {
    arrow.style.transform = `rotate(180deg)`;
  } else {
    arrow.style.transform = `rotate(0deg)`;
  }
};

// listeners
btnNavOpen.addEventListener("click", handleBtnNavClick);
details.forEach((item) => item.addEventListener("click", handleDetailsClick));

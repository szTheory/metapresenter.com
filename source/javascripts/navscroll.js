var throttle = require("lodash.throttle");

const SCROLL_LIMIT = 1;
const SCROLLED_CLASS = "scrolled";

export const setupScroll = function() {
  let navElem = document.querySelector("nav");

  // callback to update on scroll
  window.onscroll = throttle(function() {
    scrollFunction({ navElem: navElem });
  }, 100);

  // init before scroll
  scrollFunction({ navElem: navElem });
};

function scrollFunction({ navElem }) {
  // if scrolled, add class for it
  if (
    document.body.scrollTop > SCROLL_LIMIT ||
    document.documentElement.scrollTop > SCROLL_LIMIT
  ) {
    navElem.classList.add(SCROLLED_CLASS);

    // otherwise remove class for it
  } else {
    navElem.classList.remove(SCROLLED_CLASS);
  }
}

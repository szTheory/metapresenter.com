var throttle = require('lodash.throttle')

const SCROLL_LIMIT = 1
const SCROLLED_CLASS = 'scrolled'

let navElem = null

document.addEventListener("DOMContentLoaded", function () {
  navElem = document.querySelector('nav')

  // callback to update on scroll
  window.onscroll = throttle(function() {
    scrollFunction()
  }, 100)

  // init before scroll
  scrollFunction()
})

function scrollFunction() {

  // if scrolled, add class for it
  if (document.body.scrollTop > SCROLL_LIMIT || document.documentElement.scrollTop > SCROLL_LIMIT) {
    navElem.classList.add(SCROLLED_CLASS);

  // otherwise remove class for it
  } else {
    navElem.classList.remove(SCROLLED_CLASS)
  }
}
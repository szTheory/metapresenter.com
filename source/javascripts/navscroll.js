var throttle = require('lodash.throttle')

const scrollLimit = 1
let $nav = null

$(document).ready(function() {
  $nav = $('nav')

  window.onscroll = throttle(function() {
    scrollFunction()
  }, 100)

  scrollFunction()
})

function scrollFunction() {

  if (document.body.scrollTop > scrollLimit || document.documentElement.scrollTop > scrollLimit) {
    $nav.addClass('scrolled');
  } else {
    $nav.removeClass('scrolled');
  }
}
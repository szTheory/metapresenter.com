// CSS imports
import '../stylesheets/application.scss'
import '../stylesheets/highlighting.scss.erb'

// JS imports
import 'bootstrap/js/src/collapse'

// app
import './github'

const scrollLimit = 1

$(document).ready(function() {
  window.onscroll = function() {
    scrollFunction()
  }
  scrollFunction()
})

function scrollFunction() {
  const nav = $('nav')
  // const scrollLimit = nav.height()

  if (document.body.scrollTop > scrollLimit || document.documentElement.scrollTop > scrollLimit) {
    nav.addClass('scrolled');
  } else {
    nav.removeClass('scrolled');
  }
}
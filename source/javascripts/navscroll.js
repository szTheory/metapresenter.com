const scrollLimit = 1

$(document).ready(function() {
  window.onscroll = function() {
    scrollFunction()
  }
  scrollFunction()
})

function scrollFunction() {
  const nav = $('nav')

  if (document.body.scrollTop > scrollLimit || document.documentElement.scrollTop > scrollLimit) {
    nav.addClass('scrolled');
  } else {
    nav.removeClass('scrolled');
  }
}
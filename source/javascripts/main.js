import '../stylesheets/all.scss'

$(document).ready(function () {
  console.log("document.ready()")
  var nav_button = document.querySelector('.nav-button');
  var navigation = document.querySelector('.navigation');

  nav_button.addEventListener('click', (function() {
    navigation.classList.toggle('open');
    return nav_button.classList.toggle('active');
  }), false);
});
$(document).ready(function () {
  $('.arrowContainer').click(function (event) {
    event.preventDefault();
    console.log('clicked!');
    $('html, body').animate({
      scrollTop: $('.headerContainer').offset().top + $('.headerContainer').height()
    }, 800);
  });
})
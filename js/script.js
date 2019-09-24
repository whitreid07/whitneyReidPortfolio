$(document).ready(function () {

  //TO SCROLL TO NEAREST SECTION
  $('.arrowContainer').click(function (event) {
    event.preventDefault();
    console.log('clicked!');
    $('html, body').animate({
      scrollTop: $('.headerContainer').offset().top + $('.headerContainer').height()
    }, 800);
  });

  //TO SCROLL BACK TO TOP
  $('.arrowUpContainer').click(function (event) {
    event.preventDefault();
    console.log('clicked!');
    $('html, body').animate({ scrollTop: 0 }, 800);
  });

  //SCROLL TO PROJECTS SECTION
  $('.list1').click(function (event) {
    event.preventDefault();
    console.log('clicked!');
    $('html, body').animate({
      scrollTop: $('.headerContainer').offset().top + $('.headerContainer').height()
    }, 800);
  });

  //SCROLL TO CONTACT SECTION
  $('.list2').click(function (event) {
    event.preventDefault();
    console.log('clicked!');
    $('html, body').animate({
      scrollTop: $('.contactFormContainer').offset().top + $('.contactFormContainer').height()
    }, 800);
  });
})


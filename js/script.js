$(document).ready(function () {

  //HAMBURGER MENU
  $('.hamburger').on('click', function () {
    // toggle class show on the menu
    $('.menu').toggleClass('show');
  });

  $('.exit-responsive').on('click', function () {
    // toggle class show on the menu
    $('.menu').toggleClass('show');
  });

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
    $('html, body').animate({ scrollTop: 0 }, 1500);
  });

  //SCROLL TO PROJECTS SECTION
  $('.list1').click(function (event) {
    // event.preventDefault();
    console.log('clicked!');
    $('html, body').animate({
      scrollTop: $('.headerContainer').offset().top + $('.headerContainer').height()
    }, 1000);
  });

  //SCROLL TO SKILLS SECTION
  $('.list2').click(function (event) {
    // event.preventDefault();
    console.log('clicked!');
    $('html, body').animate({
      scrollTop: $('.skillsToolkit').offset().top + $('#skills').height()
    }, 3000);
  });

  //SCROLL TO CONTACT SECTION
  $('.list3').click(function (event) {
    event.preventDefault();
    console.log('clicked!');
    $('html, body').animate({
      scrollTop: $('.contactFormContainer').offset().top + $('.contactFormContainer').height()
    }, 1000);
  });

  //Check to see if the window is top if not then display button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.scrollToTop').fadeIn();
    } else {
      $('.scrollToTop').fadeOut();
    }
  });

  //Click event to scroll to top
  $('.scrollToTop').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 800);
    return false;
  });
})


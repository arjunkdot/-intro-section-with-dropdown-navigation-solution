$(document).on('click', function () {
  $('.sub-nav').slideUp();
  $('.sub-nav--open').removeClass('sub-nav--open')
  $('.main-nav__icon').removeClass('main-nav__icon--open');
});

$('.main-nav__link').on('click', function (e) {
  e.stopPropagation();

  let subMenu = $(this).siblings('.sub-nav');
  let dropdownIcon = $(this).children('.main-nav__icon');

  if (!subMenu.is('.sub-nav--open')) {
    if ($(document).width() >= 767.98) {
      $('.sub-nav--open').slideUp(150);
      $('.sub-nav--open').removeClass('sub-nav--open');
    }
    subMenu.addClass('sub-nav--open');
    subMenu.slideDown(150);
  } else {
    if ($(document).width() >= 767.98) {
      $('.sub-nav--open').slideUp(150);
    } else {
      subMenu.slideUp(150);
    }
    subMenu.removeClass('sub-nav--open');
  }

  if (!dropdownIcon.is('.main-nav__icon--open')) {
    if ($(document).width() >= 767.98) {
      $('.main-nav__icon--open').removeClass('main-nav__icon--open');
    }
    dropdownIcon.addClass('main-nav__icon--open');
  } else {
    dropdownIcon.removeClass('main-nav__icon--open');
  }

});


$('.hamburger').on('click', function () {
  $('.navigation').animate({ "right": "0px" }, "medium")
  $('.overlay').fadeIn(250);
});

$('.close, .overlay').on('click', function () {
  $('.navigation').animate({ "right": "-250px" }, "medium")
  $('.overlay').fadeOut(250);
});
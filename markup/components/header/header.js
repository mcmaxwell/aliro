$('.header__toggle').click(function () {
  $(this).toggleClass('active')
  $('nav').toggleClass('active')
})

$('.header__menu-link ').click(function () {
  $('.header__toggle').click()
})

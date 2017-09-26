$('.sidebar__tabs-item-title').click(function () {
  $('.sidebar__content-list').removeClass('active')
  $('.sidebar__tabs-item-title').removeClass('active')
  $(this).addClass('active')
  $('.sidebar__content-list').eq($(this).parent().index()).addClass('active')
})

$('.sidebar__messages-item').click(function () {
  $('.sidebar').toggleClass('active')
})

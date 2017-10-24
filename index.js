$(document).ready(function() {

  // $.scrollify({
  //   section: ".section",
  //   offset: -150
  // });

  $('.test').on('click', function() {
    $('.modal').fadeIn('slow');
    $('body').addClass('stop-scrolling');
  });

  $('.modal').on('click', function() {
    $('iframe').attr('src', $('iframe').attr('src'));
    $('.modal').fadeOut('slow');
    $('body').removeClass('stop-scrolling');
  });

});

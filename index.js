$(document).ready(function() {

  $(".knob").click(function() {
    if ( $(this).hasClass("knob-top") ) {
      $(this).removeClass("knob-top");
      $(this).addClass("knob-bottom");
    } else if ( $(this).hasClass("knob-bottom") ) {
      $(this).removeClass("knob-bottom");
      $(this).addClass("knob-top");
    }
  });

});

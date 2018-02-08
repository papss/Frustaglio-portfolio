$(document).ready(function() {

  $(".knob").click(function() {

    if ( $(this).hasClass("knob-top") ) {

      $(this).removeClass("knob-top");
      $(this).animate( {top: '220px'}, 'slow' );
      $(this).addClass("knob-bottom");

    } else if ( $(this).hasClass("knob-bottom") ) {

      $(this).animate( {top: '5px'}, 'slow' );
      $(this).removeClass("knob-bottom");
      $(this).addClass("knob-top");

    }

  });

});

$(document).ready(function() {

  var aboutKnob   = $(".about");
  var portKnob    = $(".portfolio");
  var contKnob    = $(".contact");

  // SLIDER GOES DOWN:
  jQuery.fn.extend({
    sliderDown: function () {

      if ( $(this).hasClass("knob-top") ) {
        $(this).removeClass("knob-top");
        $(this).animate( {top: '220px'}, 'slow' );
        $(this).addClass("knob-bottom");

      }
    }
  });

  // SLIDER GOES UP: 
  jQuery.fn.extend({
    sliderUp: function () {

      if ( $(this).hasClass("knob-bottom") ) {
        $(this).animate( {top: '5px'}, 'slow' );
        $(this).removeClass("knob-bottom");
        $(this).addClass("knob-top");

      }
    }
  });

  $(".knob").click(function() {
    $(aboutKnob).sliderDown();
    $(portKnob).sliderDown();
    $(contKnob).sliderDown();
    $(this).sliderUp();
  })

});

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




  // CLICK LISTENER FOR ANIMATING KNOBS:
  $(".knob").click(function() {
    $(aboutKnob).sliderDown();
    $(portKnob).sliderDown();
    $(contKnob).sliderDown();
    $(this).sliderUp();
  })


  // CHANGE THE VISIBLE SECTION:
  $(portKnob).click(function() {

    if ( $(".portfolio-section").hasClass("off-screen") ) {

      var visible = $(".on-screen");

      $(visible).removeClass("on-screen");
      $(visible).addClass("off-screen");
      $(".portfolio-section").removeClass("off-screen");
      $(".portfolio-section").addClass("on-screen");

    }
  });

  // non-DRY code:

  $(contKnob).click(function() {

    if ( $(".contact-section").hasClass("off-screen") ) {

      var visible = $(".on-screen");

      $(visible).removeClass("on-screen");
      $(visible).addClass("off-screen");
      $(".contact-section").removeClass("off-screen");
      $(".contact-section").addClass("on-screen");

    }
  });

  $(aboutKnob).click(function() {

    if ( $(".about-section").hasClass("off-screen") ) {

      var visible = $(".on-screen");

      $(visible).removeClass("on-screen");
      $(visible).addClass("off-screen");
      $(".about-section").removeClass("off-screen");
      $(".about-section").addClass("on-screen");

    }
  });

});

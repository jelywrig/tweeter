$(document).ready(function() {

const onAnimationCompletion = function () {
  $('#arrows').animate({top:"-=10"},200);
}

  $('#new-tweet-button').click(function(event) {
    event.preventDefault();
    

    if($('section.new-tweet').first().is(':hidden')) {
      $('section.new-tweet').slideDown();
      $('#arrows').animate({top:"+=10"},200, onAnimationCompletion);
    } else {
      $('section.new-tweet').slideUp();
      $('#arrows').animate({top:"+=10"},200, onAnimationCompletion);
      
    }
    

  });
});
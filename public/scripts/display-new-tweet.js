$(document).ready(function() {



  $('#new-tweet-button').click(function(event) {
    event.preventDefault();
    

    if($('section.new-tweet').first().is(':hidden')) {
      $('section.new-tweet').slideDown();
      $('#arrows').animate({height:"+=25"},500);
    } else {
      $('section.new-tweet').slideUp();
      $('#arrows').animate({height:"-=25"},500);
    }
    

  });
});
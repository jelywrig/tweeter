$(document).ready(function() {

  $('#new-tweet-button').click(function(event) {
    event.preventDefault();
    if ($('section.new-tweet').first().is(':hidden')) {
      $('section.new-tweet').slideDown();
      $('#tweet-text').focus();
    } else {
      $('section.new-tweet').slideUp();
    }
    

  });
});
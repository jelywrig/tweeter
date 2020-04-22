const MAXCHARS = 140;

$(document).ready(function() {
  const $input = $('#tweet-text');
  const $charCounter = $('output[for="tweet-text"]');
  
  const charCounter = function() {
    $charCounter.val(MAXCHARS - this.value.length);
    if ($charCounter.val() < 0) {
      $charCounter.addClass('overCharCount');
    } else {
      $charCounter.removeClass('overCharCount');
    }
  };
  // use keyup so that it recounts after backspace
  $input.keyup(charCounter);
  // use change so copy/pasted text detected
  $input.change(charCounter);

});


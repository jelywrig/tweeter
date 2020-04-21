$(document).ready( () => {
  const $input = $('#tweet-text');
  const $charCounter = $('output[for="tweet-text"]');
  ;
  // use keyup so that it recounts after backspace
  $input.keyup(function(event) {
    $charCounter.val(140 - this.value.length);
    if($charCounter.val() < 0) {
      $charCounter.css('color', 'red');
    } else {
      $charCounter.css('color', '#9b9b9b');
    }
  });
})
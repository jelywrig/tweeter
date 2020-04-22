/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready( function () {

  //hide error
  $('div.error').hide();

  const createTweetElement = function(tweetData) {
    const $tweet = $(`
      <article class="tweet">
          <header>
            <img src=${escape(tweetData.user.avatars)}/>
            <span>${escape(tweetData.user.name)}</span>
            <span class="spacer"></span>
            <span class="handle">${escape(tweetData.user.handle)}</span>
          </header>
          <section class="tweet-content">${escape(tweetData.content.text)}</section>
          <footer><span>${daysAgo(escape(tweetData.created_at))} days ago</span><span><i class="fab fa-font-awesome-flag"></i> <i class="fas fa-retweet"></i> <i class="fas fa-heart"></i></span></footer>
        </article>
    
    `);
    return $tweet;
  }

  const renderTweets = function(tweets) {
    let $container = $('#tweets-container');
    $container.empty();
    for(const tweet of tweets) {
      $container.prepend(createTweetElement(tweet));
    }
  }

  const loadTweets = function() {
    $.get('/tweets/')
    .then(function(data) {
      renderTweets(data);
    } )
  }

  // handle new tweet submission
  $('.new-tweet form').submit(function(event) {
    $('div.error').hide();
    event.preventDefault();
    const self = this;
    const tweetText = $(this.text).val();
    
    if(tweetText.length === 0) {
      $('div.error').html('<i class="fas fa-exclamation-triangle"></i> Your tweet must have content! <i class="fas fa-exclamation-triangle"></i>').slideDown('slow');
    } else if (tweetText.length > 140) {
      $('div.error').html('<i class="fas fa-exclamation-triangle"></i> Your tweet has exceeded the maximum size! <i class="fas fa-exclamation-triangle"></i>').slideDown('slow');
    } else {
      $.post('/tweets/', $(this).serialize())
      .then(res => {
        $(self)[0].reset();
        loadTweets();
      });
    }
    
  })
  
  loadTweets();
})
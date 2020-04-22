/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready( function () {

  const createTweetElement = function(tweetData) {
    const $tweet = $(`
      <article class="tweet">
          <header>
            <img src=${tweetData.user.avatars}/>
            <span>${tweetData.user.name}</span>
            <span class="spacer"></span>
            <span class="handle">${tweetData.user.handle}</span>
          </header>
          <section class="tweet-content">${tweetData.content.text}</section>
          <footer><span>${daysAgo(tweetData.created_at)} days ago</span><span><i class="fab fa-font-awesome-flag"></i> <i class="fas fa-retweet"></i> <i class="fas fa-heart"></i></span></footer>
        </article>
    
    `);
    return $tweet;
  }

  const renderTweets = function(tweets) {
    let $container = $('#tweets-container');
    $container.empty();
    for(const tweet of tweets) {
      $container.append(createTweetElement(tweet));
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
    event.preventDefault();
    const self = this;
    const tweetText = $(this.text).val();
    
    if(tweetText.length === 0) {
      alert("Your tweet must have content!");
    } else if (tweetText.length > 140) {
      alert("Maximum tweet length is 140 characters!");
    } else {
      $.post('/tweets/', $(this).serialize())
      .then(res => {
        $(self)[0].reset();
      });
    }
    
  })
  
  loadTweets();
})
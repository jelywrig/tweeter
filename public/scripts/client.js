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

    for(const tweet of tweets) {
      $container.append(createTweetElement(tweet));
    }


  }
  


  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]

  renderTweets(data);
})
/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function () {

  const createTweetElement = function (tweet) {
    const $tweet = `<article class="submitted-tweet">
        <header class="tweet-header">
          <div class="tweet-user-profile">
            <img src="${tweet.user.avatars}"/>
            <p class="composed-tweet-username">${tweet.user.name}</p>
          </div>
          <span class="user-handle">${tweet.user.handle}</span>
        </header>
          <p class="composed-tweet-message">${tweet.content.text}</p>
        <footer class="tweet-footer">
          <p class="date-posted">${tweet.created_at}</p>
          <div class="composed-tweeter-icons">
            <i class="fas fa-flag"></i>
            <i class="fas fa-retweet"></i>
            <i class="fas fa-heart"></i>
          </div>
        </footer>
      </article>`;

    return $tweet;
  };

  const renderTweets = function (tweets) {
    // loops through tweets
    tweets.forEach((tweet) => {
      // calls createTweetElement for each tweet
      const post = createTweetElement(tweet);
      // takes return value and appends it to the tweets container
      $("#tweets-container").prepend(post);
    });
  };


  // Implement AJAX for sending (POSTing) the tweet text to the server
$(".tweet-submission").submit(function(event) {
  event.preventDefault();
  $.post('/tweets/', $(this).serialize())
});

const loadtweets = function() {
  $.ajax({
    url: '/tweets/',
    method: 'GET',
    dataType: 'json',
    success: (tweet) => {
      renderTweets(tweet)
    },
  })
}

loadtweets();

});

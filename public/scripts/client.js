/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function () {

function createTweetElement(tweet) {
  const markup = 
    `<article class="submitted-tweet">
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
    
    return markup;
}


// Test / driver code (temporary). Eventually will get this from the server.
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
}

const $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
$('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
})
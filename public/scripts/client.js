/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function () {

  const createTweetElement = function (tweet) {

    const escape =  function(str) {
      let div = document.createElement('div');
      div.appendChild(document.createTextNode(str));
      return div.innerHTML;
    }

    const $tweet = `<article class="submitted-tweet">
        <header class="tweet-header">
          <div class="tweet-user-profile">
            <img src="${tweet.user.avatars}"/>
            <p class="composed-tweet-username">${tweet.user.name}</p>
          </div>
          <span class="user-handle">${tweet.user.handle}</span>
        </header>
        <p class="composed-tweet-message">${escape(tweet.content.text)}</p>
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
    // remove all children from the <section>
    $("#tweets-container").empty();
    // loops through tweets
    tweets.forEach((tweet) => {
      // calls createTweetElement for each tweet
      const post = createTweetElement(tweet);
      // takes return value and appends it to the tweets container
      $("#tweets-container").prepend(post);
    });
  };

  // Display tweets as soon as the page loads
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

  // AJAX post > send tweet text to the server and get it displaying on the page
  $(".tweet-submission").submit(function(event) {
    const textArea = $('#tweet-text')
    if (textArea.val().trim() === "" || textArea.val().length < 0) {
      $('.error-message').text(` Error: Please enter text`).prepend('<i class="fas fa-exclamation-circle"></i>').slideDown();
      return false;
    }
    
    if (textArea.val().length > 140) {
      $('.error-message').text(`Error: You have exceeded the character limit`).prepend('<i class="fas fa-exclamation-circle"></i>').slideDown();
      return false;
    }

    $('.error-message').slideUp();
    $.post('/tweets/', $(this).serialize())
    loadtweets();
    $("#tweet-text").val('')
    $(".counter").text("140");
    
    
    event.preventDefault();

  });

});


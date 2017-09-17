$(document).ready(function(){
  var quote="";
  var author="";

  function getQuote() {
    $.ajax({
      headers: {
        "X-Mashape-Key": "7V1TK2FmVPmshuciTwwFBonG2wUGp1gHYn9jsnDcK005Exjds6",
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      },
      url: 'https://andruxnet-random-famous-quotes.p.mashape.com/',
      success: function(response) {
        quote = response.quote;
        author = response.author;
        $(".quote").html(quote);
        $(".author").html("- " + author);
      }
    });
  };
  getQuote();
  $(".next-quote-button").on("click", function(e){
    e.preventDefault();
    getQuote();
  });
  $(".tweet-button").on("click", function(e) {
    e.preventDefault();
    window.open('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + quote + '" -' + author));
  });
});

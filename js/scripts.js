$(document).ready(function(){
  var quote="";
  var author="";
  function getQuote() {
    $.ajax({
      headers: {
        "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      },
      url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
      success: function(response) {
        var r = JSON.parse(response);
        quote = r.quote;
        author = r.author;
        $(".quote").html(quote);
        $(".author").html("- " + author);
      }
    });
  };
  getQuote();
  $("#nextQuote").on("click", function(e){
    e.preventDefault();
    getQuote();
  });
  $("#tweet-button").on("click", function(e) {
    //e.preventDefault();
    window.open('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + quote + '" -' + author));
  });
});

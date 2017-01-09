$(document).ready(function(){
  $("#getQuote").on("click", function(e){
    e.preventDefault();
    $.ajax({
      url: "http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en",
      success: function(json) {
        console.log(json.quoteAuthor.length)
        var quoteText = json.quoteText;
        var quoteAuthor = json.quoteAuthor.length > 0 ? json.quoteAuthor : "Anonymous";
        $("#quote").html(quoteText);
        $("#title").html("-" + quoteAuthor);
        $('#tweet').attr('href', 'https://twitter.com/intent/tweet?text=' + encodeURIComponent('"' + quoteText + '" -' + quoteAuthor));
      },
      cache: false
    });
  });
});

$(document).ready(function(){
  $("#getQuote").on("click", function(e){
    e.preventDefault();
    $.ajax({
      url: "http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en",
      success: function(json) {
        console.log(json.quoteAuthor.length)
        var quoteAuthor = json.quoteAuthor.length > 0 ? json.quoteAuthor : "Anonymous";
        $("#quote").html(json.quoteText);
        $("#title").html("-" + quoteAuthor);
      },
      cache: false
    });
  });
});

$(document).ready(function(){
  $("#getQuote").on("click", function(){

    $.getJSON("http://api.forismatic.com/api/jsonp", function(json) {
      $("#quote").html(JSON.stringify(json));
    });
  });
});

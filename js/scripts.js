$(document).ready(function(){
  $("#getQuote").on("click", function(){

    $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(json) {
      $("#quote").html(JSON.stringify(json));
    });
  });
});

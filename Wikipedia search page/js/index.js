
$(document).ready(function() {
  var searchTerm;
  var apiUrl;
  $("#search").click(function() {
    searchTerm = $("#searchTerm").val();
    console.log(searchTerm);
    apiUrl =
      "https://en.wikipedia.org/w/api.php?action=opensearch&search=" +
      searchTerm +
      "&format=json&callback=?";
    console.log(searchTerm);

    console.log(apiUrl);
    $.ajax({
      type: "GET",
      url: apiUrl,
      async: true,
      dataType: "json",
      success: function(data) {
    

        $(".output").html("");
        $("#searchTerm").val(""); // Clear Search box after searching that article/keyword

        if(data[1].length === 0){
          $("#output").html('');
           $("#output").prepend('<p>No results found for '+'"'+searchTerm+'"'+'. Please type the relevant search keyword.</p>');
          
        }
        for(var i = 0; i< data[1].length; i++)
          {
        $(".output").append("<div class= 'resultList'><h1>" + data[1][i] + "</h1><p>" + data[2][i] + "</p> <a href='" + data[3][i] + "' target='_blank' rel='noopener noreferrer'> <u>READ MORE</a></u> <br></div><br>");
      }
        if(data[2][i].length == 0){
            $("output"+i).append("<p><i>No description available.</i></p>");
          }
      },
        error: function(errorMessage) {
        $("#output").html("");
        $("#output").prepend(
          "<p>No results found for " +
            '"' + searchTerm + '"' +  ". Please type the relevant search keyword.</p>");
        }
    });
  });
  });
  // Search using hitting the ENTER key
  $("#random").click(function() {
    window.open("https://en.wikipedia.org/wiki/Special:Random");
  });

$("#searchTerm").keyup(function(event){
    if(event.keyCode == 13){
        $("#search").click();
    }
});
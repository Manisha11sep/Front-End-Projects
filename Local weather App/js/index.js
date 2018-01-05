$(document).ready(function() {
  
var api =
    "https://api.wunderground.com/api/35d9c39ec27c86b6/geolookup/conditions/q/autoip.json";
  var Swap = true;


  $.getJSON(api, function(data) {
    var Fahrenheit = data.current_observation.feelslike_f;
      console.log(data);
    var Celsius = data.current_observation.feelslike_c;
    var image=data.current_observation.icon_url;
    $("#temp").html(Celsius + " &#8451;");
    $("#city").html(data.location.city +" , "+ data.location.state + "  (" +data.location.country_name+")");
    $("#weather").html(data.current_observation.weather);
    $("#weather_icon").attr('src', data.current_observation.icon_url);
    $("#wind_speed").html(data.current_observation.wind_gust_kph + " Km/h" );

    $("#swap_button").click(function() 
                            {
      if (Swap === false) {
        $("#temp").html(Celsius + " &#8451;");
        Swap = true;
      } 
      else {
        $("#temp").html(Fahrenheit + " &#8457");
        Swap = false;
      }
    });
  
      var condition = data.current_observation.weather;
    console.log(condition);
      if (condition ==="Partly Cloudy")
      {

         $('body').css('background-image','url(http://freebigpictures.com/wp-content/uploads/boiling-clouds.jpg)');
    }
    else if(condition=== "Snow")
      {
     
      $('body').css('background-image','url(http://wallpapercave.com/wp/93fC9lv.jpg)');
      }
          else if(condition=== "Rain")    
            {
         
         $('body').css('background-image','url(https://ak3.picdn.net/shutterstock/videos/12369269/thumb/1.jpg)');
      }
      else if (condition === "Clear")
    {

       $('body').css('background-image','url(http://s1.picswalls.com/wallpapers/2014/02/08/spring-wallpapers_03112196_25.jpg)');
    }
    else
      $('body').css('background-image','url(http://eco.holemasters-scotland.co.uk/images/background_main.jpg)');
   
  });
});
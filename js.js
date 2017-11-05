 $(document).ready(function() {

   var lat, lon, linkJ, temp, color, tempDis;
   var unitCount = 0;

   if (navigator.geolocation) {
     navigator.geolocation.getCurrentPosition(function(position) {
       lat = position.coords.latitude;
       lon = position.coords.longitude;
       linkJ = "https://fcc-weather-api.glitch.me/api/current?lat=" + lat + "&lon=" + lon;
       console.log(linkJ);

       $.getJSON(linkJ, function(value) {

         $("#weather-type").html("<h1 class='text-center'>" + value.weather[0].main + "</h1>");
         $("#tempture").html("<h1 class='text-center'>" + Math.round((value.main.temp * (9/5)) + 32) + " F&#176;</h1>");
         $("#city").html("<h1 class='text-center'>" + value.name + "</h1>");

         temp = value.main.temp;
         temp = (temp * 1.8) + 32;

         textColor();
         IconGen(value.weather[0].main);
       });

     });
   }

  $("#tempture").click(function(){

     if(unitCount%2==0){
       tempDis = temp;
       $("#tempture").html("<h1 class='text-center'>" + Math.round(tempDis) + " F&#176;</h1>");
       textColor();
     } else {
       tempDis = (temp-32)/1.8;
       $("#tempture").html("<h1 class='text-center'>" + Math.round(tempDis) + " C&#176;</h1>");
       textColor();
     }
     unitCount = unitCount + 1;
   });

   function textColor(){
     if(temp<60){

      color = "rgb(0,"+Math.round(temp)*3+",255)";
      $('body').css("background-color",color);

      if(Math.round(temp)*3>140){
        $('h1').css("color","black");
        $('button').css("color","black");
        $('#weather-icon').css("color","black");
      } else if(Math.round(temp)*3<140){
        $('h1').css("color","white");
        $('button').css("color","white");
        $('#weather-icon').css("color","white");
     };

    }else if(tem>60){

      color = "rgb(255,"+200-Math.round(temp)*2+","+200-Math.round(temp)*2+")";
      $('body').css("background-color",color);

      if(200-Math.round(temp)*2>70){
        $('h1').css("color","black");
        $('button').css("color","black");
        $('#weather-icon').css("color","black");
      } else if(200-Math.round(temp)*2<70){
        $('h1').css("color","white");
        $('button').css("color","white");
        $('#weather-icon').css("color","white");
      };
     };
   }

   function IconGen(desc) {
  var desc = desc.toLowerCase()
  switch (desc) {
    case 'drizzle':
      $("#weather-icon").html("<i class='fa fa-4x fa-tint' aria-hidden='true'></i>");
      break;
    case 'clouds':
      $("#weather-icon").html("<i class='fa fa-4x fa-cloud' aria-hidden='true'></i>");
      break;
    case 'rain':
      $("#weather-icon").html("<i class='fa fa-4x fa-tint' aria-hidden='true'></i>");
      break;
    case 'snow':
      $("#weather-icon").html("<i class='fa fa-4x fa-snowflake-o' aria-hidden='true'></i>");
      break;
    case 'clear':
      $("#weather-icon").html("<i class='fa fa-4x fa-sun-o' aria-hidden='true'></i>");
      break;
    case 'thunderstom':
      $("#weather-icon").html("<i class='fa fa-4x fa-bolt' aria-hidden='true'></i>");
      break;
    default:
      $("#weather-icon").html("<i class='fa fa-4x fa-cloud' aria-hidden='true'></i>");
  }
}
 });

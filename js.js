 $(document).ready(function() {

   var lat, lon, linkJ, temp, color;
   var unitCount = 0;
   var tempDis;

   if (navigator.geolocation) {
     navigator.geolocation.getCurrentPosition(function(position) {
       $("#data").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
       lat = position.coords.latitude;
       lon = position.coords.longitude;
       linkJ = "https://fcc-weather-api.glitch.me/api/current?lat=" + lat + "&lon=" + lon;
       console.log(linkJ);

       $.getJSON(linkJ, function(value) {

         $("#weather-type").html("<h1 class='text-center'>" + value.weather[0].main + "</h1");
         $("#tempture").html("<h1 class='text-center'>" + Math.round((value.main.temp * (9/5)) + 32) + " F&#176;</h1");
         $("#city").html("<h1 class='text-center'>" + value.name + "</h1");

         temp = value.main.temp;
         temp = (temp * 1.8) + 32;

         textColor();
       });

     });
   }

  $("#unit").click(function(){

     if(unitCount%2==0){
       tempDis = temp;
       $("#tempture").html("<h1 class='text-center'>" + Math.round(tempDis) + " F&#176;</h1");
       textColor();
     } else {
       tempDis = (temp-32)/1.8;
       $("#tempture").html("<h1 class='text-center'>" + Math.round(tempDis) + " C&#176;</h1");
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
      } else if(Math.round(temp)*3<140){
        $('h1').css("color","white");
        $('button').css("color","white");
     };

    }else if(tem>60){

      color = "rgb(255,"+200-Math.round(temp)*2+","+200-Math.round(temp)*2+")";
      $('body').css("background-color",color);

      if(200-Math.round(temp)*2>70){
        $('h1').css("color","black");
        $('button').css("color","black");
      } else if(200-Math.round(temp)*2<70){
        $('h1').css("color","white");
        $('button').css("color","white");
      };
     };
   }

 });

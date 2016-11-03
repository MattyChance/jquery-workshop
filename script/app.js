/* Write your code here! */
(function(){

  $.getJSON('https://api.wheretheiss.at/v1/satellites/25544')
    .then(function(issJSON) {
      var lat = issJSON.latitude;
      var lon = issJSON.longitude;
      console.log(lat);
      console.log(lon);
      var googleMap = 'https://maps.googleapis.com/maps/api/staticmap?size=400x300&markers=color:blue%7Clabel:S%7C' + lat + ',' + lon + '&maptype=satellite&key=AIzaSyBqaktgjuLztQHju4knT8svEPznNMAe_ec&center=' + lat + ',' + lon;
//console.log(res.results[0].geometry.location);
// $('h1').after('<p class="jsonLoc">You location is: ' + JSON.stringify(res.results[0].geometry.location) + '</p>');
// $('.jsonLoc').addClass('location');
   
  $('#iss-position').attr('src', googleMap);
  });
})();




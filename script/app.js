/* Write your code here! */
$.getJSON('https://maps.googleapis.com/maps/api/geocode/json?address=montreal')
.then(function(res) {
  console.log(res.results[0].geometry.location);
  $('h1').after('<p class="jsonLoc">You location is: ' + JSON.stringify(res.results[0].geometry.location) + '</p>');
  $('.jsonLoc').addClass('location');
});
//this is a climate countdown, showing the days remaining in the 12 year timeline

var countDownDate = new Date("Oct 1, 2030 12:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (86400000));

  document.getElementById("days").innerHTML = days;
}, 1000);

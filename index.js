//Countdown JS
var countDownDate = new Date("Dec 31, 2024 00:00:00").getTime();
var countDownDate2 = new Date("Dec 20, 2024 00:00:00").getTime();

var x = setInterval(function() {
  //For the today's section
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  
  document.getElementById("todays").innerHTML = days + `<span style="color:#DB4444; padding-left: 20px;">:</span>`;
  document.getElementById("tohours").innerHTML = hours + `<span style="color:#DB4444; padding-left: 20px;">:</span>`;
  document.getElementById("tominutes").innerHTML = minutes + `<span style="color:#DB4444; padding-left: 20px;">:</span>`;
  document.getElementById("toseconds").innerHTML = seconds;

  //For the categories banner section
  var now2 = new Date().getTime();
  var distance2 = countDownDate2 - now2;
  var days2 = Math.floor(distance2 / (1000 * 60 * 60 * 24));
  var hours2 = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes2 = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds2 = Math.floor((distance2 % (1000 * 60)) / 1000);

  
  document.getElementById("catdays").innerHTML = days2 + "<br/><span>Days</span>";
  document.getElementById("cathours").innerHTML = hours2 + "<br/><span>Hours</span>";
  document.getElementById("catminutes").innerHTML = minutes2 + "<br/><span>Minutes</span>";
  document.getElementById("catseconds").innerHTML = seconds2 + "<br/><span>Seconds</span>";
});

//Go back on top button 
let mybutton = document.getElementById("btn-gotop");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
}

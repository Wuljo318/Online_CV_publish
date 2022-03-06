var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navigation").style.top = "0";
  } else {
    document.getElementById("navigation").style.top = "-10%";
  }
  prevScrollpos = currentScrollPos;
} 

function myFunction() {
  var x = document.getElementById("popup_html");
  if (x.style.display === "none") {
    x.style.display = "block";
    x.style.visibility = "visible";
  } else {
    x.style.display = "none";
    x.style.visibility = "hidden"
  }
} 


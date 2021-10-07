// function getPixel() {
//   document.getElementById("drums").innerHTML = "YOU CLICKED ME!";
// }

var allLinks = document.getElementsByTagName('a');
for(var i = allLinks.length-1; i >=0  ; i--) {
	 (function () {
		var modal = allLinks[i].id + "_modal"
		allLinks[i].addEventListener("mouseenter", function() { 
			document.getElementById(modal).style.display = "block"; }, false)
		allLinks[i].addEventListener("mouseleave", function() { 
			document.getElementById(modal).style.display = "none"; }, false)
	}()); // immediate invocation
	}


function showPixelLowdah() {
  var pxl = "pixel" + Math.floor(Math.random() * 27)
  var x = document.getElementById(pxl);
  var audio = new Audio("./sounds/" + pxl + ".mp3");
  if (x.style.visibility = "hidden") {
    x.style.visibility = 'visible';
    audio.play();
  } else {
    showPixelLowdah();
  }
}

function showPixelYeah() {
  var pxl = "pixel" + (Math.floor(Math.random() * 38) + 28)
  var x = document.getElementById(pxl);
  var audio = new Audio("./sounds/" + pxl + ".mp3");
  if (x.style.visibility = 'hidden') {
    x.style.visibility = 'visible';
    audio.play();
  } else {
    showPixelYeah();
  }
}

function showPixelDrums() {
  var pxl = "pixel" + (Math.floor(Math.random() * 33) + 67)
  var x = document.getElementById(pxl);
  var audio = new Audio("./sounds/" + pxl + ".mp3");
  if (x.style.visibility = 'hidden') {
    x.style.visibility = 'visible';
    audio.play();
  } else {
    showPixelDrums();
  }
}

function playPixel(id) {
  var y = id;
  var audio = new Audio("./sounds/" + y + ".mp3");
  audio.play();
}

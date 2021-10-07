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

let haveIt = [];

function generateUniqueRandom(maxNr, minNr) {
    //Generate random number
    let random = (Math.floor(Math.random() * maxNr) + minNr).toFixed();

    //Coerce to number by boxing
    random = Number(random);

    if(!haveIt.includes(random)) {
        haveIt.push(random);
        return random;
    } else {
        if(haveIt.length < maxNr) {
          //Recursively generate number
         return  generateUniqueRandom(maxNr, minNr);
        } else {
          console.log('No more numbers available.')
          // return false;
        }
    }
}

let haveIt2 = [];
function generateUniqueRandom2(maxNr2, minNr2) {
    //Generate random number
    let random2 = (Math.floor(Math.random() * maxNr2) + minNr2).toFixed();

    //Coerce to number by boxing
    random2 = Number(random2);

    if(!haveIt2.includes(random2)) {
        haveIt2.push(random2);
        return random2;
    } else {
        if(haveIt2.length < maxNr2) {
          //Recursively generate number
         return  generateUniqueRandom2(maxNr2, minNr2);
        } else {
          console.log('No more numbers available.')
          // return false;
        }
    }
}

let haveIt3 = [];
function generateUniqueRandom3(maxNr3, minNr3) {
    //Generate random number
    let random3 = (Math.floor(Math.random() * maxNr3) + minNr3).toFixed();

    //Coerce to number by boxing
    random3 = Number(random3);

    if(!haveIt3.includes(random3)) {
        haveIt3.push(random3);
        return random3;
    } else {
        if(haveIt3.length < maxNr3) {
          //Recursively generate number
         return  generateUniqueRandom3(maxNr3, minNr3);
        } else {
          console.log('No more numbers available.')
          // return false;
        }
    }
}


function showPixelLowdah() {
	var pxl = "pixel" + generateUniqueRandom(27, 1)
	console.log(pxl)
  // var pxl = "pixel" + Math.floor(Math.random() * 27)
  var x = document.getElementById(pxl);
  var audio = new Audio("./sounds/" + pxl + ".mp3");
  if (x) {
    x.style.visibility = 'visible';
    audio.play();
  } else {
  	document.getElementById("button1").style.backgroundColor = "black";
    // showPixelLowdah();
  }
}

function showPixelYeah() {
	var pxl = "pixel" + generateUniqueRandom2(38, 28)
	console.log(pxl)
  // var pxl = "pixel" + (Math.floor(Math.random() * 38) + 28)
  var x = document.getElementById(pxl);
  var audio = new Audio("./sounds/" + pxl + ".mp3");
  if (x) {
    x.style.visibility = 'visible';
    audio.play();
  } else {
  	document.getElementById("button2").style.backgroundColor = "black";
    // showPixelYeah();
  }
}

function showPixelDrums() {
	var pxl = "pixel" + generateUniqueRandom3(35, 66)
	console.log(pxl)
  // var pxl = "pixel" + (Math.floor(Math.random() * 33) + 67)
  var x = document.getElementById(pxl);
  var audio = new Audio("./sounds/" + pxl + ".mp3");
  if (x) {
    x.style.visibility = 'visible';
    audio.play();
  } else {
  	document.getElementById("button3").style.backgroundColor = "black";
    // showPixelDrums();
  }
}

function playPixel(id) {
  var y = id;
  var audio = new Audio("./sounds/" + y + ".mp3");
  audio.play();
}

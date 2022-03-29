var Name = "Not known";
        if (navigator.appVersion.indexOf("Win") != -1) Name =
          "Windows OS";
        if (navigator.appVersion.indexOf("Mac") != -1) Name =
          "MacOS";
        if (navigator.appVersion.indexOf("X11") != -1) Name =
          "UNIX OS";
        if (navigator.appVersion.indexOf("Linux") != -1) Name =
          "Linux OS";

document.getElementById("details").textContent = Name;


const details = navigator.userAgent;

// Creating a regular expression containing some mobile devices keywords
// to search it in details string
const regexp = /android|iphone|kindle|ipad/i;

// Using test() method to search regexp in details it returns boolean value
const isMobileDevice = regexp.test(details);

if (isMobileDevice) {
    document.getElementById("device").textContent = "You are using a Mobile Device";
    document.getElementById("message").textContent = "Please double click to make the webpage full screen";
} else {
    document.getElementById("device").textContent = "You are using Desktop";
    document.getElementById("message").textContent = "Please press meta + shift + enter keys together.";
}

window.addEventListener("dblclick", function(event) {
  document.getElementById("message").textContent = "You double clicked. Please double-click again to exit fullscreen";
  // DOM element which needs to enter fullscreen mode
  var element = document.querySelector("#play-block");

  element.requestFullscreen()
  .then(function() {
  	document.getElementById("full-screen").textContent = "Element has entered fullscreen mode successfully"
  })
  .catch(function(error) {
  	// element could not enter fullscreen mode
  	// error message
  	console.log(error.message);
  });
}, false);

document.onkeydown = function (e) {
  if(e.keyCode == 13 && e.metaKey && e.shiftKey) {
    document.getElementById("message").textContent = "You pressed meta + shift + enter. Please press it again to exit fullscreen";
    // DOM element which needs to enter fullscreen mode
    var element = document.querySelector("#play-block");

    element.requestFullscreen()
    .then(function() {
    	document.getElementById("full-screen").textContent = "Element has entered fullscreen mode successfully"
    })
    .catch(function(error) {
    	// element could not enter fullscreen mode
    	// error message
    	console.log(error.message);
    });
  }
}

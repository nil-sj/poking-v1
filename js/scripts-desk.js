let keyCombination = "Windows + Shift + Enter";
if (navigator.appVersion.indexOf("Mac") != -1) keyCombination = "Cmd + Shift + Enter";

document.getElementById("message").innerHTML = "Press <span id='command'>" + keyCombination + "</span> again";


document.onkeydown = function (e) {
  if(e.keyCode == 13 && e.metaKey && e.shiftKey) {

    // DOM element which needs to enter fullscreen mode
    var element = document.querySelector("#play-block");

    element.requestFullscreen()
    .then(function() {
      document.getElementById("message").classList.add("move-up");
      document.getElementById("message").textContent = "Press any key to play | Press " + keyCombination + " to exit";
    })
    .catch(function(error) {
    	// element could not enter fullscreen mode
    	// error message
    	console.log(error.message);
    });
  }
}

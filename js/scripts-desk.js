let keyCombination = "Windows + Shift + Enter";
if (navigator.appVersion.indexOf("Mac") != -1) keyCombination = "Cmd + Shift + Enter";
document.getElementById("command").textContent = keyCombination;

document.onkeydown = function (e) {
  if(e.keyCode == 13 && e.metaKey && e.shiftKey) {

    // DOM element which needs to enter fullscreen mode
    var element = document.querySelector("#play-block");

    element.requestFullscreen()
    .then(function() {
      document.getElementById("message-box").classList.add("hide");
      document.getElementById("top-message").innerHTML = "Press any key to play" + "<br>" + "Press " + keyCombination + " to exit";
    })
    .catch(function(error) {
    	// element could not enter fullscreen mode
    	// error message
    	console.log(error.message);
    });
  }
}

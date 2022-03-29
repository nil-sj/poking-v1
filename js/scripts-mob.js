document.getElementById("message").textContent = "Please double click to start";

document.addEventListener("dblclick", function(event) {

  // DOM element which needs to enter fullscreen mode
  var element = document.querySelector("#play-block");

  element.requestFullscreen()
  .then(function() {
    document.getElementById("message").classList.add("move-up");
    document.getElementById("message").textContent = "Click anywhere to play | Double-click to exit";
  })
  .catch(function(error) {
  	// element could not enter fullscreen mode
  	// error message
  	console.log(error.message);
  });
}, false);

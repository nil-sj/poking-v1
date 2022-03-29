let keyCombination = "Windows + Shift + Enter";
if (navigator.appVersion.indexOf("Mac") != -1) keyCombination = "Cmd + Shift + Enter";

document.getElementById("message").innerHTML = "Press <span id='command'>" + keyCombination + "</span> again";


document.onkeydown = function (e) {
  if(e.keyCode == 13 && e.metaKey && e.shiftKey) {

    var element = document.querySelector("#play-block");

    element.requestFullscreen()
    .then(function() {
      document.getElementById("message").classList.add("move-up");
      document.getElementById("message").textContent = "Press any key to play | Press " + keyCombination + " to exit";

      //modify this block for keyboard entry
      document.querySelectorAll(".img-block").forEach((img) => {
          img.addEventListener("click", (event) => {
            const current = event.target.id;
            console.log(current);

            document.querySelectorAll(".img-block").forEach((div) => {
              if(div.id == current) {
                div.firstElementChild.classList.add("visible");
              } else {
                if (div.firstElementChild.classList.contains("visible")) {
                  div.firstElementChild.classList.remove("visible");
                }
              }
            });

          });
      });
      //end of modification

      document.onkeydown = function (ev) {
        if(ev.keyCode == 13 && ev.metaKey && ev.shiftKey) {
          document.exitFullscreen()
          .then(function() {
            window.location.href = "index.html";
          })
          .catch(function(error) {
            console.log(error.message);
          });
        }
      };
    })
    .catch(function(error) {
    	// element could not enter fullscreen mode
    	// error message
    	console.log(error.message);
    });
  }
}

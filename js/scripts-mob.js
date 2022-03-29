document.getElementById("message").textContent = "Please double click to start";

document.addEventListener("dblclick", function(event) {

  // DOM element which needs to enter fullscreen mode
  var element = document.querySelector("#play-block");

  element.requestFullscreen()
  .then(function() {
    document.getElementById("message").classList.add("move-up");
    document.getElementById("message").textContent = "Click anywhere to play | Double-click to exit";
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
    document.addEventListener("dblclick", function(ev) {
      document.exitFullscreen()
      .then(function() {
      	window.location.href = "index.html";
      })
      .catch(function(error) {
      	console.log(error.message);
      });
    });
  })
  .catch(function(error) {
  	// element could not enter fullscreen mode
  	// error message
  	console.log(error.message);
  });
}, false);

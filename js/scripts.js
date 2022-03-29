const details = navigator.userAgent;
const regexp = /android|iphone|kindle|ipad/i;
const isMobileDevice = regexp.test(details);

let keyCombination = "Win + Shift + Enter";
if (navigator.appVersion.indexOf("Mac") != -1) keyCombination = "Cmd + Shift + Enter";
document.querySelector(".command").textContent = keyCombination;

if (isMobileDevice) {
    document.getElementById("instruction").textContent = "instructions for mobile";
    document.querySelector(".bar").classList.add("hide");
    document.querySelector(".alt-way").classList.add("hide");
    document.querySelector(".command").classList.add("hide");

    document.querySelector(".btn").addEventListener("click", function(event) {
      window.location.href = "play-mob.html";
    });

    window.addEventListener("dblclick", function(event) {
      window.location.href = "play-mob.html";
    }, false);

} else {
    document.getElementById("instruction").textContent = "instructions for desktop";

    document.querySelector(".btn").addEventListener("click", function(event) {
      window.location.href = "play-desk.html";
    });

    document.onkeydown = function (e) {
      if(e.keyCode == 13 && e.metaKey && e.shiftKey) {
      window.location.href = "play-desk.html";
      }
    };

}

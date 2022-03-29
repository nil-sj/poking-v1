const details = navigator.userAgent;
const regexp = /android|iphone|kindle|ipad/i;
const isMobileDevice = regexp.test(details);

let keyCombination = "Win + Shift + Enter";
if (navigator.appVersion.indexOf("Mac") != -1) keyCombination = "Cmd + Shift + Enter";
document.querySelector(".command").textContent = keyCombination;

if (isMobileDevice) {
    document.getElementById("instruction").textContent = "Let your kiddo click on screen to discover special Cocomelon characters.";
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
    document.getElementById("instruction").textContent = "Let your kiddo press a random key on your keyboard and disover a special Cocomelon character. You can press " + keyCombination + " to get into or exit out of the fullscreen mode.";

    document.querySelector(".btn").addEventListener("click", function(event) {
      window.location.href = "play-desk.html";
    });

    document.onkeydown = function (e) {
      if(e.keyCode == 13 && e.metaKey && e.shiftKey) {
      window.location.href = "play-desk.html";
      }
    };

}

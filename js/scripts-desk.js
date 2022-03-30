const charArray = [ "yoyo", "coco", "jj", "tomtom", "ele", "teddy", "piggy", "monkey", "ducky", "bingo", "cody", "nina", "cece", "nico", "bella", "mousy"];

let keyCombination = "Windows + Shift + Enter";
if (navigator.appVersion.indexOf("Mac") != -1) keyCombination = "Cmd + Shift + Enter";

document.getElementById("message").innerHTML = "Press <span id='command'>" + keyCombination + "</span> again";


let prev = "";

document.onkeydown = function (e) {
  if(e.keyCode == 13 && e.metaKey && e.shiftKey) {

    var element = document.querySelector("#play-block");

    element.requestFullscreen()
    .then(function() {
      document.getElementById("message").classList.add("move-up");
      document.getElementById("message").textContent = "Press any key to play | Press " + keyCombination + " to exit";

      //modify this block for keyboard entry
      // document.querySelectorAll(".img-block").forEach((img) => {
      //     img.addEventListener("click", (event) => {
      //       let current = event.target.id;
      //       if (current == "") {
      //           current = event.target.parentElement.id;
      //       }
      //       if(current == prev) {
      //         //pick a random current
      //         current = charArray[Math.floor(Math.random() * charArray.length)];
      //       }
      //       //console.log(current);
      //       const currentAudioFile = "audio/" + current + ".mp3";
      //       const currentAudio = new Audio(currentAudioFile);
      //       currentAudio.play();
      //
      //       document.querySelectorAll(".img-block").forEach((div) => {
      //         if(div.id == current) {
      //           div.firstElementChild.classList.add("visible");
      //         } else {
      //           if (div.firstElementChild.classList.contains("visible")) {
      //             div.firstElementChild.classList.remove("visible");
      //           }
      //         }
      //       });
      //
      //     });
      // });
      //end of modification

      document.onkeydown = function (ev) {
        let current = "nono";
        if((ev.keyCode == 13 && ev.metaKey && ev.shiftKey) || (ev.keyCode == 27)) {
          document.exitFullscreen()
          .then(function() {
            window.location.href = "index.html";
          })
          .catch(function(error) {
            console.log(error.message);
          });
        } else if (ev.key == "1" || ev.key == "2" || ev.key == "3" ) {
            current = charArray[0];
        } else if (ev.key == "4" || ev.key == "5" || ev.key == "6" ) {
            current = charArray[1];
        } else if (ev.key == "7" || ev.key == "8" || ev.key == "9" ) {
            current = charArray[2];
        } else if (ev.key == "0" || ev.key == "a" || ev.key == "b" || ev.key == "A" || ev.key == "B" ) {
            current = charArray[3];
        } else if (ev.key == "c" || ev.key == "d" || ev.key == "e" || ev.key == "C" || ev.key == "D" || ev.key == "E") {
            current = charArray[4];
        } else if (ev.key == "f" || ev.key == "g" || ev.key == "h" || ev.key == "F" || ev.key == "G" || ev.key == "H") {
            current = charArray[5];
        } else if (ev.key == "i" || ev.key == "j" || ev.key == "k" || ev.key == "I" || ev.key == "J" || ev.key == "K") {
            current = charArray[6];
        } else if (ev.key == "l" || ev.key == "m" || ev.key == "n" || ev.key == "L" || ev.key == "M" || ev.key == "N") {
            current = charArray[7];
        } else if (ev.key == "o" || ev.key == "p" || ev.key == "q" || ev.key == "O" || ev.key == "P" || ev.key == "Q") {
            current = charArray[8];
        } else if (ev.key == "r" || ev.key == "s" || ev.key == "t" || ev.key == "R" || ev.key == "S" || ev.key == "T") {
            current = charArray[9];
        } else if (ev.key == "u" || ev.key == "v" || ev.key == "w" || ev.key == "U" || ev.key == "V" || ev.key == "W") {
            current = charArray[10];
        } else if (ev.key == "x" || ev.key == "y" || ev.key == "z" || ev.key == "X" || ev.key == "Y" || ev.key == "Z") {
            current = charArray[11];
        } else if (ev.keyCode == 188 || ev.keyCode == 190 || ev.keyCode == 191 ) {
            current = charArray[12];
        } else if (ev.keyCode == 186 || ev.keyCode == 222) {
            current = charArray[13];
        } else if (ev.keyCode == 219 || ev.keyCode == 221 || ev.keyCode == 220 ) {
            current = charArray[14];
        } else if (ev.keyCode == 109 || ev.keyCode == 187 || ev.keyCode == 189 || ev.keyCode == 8 ) {
            current = charArray[15];
        } else {
          current = "nono";
        }

        if(current == prev) {
          //pick a random current
          current = charArray[Math.floor(Math.random() * charArray.length)];
        }

        //play the current audio
        const currentAudioFile = "audio/" + current + ".mp3";
        const currentAudio = new Audio(currentAudioFile);
        currentAudio.play();

        document.querySelectorAll(".img-block").forEach((div) => {
          if(div.id == current) {
            div.firstElementChild.classList.add("visible");
          } else {
            if (div.firstElementChild.classList.contains("visible")) {
              div.firstElementChild.classList.remove("visible");
            }
          }
        });

      };
    })
    .catch(function(error) {
    	// element could not enter fullscreen mode
    	// error message
    	console.log(error.message);
    });
  }
}

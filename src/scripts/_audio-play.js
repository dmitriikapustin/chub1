$(document).ready(function () {
    const play_btn = document.getElementById("play-btn")
    const pause_btn = document.getElementById("pause-btn")
    // let play_boolean = false;
    // // const audio = new Audio('./audio/theme-2.wav');
    const audio = document.getElementById("audio")
    // audio.src = './audio/theme-2.wav';


    // const divAudio = document.getElementById("play-btn-div")
    // const audio = document.createElement("audio")
    // audio.src = "./static/theme-2.mp3"
    // divAudio.appendChild(audio);



    if (play_btn) {
        play_btn.addEventListener("click", function () {

            play_btn.style.display = "none";
            pause_btn.style.display = "block";
            audio.play();
            // play_boolean = true;
    
        })
    }

    if (pause_btn) {
        pause_btn.addEventListener("click", function () {

            play_btn.style.display = "block";
            pause_btn.style.display = "none";
            // play_boolean = false; 
            audio.pause();
    
        })
    }
})



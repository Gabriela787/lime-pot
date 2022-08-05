var video = document.getElementById("video_p");
var subir = document.getElementById("subir");
var bajar = document.getElementById("bajar");
var adelantar = document.getElementById("adelantar");
var atrasar = document.getElementById("atrasar");
var play = document.getElementById("play");

    play.addEventListener("click", () => {
        if (video.paused == true) {
            video.play();
        }
        else {
            video.pause();
        }
    })

    subir.addEventListener("click", () => {
        video.volume += 0.5;
    })
    bajar.addEventListener("click", () => {
        video.volume -= 0.5;
    })

    function adelantar_video(){
        video.currentTime += 5
    }
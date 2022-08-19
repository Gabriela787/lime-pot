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

    adelantar.addEventListener("click", () => {
        console.log (video.currentTime)
        video.controls=true;
        video.currentTime +=10
        video.controls=true; 
     })
    
    atrasar.addEventListener("click", () => {
        console.log (video.currentTime)
        video.controls=true ;
        video.currentTime -=10
        video.controls=true ;
    })

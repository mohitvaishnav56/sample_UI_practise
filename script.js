var playPauseBtn = document.querySelector(".play_pause_btn");
var video = document.querySelector(".video_container video");

playPauseBtn.addEventListener("click", function () {
    if (video.paused) {
        video.play();
        playPauseBtn.innerHTML = '<i class="ri-pause-line"></i>';
        
    } else {
        video.pause();
        playPauseBtn.innerHTML = '<i class="ri-play-line"></i>';
        playPauseBtn.style.paddingLeft = "0px";
    }
});
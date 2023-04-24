/* Get elements */

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

/* Build functions */

function togglePlay() {
    //if video is paused -> play it, else (video is playing) -> pause it when toggle fucntion is called
    if(video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

/* Hook up event listeners */

//when click on video display, run togglePlay function
video.addEventListener('click', togglePlay);

//when click on play/pause button, run togglePlay function
toggle.addEventListener('click', togglePlay)
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

function updateButton() {
    //note: this is bound to the video itself
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
}

function skip() {
    console.log(this.dataset.skip);
    // ^^^ type is STRING, use parseFloat() to convert it into NUMBER
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
    video[this.name] = this.value;
    // console.log(this.name)
    // console.log(this.value)
}

/* Hook up event listeners */

//when click on video display, run togglePlay function
video.addEventListener('click', togglePlay);
//change button text when video is playing
video.addEventListener('play', updateButton);
//change button text when video is paused
video.addEventListener('pause', updateButton);



//when click on play/pause button, run togglePlay function
toggle.addEventListener('click', togglePlay)

//when click on skip buttons, run skip function
skipButtons.forEach(button => button.addEventListener('click', skip))

//when change the range, run handleRangeUpdate function
//additional mousemove listner allows for real time update of this.value
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate))
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate))
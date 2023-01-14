const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timpestamp = document.getElementById('timpestamp');


// Play & pause
function toggleVideoStatus() {
    video.paused = video.paused ? video.play() : video.pause();
}

// Update play/pause icon
function updatePlayIcon() {
    play.innerText = video.paused ? 'play' : 'pause';
}

// Update progress & timestamp
function updateProgress() {
    progress.value = (video.currentTime / video.duration) * 100;

    // Get minutes
    let mins = Math.floor(video.currentTime / 60);
    if (mins < 10) {
        mins = '0' + String(mins)
    }

    // Get seconds
    let secs = Math.floor(video.currentTime % 60);
    if (secs < 10) {
        secs = '0' + String(secs)
    }

    timestamp.innerHTML = `${mins}:${secs}`
}

// Set video time to progress
function setVideoProgress() {
    video.currentTime = (+progress.value * video.duration) / 100;
}

// Stop video
function stopVideo() {
    video.currentTime = 0;
    video.pause();
}


// Event listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);
stop.addEventListener('click', stopVideo);
progress.addEventListener('change', setVideoProgress);


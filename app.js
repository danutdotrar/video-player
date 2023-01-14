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
    return true;
}

// Set video time to progress
function setVideoProgress() {
    return true;
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


const video = document.getElementById('video');
const playPauseBtn = document.getElementById('play-pause');
const progress = document.getElementById('progress');
const time = document.getElementById('time');
const volume = document.getElementById('volume');
const fullscreen = document.getElementById('fullscreen');

function togglePlayPause() {
    if (video.paused) {
        video.play();
        playPauseBtn.classList.remove('play');
        playPauseBtn.classList.add('pause');
    } else {
        video.pause();
        playPauseBtn.classList.remove('pause');
        playPauseBtn.classList.add('play');
    }
}

function updateProgress() {
    progress.value = (video.currentTime / video.duration) * 100 || 0;
    const currentMinutes = Math.floor(video.currentTime / 60);
    const currentSeconds = Math.floor(video.currentTime % 60).toString().padStart(2, '0');
    const durationMinutes = Math.floor(video.duration / 60) || 0;
    const durationSeconds = Math.floor(video.duration % 60).toString().padStart(2, '0') || '00';
    time.textContent = `${currentMinutes}:${currentSeconds} / ${durationMinutes}:${durationSeconds}`;
}

function setProgress(e) {
    video.currentTime = (e.target.value / 100) * video.duration;
}

function setVolume(e) {
    video.volume = e.target.value;
}

function toggleFullscreen() {
    if (!document.fullscreenElement) {
        video.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}

// Event Listeners
playPauseBtn.addEventListener('click', togglePlayPause);
video.addEventListener('timeupdate', updateProgress);
progress.addEventListener('input', setProgress);
volume.addEventListener('input', setVolume);
fullscreen.addEventListener('click', toggleFullscreen);

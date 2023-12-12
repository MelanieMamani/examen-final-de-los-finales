var audio = document.getElementById('audio');
var playPauseBtn = document.getElementById('playPauseBtn');
var progressBar = document.getElementById('progressBar');
var currentTimeElement = document.getElementById('currentTime');
var totalTimeElement = document.getElementById('totalTime');
var albumCover = document.getElementById('albumCover');

function togglePlayPause() {
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = '🐋';
        albumCover.style.animation = 'rotation 5s infinite linear';
    } else {
        audio.pause();
        playPauseBtn.textContent = '🐳';
        albumCover.style.animation = 'none';
    }
}

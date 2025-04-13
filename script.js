// Simulate a music player
const playButton = document.querySelectorAll('.player-control-icon')[2]; // Play/pause button
const progressBar = document.querySelector('.progress-bar');
const currTime = document.querySelector('.curr-time');
const totTime = document.querySelector('.tot-time');

let isPlaying = false;
let currentProgress = 0;
let duration = 213; // total seconds (3:33)
let interval = null;

// Format time in mm:ss
function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? '0' + sec : sec}`;
}

// Toggle play/pause simulation
function togglePlayPause() {
    if (!isPlaying) {
        playButton.style.opacity = 1;
        isPlaying = true;
        interval = setInterval(() => {
            if (currentProgress < duration) {
                currentProgress++;
                currTime.textContent = formatTime(currentProgress);
                progressBar.value = (currentProgress / duration) * 100;
            } else {
                clearInterval(interval);
                isPlaying = false;
            }
        }, 1000);
    } else {
        playButton.style.opacity = 0.7;
        isPlaying = false;
        clearInterval(interval);
    }
}

playButton.addEventListener('click', togglePlayPause);

// Seek manually using the progress bar
progressBar.addEventListener('input', () => {
    currentProgress = (progressBar.value / 100) * duration;
    currTime.textContent = formatTime(currentProgress);
});

// Add hover effect on cards (optional enhancement)
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.backgroundColor = '#333';
    });
    card.addEventListener('mouseleave', () => {
        card.style.backgroundColor = '#232323';
    });
});

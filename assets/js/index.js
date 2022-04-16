const video = document.querySelector('.content video');
const cta = document.querySelector('.cta');
const progress = document.querySelector('.progress');
const playIcon = document.querySelector('.play-icon');
const pauseIcon = document.querySelector('.pause-icon');


setInterval(() => {
    if (video.currentTime > 5) {
        cta.classList.remove('hidden');
    };
    progress.style.width = `${video.currentTime / video.duration * 100}%`;

}, 1000);

video.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        displayIcon(playIcon, pauseIcon)
    } else {
        video.pause();
        displayIcon(pauseIcon, playIcon)
    };
});

function displayIcon(icon, other = null) {
    icon.classList.remove('hidden');
    if (other) other.classList.add('hidden')
    setTimeout(() => {
        icon.classList.add('hidden');
    }, 800)
};
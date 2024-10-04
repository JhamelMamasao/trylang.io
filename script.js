document.getElementById('envelope').addEventListener('click', function() {
   this.classList.toggle('open');
});

const playPauseBtn = document.getElementById('playPauseBtn');
const backgroundMusic = document.getElementById('backgroundMusic');

playPauseBtn.addEventListener('click', function() {
   if (backgroundMusic.paused) {
      backgroundMusic.play();
      playPauseBtn.textContent = 'Pause';
   } else {
      backgroundMusic.pause();
      playPauseBtn.textContent = 'Play';
   }
});

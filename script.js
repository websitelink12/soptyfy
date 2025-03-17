const audio = document.getElementById("audio");
const playButton = document.getElementById("play");

playButton.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playButton.textContent = "||";
    } else {
        audio.pause();
        playButton.textContent = "▶";
    }
});

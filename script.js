document.getElementById("play-now-btn").addEventListener("click", function () {
    const gamesSection = document.getElementById("games");
    gamesSection.scrollIntoView({ behavior: "smooth" });
});


  document.addEventListener('DOMContentLoaded', (event) => {
    var audio = document.getElementById('background-music');
    audio.play();
    audio.loop = true; // Loop the audio
  });




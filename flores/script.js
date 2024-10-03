document.addEventListener("DOMContentLoaded", function() {
    var audio = document.getElementById("background-music");
    var playButton = document.getElementById("startMusic");
    var overlay = document.getElementsByClassName("overlay")[0]; // Pega o primeiro elemento com essa classe

    // Adiciona evento de clique ao botão
    playButton.addEventListener("click", function() {
        // Verificar se o áudio está pausado
        if (audio.paused) {
            // Se estiver pausado, reproduzir o áudio e mostrar a overlay
            audio.play();
            overlay.style.display = "block"; // Mostra a overlay
            playButton.textContent = "Nossa música aff.."; // Altera o texto do botão
        } else {
            // Se estiver tocando, pausar o áudio e ocultar a overlay
            audio.pause();
            overlay.style.display = "none";
            playButton.textContent = "Toque Aqui!!"; // Altera o texto do botão
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    var playButton = document.getElementById("btn_s");

    // Adicionar evento de clique ao botão "Sim"
    playButton.addEventListener("click", function() {
        setTimeout(function() {
            window.location.href = "flores/flores.html"; // Redireciona para a página das flores
        }, 2000); // Tempo de 2 segundos antes do redirecionamento (ajuste conforme necessário)
    });

    function moverBotao() {
        console.log("Botão -Não clicado");
        var btn = this;
        var offsetX = Math.random() * 200 - 100; 
        var offsetY = Math.random() * 500 - 250; 
        btn.style.transition = 'transform 0.2s'; // Aplica uma transição suave na propriedade 'transform'
        btn.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    }

    // Adicionar evento de clique ao botão "Não"
    var btnN = document.getElementById('btn_n');
    btnN.addEventListener('click', moverBotao);

     // Adicionar evento de clique ao coração para ocultá-lo
});
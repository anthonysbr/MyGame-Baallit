window.onload = function () {
    var game = new Game ();
    document.getElementById("start-button").onclick = function () {
        game.startGame();
        document.getElementById("start-button").style.display="none";
        document.getElementById("animation").style.display="none";
        

    };
}
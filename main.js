"use strict";

const main = () => {
    const buildDom = (html) => {
        const main = document.querySelector("main");
        main.innerHTML = html
    };

    const buildSplashScreen = () =>{
        buildDom(`
            <section class="splash-screen">
                <h1>Bascket Carnival Simulator</h1>
                <h2>Instrucciones de Juego</h2>
                <p>Mover de izquierda a derecha y viceverza, la canasta y acumular el mayor numero de puntos posibles<br>
                , tendras 60 segundos para lograrlo Buena Suerte!
                </p>
                <button id = "game"> Start Game</button>
            </section>
        `);
        const startButton = document.querySelector("button");
        startButton.addEventListener("click",buildGameScreen)
    };

    const buildGameScreen = () => {
        buildDom(`
            <p class= "pointer"> Canastas : </p>
            
            <section class ="game-screen">
                <canvas id = "canvas"></canvas>
                
            </section>
            <p class= "pointerB"> Current Time </p>
            
        `);

        //var audio = new Audio("./music/Lupus Nocte - Sunset Dew.mp3")
        //audio.play()
        
        const width = document.querySelector(".game-screen").offsetWidth;
        const height = document.querySelector(".game-screen").offsetHeight;

        const canvasElement = document.querySelector("canvas");
        canvasElement.setAttribute("width",width);
        canvasElement.setAttribute("height",height);

        const game = new Game(canvasElement);
        game.gameOverCallback(buildGameOver);

        game.startLoop()

        const setPlayerDirection = (event) => {
            switch (event.keyCode) {
                case 37: game.player.moveLeft(); break;
                case 39: game.player.moveRight(); break;
            }
            
        };
        document.addEventListener("keydown", setPlayerDirection);

    };

    const buildGameOver = () => {
        buildDom(`
            <section class="game-over">
                <h1>TIME UP</h1>
                <button id = "game"> TRY AGAIN</button>
               
            </section>
            
        `)
    const restartButton = document.querySelector("button");
    restartButton.addEventListener("click",buildGameScreen)
     
    };

    buildSplashScreen();
}

window.addEventListener("load", main);




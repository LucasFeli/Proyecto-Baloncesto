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
                <button>Start Game</button>
            </section>
        `);
        const startButton = document.querySelector("button");
        startButton.addEventListener("click",buildGameScreen)
    };

    const buildGameScreen = () => {
        buildDom(`
            <section class ="game-screen">
                <canvas></canvas>
            </section>
        `);

        const width = document.querySelector("game-screen").offsetWidth;
        const height = document.querySelector("game-screen").offsetHeight;

        const canvasElement = document.querySelector("canvas");
        canvasElement.setAttribute("width",width);
        canvasElement.setAttribute("height",height);

        const game = new Gamepad(canvasElement);
        game.gameOverCallback(buildGameOver);

        game.startLoop()

        const setPlayerDirection = (event) => {
            switch (event.keyCode) {
                case 37: basket.moveLeft();  console.log('left',  basket); break;
                case 39: basket.moveRight(); console.log('right', basket); break;
              }
        };
        document.addEventListener("keydown", setPlayerDirection);

    };

    const buildGameOver = () => {
        buildDom(`
            <section class="game-over">
                <h1>GAME OVER</h1>
                <button>TRY AGAIN</button>
            </section>
        `)
    const restartButton = document.querySelector("button");
    restartButton.addEventListener("click",buildGameScreen)
     
    };

    buildSplashScreen();
}

window.addEventListener("load", main);




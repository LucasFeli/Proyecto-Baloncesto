"use strict";

const main = () => {
    const buildDom = (html) => {
        const main = document.querySelector("main");
        main.innerHTML = html
    };

    const buildSplashScreen = () =>{
        buildDom(`
            <section class="splash-screen">
                <h1>Basketball Carnival Simulator</h1>
                <h2>Instrucciones de Juego</h2>
                <p>Mover de izquierda a derecha y viceverza, la canasta y acumular el mayor numero de puntos posibles<br>
                , tendras 60 segundos para lograrlo Buena Suerte!
                </p>
                <label>Ingresa tu nombre:
              <input type="text" id="name">
            </label>
                <button id = "game"> Start Game</button>
            </section>
        `);
        const nameInput = document.getElementById("name");
        const startButton = document.querySelector("button");
        startButton.addEventListener("click", () => {
        let name = nameInput.value;
        buildGameScreen(name);
    });
    };

    const buildGameScreen = (name) => {
        buildDom(`
            <p class= "pointer"> Canastas : </p>
            
            <section class ="game-screen">
            <div id = "display">
                <p>Player's name: ${name}</p>
                <p>Score: <span id="score"></span></p>
            </div>
                <canvas id = "canvas"></canvas>
            </section>
            <p class= "pointerB">Canastas :</p>

        `);

        //var audio = new Audio("./music/Lupus Nocte - Sunset Dew.mp3")
        //audio.play()
        
        const width = document.querySelector(".game-screen").offsetWidth;
        const height = document.querySelector(".game-screen").offsetHeight;

        const canvasElement = document.querySelector("canvas");
        canvasElement.setAttribute("width",width);
        canvasElement.setAttribute("height",height);

        let scoreEle = document.querySelector('.pointer');

        const game = new Game(canvasElement, name, scoreEle);
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

    const setScore = (playerName, newScore) => {
        
        const topScoresStr = localStorage.getItem('topScores');
        
        
        let topScoresArr = [];
       
        if(topScoresStr) topScoresArr = JSON.parse(topScoresStr);
    
        
        const newScoreObj = { name: playerName, score: newScore };
        topScoresArr.push(newScoreObj);

        console.log(newScoreObj)
       
        const updatedScoresStr = JSON.stringify(topScoresArr);
       
        localStorage.setItem('topScores', updatedScoresStr);
    
       
        return topScoresArr;

        
      }
      
      
  

    const buildGameOver = (name,score) => {
        // recoger el array de scores
        const scores = setScore(name, score);
        // ordenar los scores en orden ascendiente
        let orderedScores = [...scores].sort((a, b) => {
        return b.score - a.score;
    })

    console.log(orderedScores)
    // para cada objeto score dentro de ese array, devolver un elemento <li> (y pasar scoreElements dentro de buildDom())
        const scoreElements = orderedScores.reduce((acc, scoreObj) => {
        return `${acc} <li>${scoreObj.name}: ${scoreObj.score}</li>`;
        
    }, '')

        buildDom(`
            <section class="game-over">
                <h1>TIME UP</h1>
                <h3>Score: ${score} seconds for ${name}</h3>
                <button id = "game"> TRY AGAIN</button>
                <ul>${scoreElements}</ul>
            </section>
            
        `)
    const restartButton = document.querySelector("button");
    restartButton.addEventListener("click", () => buildSplashScreen(name));
  };

    buildSplashScreen();
}

window.addEventListener("load", main);




// Pantalla Principal
"use-strict";

const main = () => {
    const dom = (html) =>{
        const main = document.querySelector("main");
        main.innerHTML = hmtl;
    };
    const pantallaIncio = ()=>{
        dom(`
            <section class="pnatalla-inicio">
                <h1>Carnival Basketball Simulator</h1>
                <button>Start Game</button>
            
            </section>
        `);
        const startGame = document.querySelector("button");
        startGame.addEventListener("click", pantallaIncio);
    };

    const pantallaJuego = ()=> {
        dom(`
            <secttion class="pantalla-juego">
                <canvas></canvas>
            </secttion>
        `);

        
    }
}
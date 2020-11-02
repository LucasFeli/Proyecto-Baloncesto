"use strict";

"use strict";

class Game {
    constructor(canvas){
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.player;
        this.balls = [];
        this.isGameOver = false;
    };

    startLoop(){
        this.player = new Player(this.canvas, 3);

        const loop = () => {
            if(Math.random() > 0.95){
                const x = Math.random() * this.canvas.width;
                this.balls.push(new Balls(this.canvas.x))
            };

            this.checkGoingIn()
            this.updateCanvas()
            this.clearCanvas()
            this.drawCanvas();
            if(!this.isGameOver){
                window.requestAnimationFrame(loop)
            }
        };
        window.requestAnimationFrame(loop)
    };

    updateCanvas(){
        this.player.update();
        this.balls.forEach((ball) =>{
            ball.update();
        });
    }

    clearCanvas(){
        this.ctx.clearRect(0,0, this.canvas.width, this.canvas.heigth);
    }

    drawCanvas(){
        his.player.update();
        this.balls.forEach((ball) =>{
            ball.update();
        });
    }
    
    checkAllPoints(){
        this.player.checkScreen();
        this.balls.forEach((balls,index)=>{
            this.player.getPoints()

        })
    }
}
"use strict";

class Game {
    constructor(canvas) {
      this.canvas = canvas;
      this.ctx = this.canvas.getContext("2d");
      this.player;
      this.balls = [];
      this.isGameOver = false;
      this.intervalId = null
      this.time = 600;
    }
  
    chronoTime(){
      const timer = document.querySelector(".pointer")
      this.intervalId = setInterval( () => {
       this.time--
       timer.innerHTML = "Currennt time <br>" + this.time
       if(this.time === 0) {
         clearInterval(this.inervalId)
         this.isGameOver = true
         this.onGameOver();
       }
     }, 3000) 
    }

    startLoop() {
      this.player = new Player(this.canvas, 3);
      
  
      const loop = () => {
        if (Math.random() > 0.97) {
          const y = Math.random() * this.canvas.height;
          this.balls.push(new Balls(this.canvas, y));
        }
        
        this.chronoTime()
        this.checkAllCollisions();
        this.updateCanvas();
        this.clearCanvas();
        this.drawCanvas();
        if (!this.isGameOver) {
          window.requestAnimationFrame(loop);
        }
      };
  
      window.requestAnimationFrame(loop);
    }
  
    updateCanvas() {
      this.player.update();
      this.balls.forEach((ball) => {
        ball.update();
      });
    }
  
    clearCanvas() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  
    drawCanvas() {
      this.player.draw();
      this.balls.forEach((ball) => {
        ball.draw();
      });
    }
  
    checkAllCollisions() {
      this.player.checkScreen();
      this.balls.forEach((ball, index) => {
        if (this.player.checkCollisionBalls(ball)) {
          this.player.addPoints();
          this.balls.splice(index, 1);
          if (this.player.lives === 0) {
            //this.isGameOver = true;
           // this.onGameOver();
          }
        }
      });
    }
  
    gameOverCallback(callback) {
      this.onGameOver = callback;
    }
  }
  
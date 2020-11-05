"use strict";

class Player {
    constructor(canvas, points) {
      this.size = 40;
      this.canvas = canvas;
      this.ctx = this.canvas.getContext("2d");
      this.x = this.canvas.height /2;
      this.y =  this.canvas.height -30 //10 + this.size / 2;
      this.speed = 5;
      this.direction = 0;
      this.points = points;
      
      
    }
  
    update() {
      this.x = this.x + this.direction * this.speed;
    }
  
    draw() {  //Cambiar por imagen
      this.ctx.fillStyle = "green";
      this.ctx.fillRect(
        this.x - this.size / 2,
        this.y - this.size / 2,
        this.size,
        this.size
      );
    }
  
    setDirection(direction) {
      this.direction = direction;
    }

    moveLeft() {
        this.x += 65;
      }
      moveRight() {
        this.x += 65;
    }

    checkScreen() {
      if (this.x - this.size / 2 <= 0) {
        this.direction = 1;
      } else if (this.x + this.size / 2 >= this.canvas.height) {
        this.direction = -1;
      }
    }
  
    checkCollisionBalls(ball) {
      const collideRight = this.x + this.size / 2 > ball.x - ball.size / 2;
      const collideLeft = this.x - this.size / 2 < ball.x + ball.size / 2;
      const collideTop = this.y + this.size / 2 > ball.y - ball.size / 2;
      const collideBottom = this.y - this.size / 2 < ball.y + ball.size / 2;
  
      if (collideRight && collideLeft && collideTop && collideBottom) {
        return true;
      }
       return false;


    }
   //Points
   addPoints() {
      this.points ++;
      document.querySelector(".pointer").innerHTML = "Vidas: <b>" + this.points;
      
    }
    /*
    cronoTime(){
        this.time --
        document.querySelector(".pointer").innerHTML = "Time: <b>" + this.time;
        setInterval( ()=>{this.time--}, 1000);
        console.log(this.time)
    }
    */
    
   
}
  
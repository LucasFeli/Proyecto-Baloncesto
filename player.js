"use strict";

class Player {
    constructor(canvas, points) {
      this.size = 180;
      this.canvas = canvas;
      this.ctx = this.canvas.getContext("2d");
      this.x = this.canvas.height -100;
      this.y =  this.canvas.height -90 //10 + this.size / 2;
      this.speed = 0;
      this.direction = 0;
      this.points = points;
      this.image = "./images/Basketball-Net-PNG-High-Quality-Image.png"
      
    }
  
    update() {
      this.x = this.x + this.direction * this.speed;
    }
  
    draw() {  

      let canasta = new Image();
      canasta.src = this.image;
      this.ctx.drawImage(canasta,
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
      this.x -= 20;
      if(this.x > this.canvas.width){
        this.x = 20
      }
    }
      
      moveRight() {
        this.x += 20;
      }
      

    checkScreen() {
     if (this.x - this.size / 2 <= -700) {
       this.direction = -1;
     } else if (this.x + this.size / 2 >= this.canvas.width -100) {
        this.direction = -1;
        console.log(this.x)
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
      document.querySelector(".pointer").innerText = `Canastas : ${this.points}`;
      
    }
    
    
   
}
  
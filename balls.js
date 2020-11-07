"use strict";

class Balls {
    constructor(canvas, x) {
        this.size = 70;
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.x = x;
        this.y = 10;
        this.speed = 5;
        this.direction = -1;
        this.image = "./images/58b4414eb0a84.image.png"
      }
    
      update() {
        this.y = this.y - this.direction * this.speed;
      }

    
    
      draw() {
        let balon = new Image();
        balon.src = this.image;
        this.ctx.drawImage(balon,this.x, this.y + this.size/2 , this.size, this.size);
      }
    
      setDirection(direction) {
        this.direction = direction;
      }
    
  
}
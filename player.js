"use strict";

class Player {
    constructor(canvas,lives) {
      this.x = 290;
      this.y = 450;
      this.canvas = canvas
      this.ctx = this.canvas.getContext("2d");
      
    }
   
    moveLeft() {
      this.x -= 25;
    }
    moveRight() {
      this.x += 25;
    }
    draw() {
        const img = new Image();
        img.addEventListener('load', () => {
        this.img = img;
        this.draw();
      });
      img.src = "./images/Basketball-Net-PNG-High-Quality-Image.png";
      ctx.drawImage(this.img, this.x, this.y, 150, 150);
    }
  
    
  
  


}
  
  
  
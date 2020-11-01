"use strict";

const canvas = document.getElementById("bascket");
const ctx = canvas.getContext("2d");


class Basket {
    constructor() {
      this.x = 290;
      this.y = 450;
      
      const img = new Image();
      img.addEventListener('load', () => {
        this.img = img;
        this.draw();
      });
      img.src = "./images/Basketball-Net-PNG-High-Quality-Image.png";
    }
   
    moveLeft() {
      this.x -= 25;
    }
    moveRight() {
      this.x += 25;
    }
    draw() {
      ctx.drawImage(this.img, this.x, this.y, 150, 150);
    }
  }
  
  const basket = new Basket();
  
  document.addEventListener('keydown', e => {
    switch (e.keyCode) {
      case 37: basket.moveLeft();  console.log('left',  basket); break;
      case 39: basket.moveRight(); console.log('right', basket); break;
    }
    
  })
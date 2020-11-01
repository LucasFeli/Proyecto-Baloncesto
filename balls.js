"use strict";

const canvas = document.getElementById("bascket");
const ctx = canvas.getContext("2d");

class Balls {
    constructor() {
      this.x = 290;
      this.y = 450;
      
      const img = new Image();
      img.addEventListener('load', () => {
        this.img = img;
        this.draw();
      });
      img.src = "./images/58b4414eb0a84.image.png";
    }
   
     draw() {
      ctx.drawImage(this.img, this.x, this.y, 98, 85);
    }
  }
  
  const ball = new Balls();
  
  
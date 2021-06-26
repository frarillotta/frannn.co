export const sea = {
    setup: function setup (p5, canvasParentRef) {
      p5.createCanvas(canvasParentRef.clientWidth, 500, p5.WEBGL).parent(canvasParentRef);
    },
    windowResized: function windowResized (p5) {
      p5.resizeCanvas(p5["canvas"].parentElement.clientWidth, 500);
    },
    draw: function draw (p5) {
      p5.background(1050);
      p5.strokeWeight(3);

      p5.translate(800, 200, -90);
      
      p5.rotateY(-90);
    
      for (let i = 0; i < 15; i++) {
          p5.push();
        for (let j = 0; j < 15; j++) {
          if (j < i) continue;
          p5.push();
          p5.translate(i * 75, 0, j * 75);
          p5.box(70, Math.sin(p5.frameCount * 0.02 + j*0.5 + i*0.5)  * 60 + 90, 70);
          p5.pop();
        }
        p5.pop();
    
      }
    }
  }
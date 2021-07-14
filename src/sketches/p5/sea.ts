import type p5 from "p5"; 

export const sea = (p5: p5) => {

  const {windowWidth, windowHeight} = p5;

  p5.setup = () => {
    p5.createCanvas(windowWidth, windowHeight, p5.WEBGL);
  }

  p5.windowResized = () => {
    p5.resizeCanvas(p5["canvas"].parentElement.clientWidth, windowHeight);
  }
  
  p5.draw = () => {
    p5.background(255);
    p5.strokeWeight(3);

    p5.translate(800, 200, 400);
    
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
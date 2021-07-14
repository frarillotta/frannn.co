import type p5 from 'p5';

export const disruption = (p5: p5) => {
    let circles = [];   
    
    p5.setup = () => {
        p5.createCanvas(p5.windowWidth, p5.windowHeight);
        for (let radius = 50; radius < 500; radius += 100) {
            circles.push(new Circle(radius))
          }
        p5.strokeWeight(7);
    }

    p5.windowResized = () => {
        p5.resizeCanvas(p5["canvas"].parentElement.clientWidth, p5.windowHeight);
    }

    p5.draw = () => {

        p5.translate(p5.width / 2, p5.height / 2)
        p5.background(255);
  
        circles.forEach((circle) => circle.show());
    
    }

    class Circle {
        radius: number;
        step: number;
        coords: {x: number, y: number}[];
  
        constructor(radius) {
          
          this.radius = radius;
          this.step = p5.PI/(radius / 5);
          this.coords = this.calculateCoords();
      
        }
        
        calculateCoords(): {x: number, y: number}[] {
          
            const coords = []
          
            for (let angle = 0; angle < p5.PI * 2; angle += this.step) {
      
              const x = this.radius * p5.sin(angle);
      
              const y = this.radius * p5.cos(angle);
              
              coords.push({x: x, y: y})
              
            }
          
            return coords;
        }
        
        show() {

            this.coords.forEach(({x, y})=>{
                p5.point(x, y + p5.noise(y, -y)*p5.frameCount/2);
            })
            
        }
        
    }
}

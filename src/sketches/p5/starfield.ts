import type p5 from 'p5';

export const starfield = (p5: p5) => {
    let stars = new Array(800);
        
    p5.setup = () => {
        p5.createCanvas(p5.windowWidth, p5.windowHeight);
        p5.stroke(0)
        for (let i = 0; i < stars.length; i++) {
            
            stars[i] = new Star();
            
        }
    }

    p5.windowResized = () => {
        p5.resizeCanvas(p5["canvas"].parentElement.clientWidth, p5.windowHeight);
    }

    p5.draw = () => {
        p5.background(255);
        p5.translate (p5.width / 2, p5.height/ 2);
        for (let i = 0; i < stars.length; i++) {
            
            stars[i].update();
            stars[i].show();
            
        }
    
    }

    class Star {
        x: number;
        y: number;
        z: number;

        constructor() {
            
            this.x = p5.random(-p5.width, p5.width);
            this.y = p5.random(-p5.height, p5.height);
            this.z = p5.random(p5.width);

        }
        
        show() {
            p5.fill(0);
            p5.noStroke();
            const sx = p5.map(this.x / this.z, 0, 1, 0, p5.width);
            const sy = p5.map (this.y / this.z, 0, 1, 0, p5.height);
            const r = p5.map(this.z, 0, p5.width, 16, 0);
            p5.ellipse(sx, sy, r, r);
        }
        
        update() {
            this.z = this.z - 5;
            if (this.z < 1) {
                this.z = p5.width;
            }
        }
        
    }
}

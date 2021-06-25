import * as THREE from "three";

let cursor;

function cursorTracker() {

    cursor = cursor || window.document.getElementById("cursor");
    window.document.addEventListener("mousemove", (e)=>{
        
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        
    });

}

function mouseOutInEventListener(el) {

    cursor = cursor || window.document.getElementById("cursor");
    const mouseoverEvent = el.addEventListener("mouseover", ()=>{
        
        cursor.style.top = "-40px";        
        cursor.style.left = "-40px";     
        cursor.style.height = "80px";  
        cursor.style.width = "80px";
        
    });

    const clickEvent = el.addEventListener("click", ()=>{
        
        cursor.style.top = "-20px";        
        cursor.style.left = "-20px";     
        cursor.style.height = "40px";  
        cursor.style.width = "40px";
        
    });

    const mouseoutEvent = el.addEventListener("mouseout", ()=>{
        
        cursor.style.top = "-20px";        
        cursor.style.left = "-20px";     
        cursor.style.height = "40px";  
        cursor.style.width = "40px";
        
    }); 

    return () => {

        el.removeEventListener("mouseout", mouseoutEvent);
        el.removeEventListener("mouseover", mouseoverEvent);
        el.removeEventListener("click", clickEvent);
    
    }

}


function renderShader(canvas: HTMLCanvasElement, fragmentShader: string, texture: string = "") {

    const renderer = new THREE.WebGLRenderer({canvas});
    renderer.autoClearColor = false;
   
    const camera = new THREE.OrthographicCamera(
      -1, // left
       1, // right
       1, // top
      -1, // bottom
      -1, // near,
       1, // far
    );

    const scene = new THREE.Scene();
    const plane = new THREE.PlaneGeometry(2, 2);
    let tex = null;

    if (texture) {
      const textureLoader = new THREE.TextureLoader();
      tex = textureLoader.load(texture);
    }
  
    const uniforms = {
      u_time: { value: 0 },
      u_resolution:  { value: new THREE.Vector3() },
      u_texture_1: { type: "t", value: tex }
    };

    const material = new THREE.ShaderMaterial({
      fragmentShader,
      uniforms,
    });
    scene.add(new THREE.Mesh(plane, material));
  
    function resizeRendererToDisplaySize(renderer) {
      const canvas = renderer.domElement;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const needResize = canvas.width !== width || canvas.height !== height;
      if (needResize) {
        renderer.setSize(width, height, false);
      }
      return needResize;
    };
  
    function render(time) {
      time *= 0.001;  // convert to seconds
  
      resizeRendererToDisplaySize(renderer);
  
      const canvas = renderer.domElement;
      uniforms.u_resolution.value.set(canvas.width, canvas.height, 1);
      uniforms.u_time.value = time;
  
      renderer.render(scene, camera);
  
      requestAnimationFrame(render);
    }
  
    requestAnimationFrame(render);

}



export {cursorTracker, mouseOutInEventListener, renderShader}
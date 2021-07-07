import { useCallback, useLayoutEffect, useRef } from "react";
import {renderShader} from "../../utils";
import {ThreeFragShaderProps} from "../../types";

const Shader = ({shader, isVisible}: ThreeFragShaderProps) => {

  const {fragmentShader, texture} = shader;

  let canvas = useRef<HTMLCanvasElement>();

  const ref = useCallback((node)=>{
    canvas.current = node;
  }, []);

  useLayoutEffect(()=>{

    if (!canvas.current) return;

    const cleanup = renderShader(canvas.current, fragmentShader, texture);
    
    return () => {
      //prevent webgl contexts from stacking up cause JS garbage collection suuuuuuucks
      canvas.current?.remove();
      cleanup();
    }

  }, [fragmentShader, texture, isVisible])
  
  return (
    <canvas 
      ref={ref}
      style={{width: "100%", height: "100%"}}
      className="glslCanvas"
      width="500" 
      height="500"
    />
  )

}

export {Shader}
import { useCallback, useEffect, useRef } from "react";
import {renderShader} from "../../utils";
import {ThreeFragShaderProps} from "../../types";

const Shader = ({shader}: ThreeFragShaderProps) => {

  const {fragmentShader, texture} = shader;

  let canvas = useRef();

  const ref = useCallback((node)=>{
    canvas.current = node;
  }, []);

  useEffect(()=>{

    if (!canvas.current) return;

    renderShader(canvas.current, fragmentShader, texture)

  }, [fragmentShader, texture])
  
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


function Shader({fragCode}) {

  return (
    <canvas 
      id="glslCanvas"
      style={{width: "100%", height: "100%"}}
      className="glslCanvas"
      data-fragment={fragCode} 
      width="500" 
      height="500"
      />
  )

}

export {Shader}
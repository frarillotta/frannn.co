import { motion } from "framer-motion"
import { useLayoutEffect, useRef, useEffect } from "react"
import { styled } from "styled-components"


export const SVGText: React.FC<{
    children: React.ReactNode,
    className?: string,
    width?: number,
    height?: number,
    y?: number,
    x?: number,
    textAnchor?: 'start' | 'end' | 'middle',
}> = ({
    children,
    className,
    y = 30,
    x = 0,
    textAnchor = 'start'
}) => {
        const svgRef = useRef<SVGSVGElement>(null);

        useEffect(() => {
            const bbox = svgRef?.current?.getBBox();
            console.log(bbox)
            // Set the viewport with these bounds
            svgRef.current?.setAttribute("viewBox", `${bbox?.x} ${bbox?.y} ${bbox?.width} ${bbox?.height}`);
        })
        return <div>
            <SVG
                ref={svgRef}
                // viewBox={`0 0 ${width} ${height}`}
                // height={height}
                // width={width}
                >
                <Text
                    className={className}
                    textAnchor={textAnchor}
                    initial={{
                        pathLength: 0,
                        pathSpacing: 50,
                        fillOpacity: 0
                    }}
                    animate={{
                        pathLength: 160,
                        fillOpacity: 1,
                        transition: {
                            duration: 3
                        }
                    }}
                    y={y}
                    x={x}
                >
                    {children}
                </Text>
            </SVG>
        </div>
    }

const SVG = styled.svg`
    width: 100%;
    height: 100%;
`
const Text = styled(motion.text)`
    stroke: rgba(0, 0, 0,1);
    fill: rgba(0, 0 ,0, 1); 
	font-size: 2em;
`

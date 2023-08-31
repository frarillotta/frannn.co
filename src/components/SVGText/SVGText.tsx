import { motion } from "framer-motion"
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
    height = 36,
    width = 300,
    y = 30,
    x = 0,
    textAnchor = 'start'
}) => {
        return <svg width={width} height={height}>
            <Text
                className={className} 
                textAnchor={textAnchor}
                initial={{
                    pathLength: 0,
                    pathSpacing: 50,
                    fillOpacity: 0
                }}
                animate={{
                    pathLength: 100,
                    fillOpacity: 1,
                    transition: {
                        duration: 2.5
                    }
                }}
                y={y}
                x={x}
            >
                {children}
            </Text>
        </svg>
    }

const Text = styled(motion.text)`
    stroke: rgba(0, 0, 0,1);
    fill: rgba(0, 0 ,0, 1); 
	font-size: 2em;
`

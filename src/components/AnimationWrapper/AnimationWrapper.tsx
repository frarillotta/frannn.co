import { motion } from "framer-motion";


const AnimationWrapper = ({className, children, ...delegate}) => {
    return <div

        className={className}
        {...delegate}
    >
        {children}
    </div>
}

export {AnimationWrapper}
import { motion } from "framer-motion";
import { AnimationWrapperProps } from "../../types";

const AnimationWrapper = ({children, ...delegate}: AnimationWrapperProps) => {
    return <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.0 }}
        {...delegate}
    >
        {children}
    </motion.div>
}

export {AnimationWrapper}
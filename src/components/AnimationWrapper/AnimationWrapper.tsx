import { motion } from "framer-motion";

const AnimationWrapper = ({className, children, ...delegate}) => {
    return <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className={className}
        {...delegate}
    >
        {children}
    </motion.div>
}

export {AnimationWrapper}

// const LogoText = () => {
//   return (
    
//     <h1 className="text-4xl md:text-6xl mb-4 font-logo-popins font-medium -tracking-normal text-coral">FitMetrics</h1>
//   )
// }

// export default LogoText



import { motion } from "framer-motion";

const LogoText = () => {
  return (
    <motion.h1
      className="text-4xl md:text-6xl mb-4 font-logo-popins font-medium -tracking-normal text-coral "
      initial={{ opacity: 0, scale: 0.8 }}  // Initial state
      animate={{ opacity: 1, scale: 1 }}    // Final state
      transition={{ duration: 0.8, ease: "easeOut" }}  // Smooth transition
    >
      FitMetrics
    </motion.h1>
  );
};

export default LogoText;

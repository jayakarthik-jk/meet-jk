import { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';

const Container: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <motion.div
      initial={{
        x: "-100vw",
      }}
      animate={{
        x: 0,
        transition: {
          duration: 0.3,
        },
      }}
      exit={{
        x: "100vw",
        transition: {
          duration: 0.3,
        },
      }}
      className="fixed left-[17%] top-12 h-[88%] w-[83%]"
    >
      {children}
    </motion.div>
  );
};

export default Container;

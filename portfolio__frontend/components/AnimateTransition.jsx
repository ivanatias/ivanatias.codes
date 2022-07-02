import React from "react";
import { AnimatePresence } from "framer-motion";

const AnimateTransition = ({ children }) => {
  return (
    <AnimatePresence
      initial={true}
      exitBeforeEnter
      onExitComplete={() => {
        if (window !== "undefined") {
          scrollTo({ top: 0 });
        }
      }}
    >
      {children}
    </AnimatePresence>
  );
};

export default AnimateTransition;

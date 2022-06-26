import React from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        className="flex items-center justify-center w-12 h-10 bg-indigo-700 rounded-md cursor-pointer dark:bg-orange-600"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        aria-label="Toggle Theme"
        key={theme}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <p className="text-sm md:text-base">
          {theme === "light" ? "🌙" : "☀️"}
        </p>
      </motion.div>
    </AnimatePresence>
  );
};

export default ThemeToggle;

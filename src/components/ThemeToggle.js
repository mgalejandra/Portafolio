import React from "react";
import { BsSun, BsMoon } from "react-icons/bs";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

/**
 * Theme toggle button component
 * @component
 */
function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      {theme === "light" ? (
        <BsMoon size={20} />
      ) : (
        <BsSun size={20} />
      )}
    </motion.button>
  );
}

export default ThemeToggle;


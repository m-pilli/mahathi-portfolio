import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { logThemeChange } from '../../utils/analytics';
import './ThemeToggle.scss';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  const handleThemeToggle = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    toggleTheme();
    logThemeChange(newTheme);
  };

  return (
    <motion.button
      className="theme-toggle"
      onClick={handleThemeToggle}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
    >
      <span className={`icon ${theme}`}>
        {theme === 'dark' ? '🌞' : '🌑'}
      </span>
    </motion.button>
  );
};

export default ThemeToggle; 
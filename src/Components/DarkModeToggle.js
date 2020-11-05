import React from 'react';
import useDarkMode from '../Hooks/useDarkMode';
import ThemeIcon from './ThemeIcon';

function DarkModeToggle() {
  const [isDarkMode, toggleDarkMode] = useDarkMode('dark');
  return (
    <div onClick={toggleDarkMode} className="theme-toggle">
      <ThemeIcon darkMode={isDarkMode} />
    </div>
  );
}

export default DarkModeToggle;

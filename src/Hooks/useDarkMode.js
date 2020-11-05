import { useState, useEffect } from 'react';

/**
 *
 * Returns true if globally preferred theme is dark and false if not.
 * @returns {boolean} Is dark mode globally preferred.
 */
const getGlobalPreference = () => window.matchMedia('(prefers-color-scheme: dark)').matches;

/**
 *
 * Returns true if user prefers dark mode and false if not.
 * @returns {boolean} Does user prefers dark mode.
 */
const getUserPreferredMode = () => {
  // If localStorage is available user preference is stored, return the stored value.
  if (localStorage) {
    const localPreference = localStorage.getItem('dark-mode');
    if (localPreference) {
      return JSON.parse(localStorage.getItem('dark-mode'));
    }
    // Else return the global dark-mode preference.
    return getGlobalPreference();
  }
  // If localStorage does not exist, return the global dark-mode preference.
  return getGlobalPreference();
};

/**
 *
 * Custom hook which let's you toggle dark-mode by adding a class to the body.
 *
 * @param {string} className Class name which is to be added to body when dark mode.
 * @returns {Array} Array containing a boolean isDarkMode and a darkModeToggle function.
 */
const useDarkMode = (className) => {
  const [isDarkMode, setIsDarkMode] = useState(getUserPreferredMode());

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add(className);
    } else {
      document.body.classList.remove(className);
    }
  }, [isDarkMode, className]);

  const toggleDarkMode = () => {
    localStorage.setItem('dark-mode', !isDarkMode);
    setIsDarkMode(!isDarkMode);
  };

  return [isDarkMode, toggleDarkMode];
};

export default useDarkMode;

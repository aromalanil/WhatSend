import { writable } from "svelte/store";

/**
 *
 * Returns true if globally preferred theme is dark and false if not.
 * @returns Is dark mode globally preferred.
 */
const getGlobalPreference = () => window.matchMedia('(prefers-color-scheme: dark)').matches;

/**
 *
 * Returns true if user prefers dark mode and false if not.
 * @returns {boolean} Does user prefers dark mode.
 */
const getUserPreferredMode = () => {


  // If localStorage does not exist, return the global dark-mode preference.
  if (!localStorage) return getGlobalPreference();

  // If localStorage is available & user preference is stored, return the stored value.
  const localPreference = localStorage.getItem('dark-mode');
  return localPreference ? JSON.parse(localPreference) : getGlobalPreference()
};

/**
 * 
 * Function to create custom isDarkMode store
 * @returns 
 */
const createIsDarkMode = () => {
  const { subscribe, update } = writable(getUserPreferredMode());

  return {
    subscribe,
    toggle: () => {
      update(oldIsDarkMode => {
        const newIsDarkMode = !oldIsDarkMode;
        console.log({ newIsDarkMode });
        newIsDarkMode ? document.body.classList.add('dark') : document.body.classList.remove('dark');
        return newIsDarkMode;
      })
    }
  }
}

/**
 *
 * A store which tells whether the device is a desktop or not.
 */
const isDarkMode = createIsDarkMode();

export default isDarkMode;
import { readable } from "svelte/store";

/**
 *
 * Function to find if the device is a desktop
 *
 * @param  width Width of the device
 */
const getIsDesktop = (width: number) => width > 950;

/**
 *
 * Custom hook which returns a boolean state
 * which tells whether the device is a desktop or not.
 *
 * @returns {boolean} The device is desktop or not.
 */
const isDesktop = readable(getIsDesktop(window.innerWidth), (set) => {
  window.addEventListener("resize", onWindowResize);

  function onWindowResize() {
    console.log(window.innerWidth);
    set(getIsDesktop(window.innerWidth))
  }

  return () => {
    window.removeEventListener("mousemove", onWindowResize);
  }
})

export default isDesktop;
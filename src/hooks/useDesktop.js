import { useState, useEffect } from 'react';

/**
 *
 * Function to find if the device is a desktop
 *
 * @param {number} width Width of the device
 */
const getIsDesktop = (width) => width > 950;

/**
 *
 * Custom hook which returns a boolean state
 * which tells whether the device is a desktop or not.
 *
 * @returns {boolean} The device is desktop or not.
 */
const useDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(getIsDesktop(window.innerWidth));

  useEffect(() => {
    const handleResize = () => {
      const newIsDesktop = getIsDesktop(window.innerWidth);
      if (newIsDesktop !== isDesktop) setIsDesktop(newIsDesktop);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isDesktop]);

  return isDesktop;
};

export default useDesktop;

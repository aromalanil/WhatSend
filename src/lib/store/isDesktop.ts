import { browser } from '$app/environment';
import { readable } from 'svelte/store';

/**
 *
 * Function to find if the device is a desktop
 */
const getIsDesktop = () => {
	if (!browser) return false;
	return window.innerWidth > 950;
};

/**
 *
 * Custom hook which returns a boolean state
 * which tells whether the device is a desktop or not.
 *
 * @returns {boolean} The device is desktop or not.
 */
const isDesktop = readable(getIsDesktop(), (set) => {
	function onWindowResize() {
		set(getIsDesktop());
	}

	if (browser) {
		window.addEventListener('resize', onWindowResize);

		return () => {
			window.removeEventListener('mousemove', onWindowResize);
		};
	}
});

export default isDesktop;

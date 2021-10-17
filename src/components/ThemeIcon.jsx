import sunImage from '../img/sun.svg';
import moonImage from '../img/moon.svg';

function ThemeIcon({ darkMode }) {
  return (
    <img alt="theme-toggle-icon" className="theme-icon" src={darkMode ? sunImage : moonImage} />
  );
}

export default ThemeIcon;

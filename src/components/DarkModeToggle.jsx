import ThemeIcon from './ThemeIcon';
import useDarkMode from '../hooks/useDarkMode';

function DarkModeToggle() {
  const [isDarkMode, toggleDarkMode] = useDarkMode('dark');
  return (
    <div role="button" tabIndex={0} onClick={toggleDarkMode} className="theme-toggle">
      <ThemeIcon darkMode={isDarkMode} />
    </div>
  );
}

export default DarkModeToggle;

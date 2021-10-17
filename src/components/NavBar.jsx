import Logo from './Logo';
import logo from '../img/logo.svg';
import ImageLink from './ImageLink';
import DarkModeToggle from './DarkModeToggle';
import githubLogo from '../img/github_logo.svg';
import { appName, gitRepo } from '../utils/constants';

function NavBar() {
  return (
    <nav className="nav-bar">
      <Logo img={logo} title={appName} alt={appName} />
      <div className="nav-links">
        <DarkModeToggle />
        <ImageLink image={githubLogo} link={gitRepo} alt="Github Logo" />
      </div>
    </nav>
  );
}

export default NavBar;

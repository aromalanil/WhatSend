import logo from '../img/logo.svg';
import github_logo from '../img/github_logo.svg';
import Logo from './Logo';
import ImageLink from './ImageLink';
import DarkModeToggle from './DarkModeToggle';
import { appName, gitRepo } from '../constants';

function NavBar() {
  return (
    <nav className="nav-bar">
      <Logo img={logo} title={appName} alt={appName} />
      <div className="nav-links">
        <DarkModeToggle />
        <ImageLink image={github_logo} link={gitRepo} alt="Github Logo" />
      </div>
    </nav>
  );
}

export default NavBar;

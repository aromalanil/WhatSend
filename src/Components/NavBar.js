import React from 'react';
import logo from '../img/logo.svg';
import github_logo from '../img/github_logo.svg';
import Logo from '../Components/Logo';
import ImageLink from '../Components/ImageLink';
import { appName, gitRepo } from '../constants';

function NavBar() {
  return (
    <nav className="nav-bar">
      <Logo img={logo} title={appName} alt={appName} />
      <div className="nav-links">
        <ImageLink image={github_logo} link={gitRepo} alt="Github Logo" />
      </div>
    </nav>
  );
}

export default NavBar;

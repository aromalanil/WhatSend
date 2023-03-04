<script>
  import Logo from './Logo.svelte';
  import ImageLink from './ImageLink.svelte';
  import DarkModeToggle from './DarkModeToggle.svelte';

  import logo from '../images/logo.svg';
  import githubLogo from '../images/github_logo.svg';
  import { gitRepo, appName } from '../utils/constants';
</script>

<nav class="nav-bar">
  <Logo img={logo} title={appName} alt={appName} />
  <div class="nav-links">
    <DarkModeToggle />
    <ImageLink image={githubLogo} link={gitRepo} alt="Github Logo" />
  </div>
</nav>

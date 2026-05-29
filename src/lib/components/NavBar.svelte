<script>
	import Logo from './Logo.svelte';
	import ImageLink from './ImageLink.svelte';
	import DarkModeToggle from './DarkModeToggle.svelte';

	import logo from '../images/logo.svg';
	import githubLogo from '../images/github_logo.svg';
	import { gitRepo, appName } from '$lib/utils/constants';
</script>

<nav class="nav-bar">
	<Logo img={logo} title={appName} alt={appName} />
	<div class="nav-links">
		<DarkModeToggle />
		<ImageLink image={githubLogo} link={gitRepo} alt="Github Logo" />
	</div>
</nav>

<style>
	.nav-bar {
		position: sticky;
		padding: 0 10%;
		height: var(--nav-height);
		background-color: var(--green);
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	:global(body.dark) .nav-bar {
		background-color: var(--dark-mode-grey);
		color: var(--dark-mode-dull-white);
	}
	.nav-links {
		display: flex;
		gap: 1.5rem;
	}
	@media only screen and (max-width: 680px) {
		.nav-bar {
			padding: 8% 7%;
		}
	}
</style>

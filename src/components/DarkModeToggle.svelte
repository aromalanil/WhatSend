<script>
  import sunImage from '../images/sun.svg';
  import moonImage from '../images/moon.svg';
  import isDarkMode from '../store/isDarkMode';
</script>

<!-- TODO: Resolve this A11y: visible issue -->
<div role="button" tabIndex={0} on:click={() => isDarkMode.toggle()} class="theme-toggle">
  <img alt="theme-toggle-icon" class="theme-icon" src={$isDarkMode ? sunImage : moonImage} />
</div>

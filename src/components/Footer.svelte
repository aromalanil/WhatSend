<script>
  import { gitRepo } from '../utils/constants';
</script>

<footer>
  <p>
    Copyright &copy; {new Date().getFullYear()} &nbsp;
    <a target="_blank" rel="noopener noreferrer" href="https://aromalanil.in/"> Aromal Anil </a>
    &nbsp; |&nbsp;{' '}
    <a href={`${gitRepo}/blob/master/LICENSE`} target="_blank" rel="noopener noreferrer">
      MIT License
    </a>
  </p>
</footer>

<style>
  footer {
    position: relative;
    z-index: 997;
    background-color: var(--darkest-grey);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--white);
  }
  .dark footer {
    background-color: var(--dark-mode-grey-dark);
    color: var(--dark-mode-white);
  }
  footer a {
    color: var(--green);
  }
</style>

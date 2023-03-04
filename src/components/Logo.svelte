<script lang="ts">
  export let img: string;
  export let alt: string;
  export let title: string;
</script>

<a class="logo" href="/">
  <img src={img} {alt} />
  <p>{title}</p>
</a>

<style>
  .logo {
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;
    color: var(--white);
    gap: 0.8rem;
  }

  .logo img {
    height: 3.5rem;
  }
  .logo p {
    font-size: 2rem;
    font-weight: 500;
  }
</style>

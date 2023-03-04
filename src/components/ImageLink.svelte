<script lang="ts">
  export let alt: string;
  export let link: string;
  export let image: string;
</script>

<a target="_blank" rel="noopener noreferrer" href={link}>
  <img class="image-link" src={image} {alt} />
</a>

<style>
  .image-link {
    height: 3.2rem;
  }
</style>

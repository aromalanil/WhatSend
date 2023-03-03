<script lang="ts">
  import isDesktop from './store/isDesktop';
  import NavBar from './components/NavBar.svelte';
  import Footer from './components/Footer.svelte';
  import Description from './components/Description.svelte';
  import MessageForm from './components/MessageForm.svelte';
</script>

<NavBar />
<main class="main-section">
  {#if $isDesktop}
    <Description />
  {/if}
  <MessageForm />
</main>
<Footer />

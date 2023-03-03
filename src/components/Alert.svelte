<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  export let title = '';
  export let message = '';

  const cancel = () => dispatch('cancel');
  const confirm = () => dispatch('confirm');
  const cancelAll = () => dispatch('cancel-all');
</script>

<div class="alert">
  <h3>{title}</h3>
  <p>{message}</p>
  <div class="btn-list">
    <button type="button" on:click={cancelAll} class="alert-btn"> Cancel All </button>
    <button type="button" on:click={cancel} class="alert-btn"> Cancel </button>
    <button type="button" on:click={confirm} class="alert-btn primary"> Confirm </button>
  </div>
</div>
<div class="overlay" />

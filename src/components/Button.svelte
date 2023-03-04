<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  export let value = '';
</script>

<button on:click={() => dispatch('click')} type="submit" class="message-btn"> {value} </button>

<style>
  .message-btn {
    cursor: pointer;
    color: var(--white);
    border-radius: 5rem;
    font-weight: 600;
    font-size: 1.6rem;
    padding: 0.8rem 1.8rem;
    margin: 1rem 0;
    border: none;
    background-color: var(--light-green);
    transition: 0.5s;
    transition-property: transform;
  }

  :global(.dark) .message-btn {
    color: var(--dark-mode-white);
    background-color: var(--dark-green);
  }

  .message-btn:focus {
    outline: none;
  }
  .message-btn:active {
    transform: translateY(0.5rem);
  }
</style>

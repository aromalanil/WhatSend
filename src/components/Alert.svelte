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

<style>
  .alert {
    position: fixed;
    background-color: white;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    border-radius: 3px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    height: fit-content;
    width: 400px;
    box-shadow: 0 17px 50px 0 rgba(0, 0, 0, 0.19), 0 12px 15px 0 rgba(0, 0, 0, 0.24);
    z-index: 999;
  }

  :global(.dark) .alert {
    background-color: #3b4042;
  }

  .alert h3 {
    font-size: 2rem;
    margin: 0;
    margin-bottom: 1rem;
    font-weight: 400;
  }

  .btn-list {
    margin-top: 3em;
    align-self: flex-end;
  }

  .alert-btn {
    cursor: pointer;
    border: 0;
    padding: 1em;
    border-radius: 3px;
    background-color: transparent;
    text-transform: uppercase;
    color: var(--light-green);
  }

  :global(.dark) .alert-btn {
    opacity: 1;
    color: #00af9d;
  }

  .alert-btn:active {
    filter: brightness(1.1);
  }
  .alert-btn:focus {
    outline: none;
  }

  .primary {
    margin: 0 1em;
    padding: 1rem;
    border-radius: 3px;
    color: white;
    background-color: var(--light-green);
  }

  :global(.dark) .primary {
    color: black;
    background-color: #00af9d;
  }

  .overlay {
    position: fixed;
    z-index: 998;
    top: 0;
    left: 0;
    background-color: #fff;
    opacity: 0.9;
    width: 100%;
    height: 100%;
  }

  :global(.dark) .overlay {
    background-color: #000;
    opacity: 0.65;
  }

  @media only screen and (max-width: 680px) {
    .alert {
      width: 80vw;
    }
  }

  @media only screen and (max-width: 400px) {
    .alert-btn {
      font-size: 1.3rem;
    }
  }
</style>

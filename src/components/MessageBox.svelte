<script lang="ts">
  export let name = '';
  export let value = '';
  export let isSmall = true;
  export let placeholder = '';
</script>

<label id="message-box-label" for={name}>
  {name}
  <textarea
    class={`message-box text-input ${isSmall ? 'small-box' : ''}`}
    bind:value
    {name}
    id={name}
    {placeholder}
  />
</label>

<style>
  .message-box {
    height: 20rem;
    resize: none;
  }

  #message-box-label {
    margin-top: 5rem;
  }
</style>

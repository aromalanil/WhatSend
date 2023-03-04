<script lang="ts">
  import Tab from './Tab.svelte';
  import PersonalMessage from './PersonalMessage.svelte';
  import BroadCastMessage from './BroadCastMessage.svelte';

  let activeTab: 'Personal' | 'Broadcast' = 'Personal';

  $: isPersonal = activeTab === 'Personal';
  $: isBroadCast = activeTab === 'Broadcast';

  const setActiveTab = (newActiveTab: typeof activeTab) => {
    activeTab = newActiveTab;
  };
</script>

<div class="message-form">
  <Tab {activeTab} tabValues={['Personal', 'Broadcast']} {setActiveTab} />
  {#if isPersonal}
    <PersonalMessage />
  {/if}

  {#if isBroadCast}
    <BroadCastMessage />
  {/if}
</div>

<style>
  .message-form {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: var(--dark-grey);
  }

  :global(.message-form #error) {
    color: var(--red);
    font-weight: 500;
  }

  :global(.dark) .message-form {
    color: var(--dark-mode-white);
  }

  @media only screen and (max-width: 950px) {
    .message-form {
      width: 100%;
    }
  }
</style>

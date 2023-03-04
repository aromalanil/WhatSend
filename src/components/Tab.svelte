<script lang="ts">
  type T = $$Generic<string>;

  export let setActiveTab: (value: typeof tabValues[number]) => void;
  export let tabValues: T[];
  export let activeTab: typeof tabValues[number];
</script>

<div class="tab">
  {#each tabValues as value}
    <!-- TODO: Solve A11y: visible issue -->
    <div
      role="button"
      tabIndex={0}
      class={`tab-item ${value === activeTab ? 'active-tab' : ''} `}
      on:click={() => setActiveTab(value)}
    >
      {value}
    </div>
  {/each}
</div>

<style>
  .tab {
    height: 3rem;
    width: 100%;
    display: flex;
  }
  .tab-item {
    text-transform: uppercase;
    user-select: none;
    color: #fcfcfcd7;
    background-color: var(--green);
    cursor: pointer;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    font-weight: 500;
    padding: 2.3rem 0;
  }

  :global(.dark) .tab-item {
    background-color: var(--dark-mode-grey);
  }

  .active-tab {
    color: white;
    background-color: var(--green-accent);
    position: relative;
  }

  :global(.dark) .active-tab {
    background-color: var(--dark-mode-grey-accent);
  }

  .active-tab::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 0.3rem;
    background-color: white;
  }
</style>

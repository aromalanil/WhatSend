<script lang="ts">
	type T = $$Generic<string>;

	export let setActiveTab: (value: (typeof tabValues)[number]) => void;
	export let tabValues: T[];
	export let activeTab: (typeof tabValues)[number];
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

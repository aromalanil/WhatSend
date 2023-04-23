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

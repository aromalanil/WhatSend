<script lang="ts">
	import isDesktop from '$lib/store/isDesktop';
	import NavBar from '$lib/components/NavBar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Description from '$lib/components/Description.svelte';
	import MessageForm from '$lib/components/MessageForm.svelte';
	import '../app.css';
</script>

<NavBar />
<main class="main-section">
	{#if $isDesktop}
		<Description />
	{/if}
	<MessageForm />
</main>
<Footer />

<style>
	.main-section {
		display: flex;
		min-height: calc(100vh - var(--nav-height));
	}
	@media only screen and (max-width: 950px) {
		.main-section {
			flex-direction: column;
		}
	}
</style>

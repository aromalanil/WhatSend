<script lang="ts">
	import isDesktop from '$lib/store/isDesktop';
	import NavBar from '$lib/components/NavBar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Description from '$lib/components/Description.svelte';
	import MessageForm from '$lib/components/MessageForm.svelte';
	import '../app.css';
</script>

<div class="page-container">
	<NavBar />
	<main class="main-section">
		{#if $isDesktop}
			<Description />
		{/if}
		<MessageForm />
	</main>
	<Footer />
</div>

<style>
	.page-container {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
	.main-section {
		display: flex;
		flex: 1;
	}
	@media only screen and (max-width: 950px) {
		.main-section {
			flex-direction: column;
		}
	}
</style>

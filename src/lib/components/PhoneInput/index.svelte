<script lang="ts">
	import TelInput from 'svelte-tel-input';
	import SelectCountry from './SelectCountry.svelte';
	import type { CountryCode } from 'svelte-tel-input/types';

	export let value = '';
	export let isPhoneValid = false;

	let selectedCountry: CountryCode = 'IN';
</script>

<div class="phone-input">
	<SelectCountry bind:selectedCountryCode={selectedCountry} />

	<TelInput
		bind:value
		bind:country={selectedCountry}
		bind:valid={isPhoneValid}
		class="phone-input-text"
	/>
</div>

<style>
	.phone-input {
		display: flex;
	}
	.phone-input :global(.phone-input-text) {
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		width: 100%;
		border: 1px solid #cacaca;
		border-radius: 5px;
		padding: 1.8rem;
		font-size: 1.6rem;
		margin-bottom: 2.5rem;
	}
	:global(body.dark) .phone-input :global(.phone-input-text) {
		color: var(--dark-mode-white);
		background-color: #262d31;
		border-color: #434f55;
	}
	.phone-input :global(.phone-input-text:focus) {
		outline: none;
		border-color: var(--light-grey) !important;
		box-shadow: 0 0 0 0.2rem var(--light-grey) !important;
		transition: box-shadow ease 0.25s, border-color ease 0.25s;
	}
	:global(body.dark) .phone-input :global(.phone-input-text:focus) {
		border-color: #434f55 !important;
		box-shadow: 0 0 0 0.2rem #434f55 !important;
	}
</style>

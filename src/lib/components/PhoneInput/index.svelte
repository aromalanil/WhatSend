<script lang="ts">
	import TelInput from 'svelte-tel-input';
	import SelectCountry from './SelectCountry.svelte';
	import type { CountryCode } from 'svelte-tel-input/types';

	export let value = '';
	export let isPhoneValid = false;

	let selectedCountry: CountryCode = 'IN';
</script>

<div class="phone-input">
	<SelectCountry selectedCountryCode={selectedCountry} />

	<TelInput
		bind:value
		bind:country={selectedCountry}
		bind:valid={isPhoneValid}
		class="phone-input-text"
	/>
</div>

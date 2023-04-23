<script lang="ts">
	import FlagIcon from './FlagIcon.svelte';
	import { normalizedCountries } from 'svelte-tel-input';
	import type { CountryCode } from 'svelte-tel-input/types';

	export let selectedCountryCode: CountryCode = 'IN';

	let isDropDownVisible = false;
	$: selectedCountry = normalizedCountries.find((country) => country.iso2 === selectedCountryCode);

	const selectCountry = (countryCode: CountryCode) => {
		isDropDownVisible = false;
		selectedCountryCode = countryCode;
	};

	const toggleDropDown = () => {
		isDropDownVisible = !isDropDownVisible;
	};
</script>

<div class="drop-down">
	<div class="selected-country" on:click={toggleDropDown} tabindex="0">
		<FlagIcon countryCode={selectedCountry.iso2} />
		<span>+ {selectedCountry.dialCode}</span>
	</div>
	<ul class="country-list" hidden={!isDropDownVisible}>
		{#each normalizedCountries as country, index (country.id)}
			<li class="country-option" on:click={() => selectCountry(country.iso2)} tabindex={index + 1}>
				<span class="country-flag fi fi-{country.iso2.toLocaleLowerCase()}" />

				<span class="country-text">
					<span class="country-name">{country.name} </span>
					<span class="country-dial-code"> +{country.dialCode}</span>
				</span>
			</li>
		{/each}
	</ul>
</div>

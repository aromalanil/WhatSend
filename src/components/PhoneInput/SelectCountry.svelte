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

<style>
  .drop-down {
    position: relative;
  }

  .selected-country {
    padding: 1rem 1.5rem;
    width: 10rem;
    display: flex;
    cursor: pointer;
    box-sizing: border-box;
    border: 1px solid #cacaca;
    border-radius: 5px;
    justify-content: space-between;
    margin-right: 0.5rem;
    background-color: var(--white);
  }

  .selected-country:focus {
    border-color: var(--light-grey) !important;
    box-shadow: 0 0 0 0.2rem var(--light-grey) !important;
    transition: box-shadow ease 0.25s, border-color ease 0.25s;
  }

  :global(.dark) .selected-country {
    border-color: #434f55;
    color: var(--dark-mode-white);
    background-color: #262d31;
  }

  .country-list {
    left: 0;
    z-index: 1;
    padding: 0;
    width: 30rem;
    margin: 1rem 0;
    overflow-y: scroll;
    max-height: 30rem;
    top: 1;
    position: absolute;
  }

  .country-option {
    cursor: pointer;
    display: flex;
    background-color: var(--white);
    width: 100%;
    padding: 1.8rem;
    display: flex;
  }

  .country-option:hover {
    filter: brightness(0.9);
  }

  :global(.dark) .country-option {
    color: var(--dark-mode-white);
    background-color: #262d31;
  }

  :global(.dark) .country {
    background-color: #262d31 !important;
    color: var(--dark-mode-white) !important;
  }

  :global(.dark) .dial-code {
    color: var(--dark-mode-white) !important;
  }

  .country-flag {
    margin-right: 1rem;
  }
</style>

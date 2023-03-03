<script lang="ts">
  import FlagIcon from './FlagIcon.svelte';
  import TelInput, { normalizedCountries } from 'svelte-tel-input';
  import type { CountryCode, E164Number } from 'svelte-tel-input/types';

  let selectedCountry: CountryCode = 'IN';

  // You must use E164 number format. It's guarantee the parsing and storing consistency.
  export let value: E164Number | null = '';

  export let isPhoneValid = false;
</script>

<div class="phone-input">
  <FlagIcon countryCode={selectedCountry} />
  <select
    class="phone-input-select"
    aria-label="Default select example"
    name="Country"
    bind:value={selectedCountry}
  >
    {#each normalizedCountries as country (country.id)}
      <option
        class="phone-input-option"
        value={country.iso2}
        selected={country.iso2 === selectedCountry}
        aria-selected={country.iso2 === selectedCountry}
      >
        {country.iso2} (+{country.dialCode})
      </option>
    {/each}
  </select>

  <TelInput
    bind:value
    bind:country={selectedCountry}
    bind:valid={isPhoneValid}
    class="phone-input-text"
  />
</div>

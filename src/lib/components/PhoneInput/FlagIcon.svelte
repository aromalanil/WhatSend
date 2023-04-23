<script lang="ts">
	import '/node_modules/flag-icons/css/flag-icons.min.css';
	import type { CountryCode } from 'svelte-tel-input/types';

	export let countryCode: CountryCode;
</script>

<span class="fi fi-{countryCode.toLocaleLowerCase()}" />

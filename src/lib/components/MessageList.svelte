<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Alert from './Alert.svelte';

	const dispatch = createEventDispatcher();

	export let message = '';
	export let phoneNumbers: string[] = [];

	let activeIndex = 0;

	const dispatchStop = () => {
		dispatch('stop');
	};

	const incrementIndex = () => {
		if (activeIndex + 1 === phoneNumbers.length) dispatchStop();
		activeIndex = activeIndex + 1;
	};

	const sendMessage = () => {
		const phoneNumber = phoneNumbers[activeIndex];
		const newNumber = phoneNumber.toString().length === 10 ? `+91${phoneNumber}` : phoneNumber;

		const link = `https://api.whatsapp.com/send?phone=${newNumber}${
			message && `&text=${encodeURIComponent(message)}`
		}`;
		window.open(link, '_blank');
		incrementIndex();
	};

	$: alertMessage = `Send Message to ${phoneNumbers[activeIndex]}`;
</script>

<Alert
	title="Send Message"
	message={alertMessage}
	on:confirm={sendMessage}
	on:cancel={incrementIndex}
	on:cancel-all={dispatchStop}
/>

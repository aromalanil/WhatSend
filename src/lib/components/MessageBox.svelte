<script lang="ts">
	export let name = '';
	export let value = '';
	export let isSmall = true;
	export let placeholder = '';
</script>

<label id="message-box-label" for={name}>
	{name}
	<textarea
		class={`message-box ${isSmall ? 'small-box' : ''}`}
		bind:value
		{name}
		id={name}
		{placeholder}
	/>
</label>

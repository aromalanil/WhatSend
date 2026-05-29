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

<style>
	.message-box {
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		width: 100%;
		border: 1px solid #cacaca;
		border-radius: 5px;
		padding: 1.8rem;
		font-size: 1.6rem;
		margin-bottom: 2.5rem;
		height: 20rem;
		resize: none;
	}
	:global(body.dark) .message-box {
		color: var(--dark-mode-white);
		background-color: #262d31;
		border-color: #434f55;
	}
	.small-box {
		height: 15rem;
	}
	.message-box:focus {
		outline: none;
		border-color: var(--light-grey) !important;
		box-shadow: 0 0 0 0.2rem var(--light-grey) !important;
		transition: box-shadow ease 0.25s, border-color ease 0.25s;
	}
	#message-box-label {
		margin-top: 5rem;
	}
	:global(body.dark) .message-box:focus {
		border-color: #434f55 !important;
		box-shadow: 0 0 0 0.2rem #434f55 !important;
	}
</style>

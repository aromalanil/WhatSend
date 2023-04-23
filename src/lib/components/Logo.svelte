<script lang="ts">
	export let img: string;
	export let alt: string;
	export let title: string;
</script>

<a class="logo" href="/">
	<img src={img} {alt} />
	<p>{title}</p>
</a>

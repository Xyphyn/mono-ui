<script lang="ts">
	import Button, { type ButtonAlignment, type ButtonColor } from '$lib/button/Button.svelte'

	export let color: ButtonColor = 'tertiary'
	export let alignment: ButtonAlignment = 'left'
</script>

<Button on:click {color} rounding="none" class="w-full font-normal px-4" {alignment}>
	<slot name="prefix" slot="prefix" />
	<slot />
	<slot name="suffix" slot="suffix" />
</Button>

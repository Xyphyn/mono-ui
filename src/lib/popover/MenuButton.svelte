<script lang="ts">
	import Button, { type ButtonAlignment, type ButtonColor } from '$lib/button/Button.svelte'

	export let color: ButtonColor = 'tertiary'
	export let alignment: ButtonAlignment = 'left'
	export let href: string | undefined = undefined
</script>

<Button
	on:click
	{color}
	rounding="none"
	class="w-full font-normal px-4 min-h-[36px] {$$props.class}"
	{alignment}
	{href}
>
	<slot name="prefix" slot="prefix" />
	<slot />
	<slot name="suffix" slot="suffix" />
</Button>

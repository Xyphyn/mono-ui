<script lang="ts">
	import Button, { type ButtonAlignment, type ButtonColor } from '$lib/button/Button.svelte'

	export let color: ButtonColor = 'tertiary'
	export let alignment: ButtonAlignment = 'left'
	export let href: string | undefined = undefined
	export let disabled: boolean = false
</script>

<Button
	{...$$restProps}
	on:click
	{color}
	rounding="none"
	class="w-full px-2 rounded-lg min-h-[36px] font-normal {disabled
		? 'opacity-70 pointer-events-none cursor-not-allowed'
		: ''} hover:dark:bg-zinc-900 duration-100 {$$props.class}"
	{alignment}
	{href}
	{disabled}
>
	<span
		class="contents {color == 'tertiary' ? 'text-slate-600 dark:text-zinc-400' : ''}
		flex-shrink-0"
		slot="prefix"
	>
		<slot name="prefix" />
	</span>
	<slot />
	<slot name="suffix" slot="suffix" />
</Button>

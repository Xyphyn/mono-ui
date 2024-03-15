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
	class="w-full px-4 min-h-[36px] {$$props.class}"
	{alignment}
	{href}
>
  <span class="contents text-slate-600 dark:text-zinc-400 flex-shrink-0" slot="prefix">
	  <slot name="prefix" />
  </span>
	<slot />
	<slot name="suffix" slot="suffix" />
</Button>

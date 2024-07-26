<script lang="ts">
	import Material from '$lib/materials/Material.svelte'
	import Popover, { type Origin } from '$lib/popover/Popover.svelte'
	import {
		offset,
		type Middleware,
		type Placement,
		shift,
		type Strategy,
		flip,
		autoPlacement
	} from '@floating-ui/core'

	export let openOnHover: boolean = false
	export let open: boolean = false

	export let placement: Placement = 'bottom-start'
	export let middleware: Middleware[] = [offset(6), shift(), flip()]
	export let strategy: Strategy = 'absolute'
</script>

<Popover
	{openOnHover}
	{placement}
	{middleware}
	{strategy}
	{...$$restProps}
	bind:open
	popoverClass="backdrop-blur-lg rounded-xl"
	class={$$props.class}
>
	<slot name="target" slot="target" />
	<div
		slot="popover"
		class="w-72 origin-top-left
	max-h-[32rem] overflow-auto list-none shadow-xl rounded-xl"
	>
		<Material
			class="flex flex-col py-2 list-none bg-white/70 dark:bg-zinc-950/70 px-2"
			color="transparent"
			padding="none"
			rounding="xl"
		>
			<slot />
		</Material>
	</div>
</Popover>

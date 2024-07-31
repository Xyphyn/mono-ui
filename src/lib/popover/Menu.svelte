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
	popoverClass="backdrop-blur-xl rounded-xl"
	class={$$props.class}
>
	<slot name="target" slot="target" />
	<div
		slot="popover"
		class="w-72 origin-top-left
	max-h-[32rem] overflow-auto list-none shadow-xl rounded-xl"
	>
		<Material
			class="flex flex-col py-2 list-none bg-white/80 dark:bg-zinc-900/80 px-2 gap-1"
			color="distinct"
			padding="none"
			rounding="xl"
		>
			<slot />
		</Material>
	</div>
</Popover>

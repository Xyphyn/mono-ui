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

	export let placement: Placement = 'bottom-end'
	export let middleware: Middleware[] = [offset(4), shift(), flip()]
	export let strategy: Strategy = 'absolute'
</script>

<Popover
	{openOnHover}
	{placement}
	{middleware}
	{strategy}
	{...$$restProps}
	bind:open
	class={$$props.class}
>
	<slot name="target" slot="target" />
	<div
		slot="popover"
		class="w-52 origin-top-left max-h-[32rem] overflow-auto list-none shadow-xl rounded-lg
		"
	>
		<Material class="flex flex-col py-2 list-none" color="distinct" padding="none" rounding="lg">
			<slot />
		</Material>
	</div>
</Popover>

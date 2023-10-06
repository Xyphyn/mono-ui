<script lang="ts">
	import Material from '$lib/materials/Material.svelte'
	import Popover, { type Origin } from '$lib/popover/Popover.svelte'
	import {
		offset,
		type Middleware,
		type Placement,
		shift,
		type Strategy,
		flip
	} from '@floating-ui/core'

	export let openOnHover: boolean = false
	export let open: boolean = false

	export let placement: Placement = 'bottom-start'
	export let middleware: Middleware[] = [offset(4), flip(), shift()]
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
		class="min-w-[16rem] origin-top-left max-h-[32rem] overflow-auto list-none shadow-xl rounded-lg
		"
	>
		<Material class="flex flex-col py-2 list-none" color="distinct" padding="none" rounding="lg">
			<slot />
		</Material>
	</div>
</Popover>

<script lang="ts">
	import Material from '$lib/materials/Material.svelte'
	import Popover, { type Origin } from '$lib/popover/Popover.svelte'

	export let openOnHover: boolean = false
	export let origin: Origin = 'bottom-left'
	export let open: boolean = false
	export let targetClass: string = ''
</script>

<Popover
	{openOnHover}
	{origin}
	targetClass="z-30 {targetClass}"
	bind:open
	class="z-50 {$$props.class}"
>
	<slot name="target" slot="target" />
	<div slot="popover" class="min-w-[16rem] origin-top-left max-h-[32rem] overflow-auto list-none">
		<Material color="distinct" padding="none" rounding="lg" class="py-2 list-none" elevation="max">
			<slot />
		</Material>
	</div>
</Popover>

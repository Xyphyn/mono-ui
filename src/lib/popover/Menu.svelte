<script lang="ts">
	import Material from '$lib/materials/Material.svelte'
	import Popover, { type Origin } from '$lib/popover/Popover.svelte'

	export let openOnHover: boolean = false
	export let origin: Origin = 'bottom-left'
</script>

<Popover {openOnHover} {origin}>
	<slot name="target" slot="target" />
	<div slot="popover" class="min-w-[16rem] origin-top-left">
		<Material color="distinct" padding="none" rounding="md" class="py-2" elevation="max">
			<slot />
		</Material>
	</div>
</Popover>

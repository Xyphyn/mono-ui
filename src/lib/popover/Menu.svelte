<script lang="ts">
	import Material from '$lib/materials/Material.svelte'
	import Popover from '$lib/popover/Popover.svelte'
	import { expoOut } from 'svelte/easing'
	import { fly, scale } from 'svelte/transition'

	export let openOnHover: boolean = false
</script>

<Popover {openOnHover}>
	<slot name="target" slot="target" />
	<div slot="popover" class="min-w-[16rem] origin-top-left">
		<Material color="distinct" padding="none" rounding="md" class="py-2" elevation="max">
			<slot />
		</Material>
	</div>
</Popover>

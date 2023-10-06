<script lang="ts">
	import Material from '$lib/materials/Material.svelte'
	import Popover, { type Origin } from '$lib/popover/Popover.svelte'

	export let openOnHover: boolean = false
	export let open: boolean = false
</script>

<Popover {openOnHover} {origin} bind:open class={$$props.class}>
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

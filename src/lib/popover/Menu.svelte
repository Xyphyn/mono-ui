<script lang="ts">
	import Material from '$lib/materials/Material.svelte'
	import Popover, { type Origin } from '$lib/popover/Popover.svelte'

	export let openOnHover: boolean = false
	export let origin: Origin = 'bottom-left'
	export let open: boolean = false
	export let targetClass: string = ''
</script>

<Popover {openOnHover} {origin} {targetClass} bind:open class={$$props.class}>
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

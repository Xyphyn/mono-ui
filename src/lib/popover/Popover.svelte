<script lang="ts">
	import Material from '$lib/materials/Material.svelte'
	import { fly } from 'svelte/transition'

	export let openOnHover: boolean = false

	let open = false

	function openMenu() {
		open = true
	}
</script>

<div
	on:mouseover={() => {
		if (openOnHover) open = true
	}}
	on:mouseleave={() => {
		if (openOnHover) open = false
	}}
	on:focus={() => {
		if (openOnHover) openMenu()
	}}
	on:focusout={() => {
		if (openOnHover) open = false
	}}
	on:click={() => (open = !open)}
	on:keypress={() => (open = !open)}
	role="menu"
	tabindex="0"
	class="relative z-30 cursor-auto overflow-visible w-max {$$props.class} flex flex-col"
>
	<div tabindex="-1">
		<slot name="target" />
	</div>
	<!--Artificial gap-->
	<div class="h-2" />
	{#if open}
		<div transition:fly={{ opacity: 0, y: 2 }} class="absolute left-0 origin-top-left top-full">
			<slot name="popover">
				<Material>
					<slot />
				</Material>
			</slot>
		</div>
	{/if}
</div>

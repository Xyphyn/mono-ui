<script lang="ts">
	import Material from '$lib/materials/Material.svelte'
	import { expoOut } from 'svelte/easing'
	import { fly, scale } from 'svelte/transition'

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
	class="relative z-20 cursor-auto overflow-visible w-max {$$props.class} flex flex-col"
>
	<div tabindex="-1">
		<slot name="target" />
	</div>
	<!--Artificial gap-->
	<div class="h-2" />
	{#if open}
		<div
			transition:scale={{ duration: 200, start: 0.95, easing: expoOut }}
			class="absolute left-0 origin-top-left top-full min-w-[12rem]"
		>
			<slot name="popover">
				<Material elevation="high">
					<slot />
				</Material>
			</slot>
		</div>
	{/if}
</div>

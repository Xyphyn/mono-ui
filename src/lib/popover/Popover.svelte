<script context="module" lang="ts">
	export type Origin = keyof typeof popoverOrigins

	export const popoverOrigins = {
		'top-right': 'bottom-full right-0 origin-bottom-right',
		'bottom-left': 'top-full origin-top-left',
		'top-left': 'bottom-full left-0 origin-bottom-left',
		'bottom-right': 'top-full right-0 origin-top-right',
		'top-center': 'bottom-full -left-[450%] origin-bottom',
		'bottom-center': 'top-full -left-[450%] origin-top'
	}
</script>

<script lang="ts">
	import Material from '$lib/materials/Material.svelte'
	import { expoOut } from 'svelte/easing'
	import { fly, scale } from 'svelte/transition'

	export let openOnHover: boolean = false
	export let origin: Origin = 'bottom-left'
	export let open = false
	export let targetClass: string = ''

	let el: any
</script>

<svelte:body
	on:click={(e) => {
		if (openOnHover) return

		if (!el.contains(e.target)) {
			open = false
		}
	}}
/>

<div
	on:mouseover={() => (openOnHover ? (open = true) : false)}
	on:mouseleave={() => (openOnHover ? (open = false) : false)}
	on:focus={() => (openOnHover ? (open = true) : false)}
	on:focusout={() => (openOnHover ? (open = false) : false)}
	on:click={() => (!openOnHover ? (open = !open) : false)}
	on:keypress={() => (!openOnHover ? (open = !open) : false)}
	role="menu"
	tabindex="0"
	class="relative cursor-auto overflow-visible w-max {$$props.class} flex flex-col"
	bind:this={el}
>
	<div tabindex="-1" class={targetClass}>
		<slot name="target" />
	</div>
	{#if open}
		<div
			transition:scale={{ duration: 200, start: 0.95, easing: expoOut }}
			class="absolute min-w-[12rem] my-2 z-30 {popoverOrigins[origin]}"
		>
			<slot name="popover">
				<Material elevation="high">
					<slot />
				</Material>
			</slot>
		</div>
	{/if}
</div>

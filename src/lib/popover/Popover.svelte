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
	import { createFloatingActions } from 'svelte-floating-ui'
	import {
		offset,
		type Middleware,
		flip,
		shift,
		type Placement,
		type Strategy,
		size
	} from '@floating-ui/core'

	export let openOnHover: boolean = false
	export let open = false
	export let placement: Placement = 'bottom-start'
	export let middleware: Middleware[] = [offset(4), flip(), shift()]
	export let strategy: Strategy = 'absolute'

	let el: any

	const [floatingRef, floatingContent] = createFloatingActions({
		strategy: strategy,
		placement: placement,
		middleware: middleware
	})
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
	on:keydown={(e) => {
		if (e.key == 'Escape') open = !open
	}}
	role="menu"
	tabindex="0"
	class="w-max h-max {$$props.class}"
	bind:this={el}
	use:floatingRef
>
	<slot name="target" />
</div>

{#if open}
	<div
		transition:fly={{ duration: 300, y: -4, easing: expoOut }}
		class="w-48 z-30 absolute"
		use:floatingContent
	>
		<slot name="popover">
			<Material elevation="high" color="distinct">
				<slot />
			</Material>
		</slot>
	</div>
{/if}

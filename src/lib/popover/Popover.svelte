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
	export let middleware: Middleware[] = [offset(6), shift(), flip()]
	export let strategy: Strategy = 'absolute'

	let canUseContents = true

	let el: any

	const [floatingRef, floatingContent] = createFloatingActions({
		strategy: strategy,
		placement: placement,
		middleware: middleware
	})

	const customFloatingContent = (node: HTMLDivElement) => {
		// if (!canUseContents) return

		floatingContent(node)
	}

	const customFloatingRef = (node: HTMLButtonElement) => {
		const n = node.children.item(0)

		if (n) floatingRef(n)
		else {
			canUseContents = false
			floatingRef(node)
		}
	}
</script>

<svelte:body
	on:click={(e) => {
		if (openOnHover) return

		if (!el.contains(e.target)) {
			open = false
		}
	}}
/>

<button
	on:mouseover={() => (openOnHover ? (open = true) : false)}
	on:mouseleave={() => (openOnHover ? (open = false) : false)}
	on:focus={() => (openOnHover ? (open = true) : false)}
	on:focusout={() => (openOnHover ? (open = false) : false)}
	on:click={() => (!openOnHover ? (open = !open) : false)}
	on:keydown={(e) => {
		if (e.key == 'Escape') open = !open
	}}
	role="menu"
	tabindex="-1"
	class="{canUseContents ? 'contents text-left' : 'w-max h-max'} {$$props.class}"
	bind:this={el}
	use:customFloatingRef
>
	<slot name="target" />
</button>

{#if open}
	<div
		transition:fly={{ duration: 200, y: -8, easing: expoOut }}
		class="z-30 absolute {$$props.popoverClass}"
		use:customFloatingContent
	>
		<slot name="popover">
			<Material elevation="high" color="distinct" class="flex flex-col">
				<slot />
			</Material>
		</slot>
	</div>
{/if}

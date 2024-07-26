<script lang="ts">
	// https://github.com/sveltejs/svelte/issues/3088#issuecomment-505785516
	import { onMount, onDestroy, createEventDispatcher } from 'svelte'
	let slottedElements: HTMLDivElement, portal: HTMLDivElement

	const dispatch = createEventDispatcher<{ mounted: void }>()

	onMount(() => {
		portal = document?.createElement('div')
		if (portal) portal.className = 'portal-mount'
		document?.body.appendChild(portal)
		portal?.appendChild(slottedElements)
		dispatch('mounted')
	})

	onDestroy(() => {
		portal.remove()
	})
</script>

<div class="portal-initial-mount-point">
	<div bind:this={slottedElements} class="portal-content {$$props.class || ''}">
		<slot />
	</div>
</div>

<style>
	.portal-initial-mount-point {
		display: none;
	}
</style>

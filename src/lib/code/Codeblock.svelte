<script lang="ts">
	import Button from '$lib/button/Button.svelte'
	import Material from '$lib/materials/Material.svelte'
	import { Check, Icon, Clipboard } from 'svelte-hero-icons'
	import { scale } from 'svelte/transition'

	export let src: string
	export let filename: string | undefined = undefined

	let copied = false
</script>

<Material
	class="overflow-hidden flex flex-col divide-y divide-neutral-200 dark:divide-neutral-800"
	padding="none"
	rounding="md"
>
	{#if filename}
		<div class="flex flex-row items-center justify-between p-3 px-4 text-xs">
			<span>
				{filename}
			</span>
			<Button
				size="square-sm"
				color="tertiary"
				on:click={() => {
					copied = true
					navigator.clipboard.writeText(src)
					setTimeout(() => (copied = false), 2000)
				}}
			>
				<div class="relative w-full h-full grid place-items-center">
					{#if !copied}
						<div
							transition:scale={{ opacity: 0, start: 0.3 }}
							class="top-0 left-0"
							style="grid-row: 1; grid-column: 1;"
						>
							<Icon src={Clipboard} size="16" slot="prefix" />
						</div>
					{:else}
						<div
							transition:scale={{ opacity: 0, start: 0.3 }}
							class="top-0 left-0"
							style="grid-row: 1; grid-column: 1;"
						>
							<Icon src={Check} size="16" mini slot="prefix" />
						</div>
					{/if}
				</div>
			</Button>
		</div>
	{/if}
	<pre class="bg-white dark:bg-neutral-900 p-4 text-sm {$$props.class}">{src}</pre>
</Material>

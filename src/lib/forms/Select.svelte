<script lang="ts">
	import { buttonColor } from '$lib/button/Button.svelte'

	export let value: string | undefined = undefined
	export let placeholder: string | undefined = undefined
	export let label: string | undefined = undefined
</script>

<div class="flex flex-col gap-1 w-max">
	{#if $$slots.label || label}
		<span class="text-sm text-neutral-600 dark:text-neutral-400 font-medium">
			{#if $$slots.label}
				<slot name="label" />
			{:else if label}
				{label}
			{/if}
		</span>
	{/if}
	<select
		class="px-3 py-1.5 transition-colors rounded-md text-sm
    w-max min-w-full cursor-pointer bg-transparent {buttonColor.secondary}
		 {$$props.class}"
		bind:value
		{placeholder}
	>
		<slot />
	</select>
</div>

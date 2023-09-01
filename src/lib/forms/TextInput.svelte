<script lang="ts">
	type Size = keyof typeof sizeClass

	const sizeClass = {
		sm: 'px-2 py-1',
		md: 'px-3 py-1.5',
		lg: 'px-4 py-2'
	}

	export let label: string | undefined = undefined
	export let value: string = ''
	export let placeholder: string = ''
	export let size: Size = 'md'
</script>

<div class="flex flex-col gap-1">
	{#if $$slots.label}
		<span class="text-sm text-neutral-600 dark:text-neutral-400 font-medium">
			<slot name="label" />
		</span>
	{:else if label}
		<span class="text-sm text-neutral-600 dark:text-neutral-400 font-medium">{label}</span>
	{/if}
	<input
		type="text"
		{placeholder}
		bind:value
		on:input
		on:change
		class="{sizeClass[size]} bg-white dark:bg-neutral-950 border rounded-md
    border-neutral-200 dark:border-neutral-800 focus:border-neutral-800
    focus:dark:border-neutral-200 focus:outline-none focus:ring-2 ring-neutral-800/50
    dark:ring-neutral-200/50 transition-all text-sm {$$props.class}"
		{...$$restProps}
	/>
</div>

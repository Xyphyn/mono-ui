<script lang="ts">
	type Size = keyof typeof sizeClass

	const sizeClass = {
		sm: 'px-3 py-1.5',
		md: 'px-4 py-2',
		lg: 'px-5 py-3'
	}

	export let label: string | undefined = undefined
	export let value: string = ''
	export let placeholder: string = ''
	export let size: Size = 'md'

	const borderClass = `
	border border-neutral-200 dark:border-neutral-800
	`
</script>

<div class="flex flex-col gap-1">
	{#if $$slots.label}
		<span class="text-sm text-neutral-600 dark:text-neutral-400 font-medium">
			<slot name="label" />
		</span>
	{:else if label}
		<span class="text-sm text-neutral-600 dark:text-neutral-400 font-medium">{label}</span>
	{/if}
	<div class="rounded-md flex flex-row items-center w-full {$$props.class}">
		{#if $$slots.prefix}
			<div
				class="rounded-md rounded-r-none border {borderClass}
			border-r-0 text-neutral-600 dark:text-neutral-400 {sizeClass[size]}"
			>
				<slot name="prefix" />
			</div>
		{/if}
		<input
			type="text"
			{placeholder}
			bind:value
			on:input
			on:change
			{...$$restProps}
			class="{sizeClass[size]} {borderClass} focus:border-neutral-800
			focus:dark:border-neutral-200 bg-white dark:bg-black
     focus:outline-none focus:ring-2 ring-neutral-800/50 rounded-md
    dark:ring-neutral-200/50 transition-all text-sm max-w-full {$$props.class}"
			class:rounded-l-none={$$slots.prefix}
			class:rounded-r-none={$$slots.suffix}
		/>
		{#if $$slots.suffix}
			<div
				class="rounded-md rounded-l-none border {borderClass}
			border-l-0 text-neutral-600 dark:text-neutral-400 {sizeClass[size]}"
			>
				<slot name="suffix" />
			</div>
		{/if}
	</div>
</div>

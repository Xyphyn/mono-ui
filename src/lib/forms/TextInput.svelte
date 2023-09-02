<script lang="ts">
	import { buttonColor } from '$lib/button/Button.svelte'

	type Size = keyof typeof sizeClass

	const sizeClass = {
		sm: 'px-3 py-1.5',
		md: 'px-4 py-2',
		lg: 'px-5 py-3'
	}

	export let label: string | undefined = undefined
	export let value: string = ''
	export let placeholder: string = ''
	export let disabled: boolean = false
	export let size: Size = 'md'
	export let id: number = Math.floor(Math.random() * 100000000)

	const borderClass = `
	border border-neutral-200 dark:border-neutral-800
	`
</script>

<div class="flex flex-col gap-1">
	{#if $$slots.label || label}
		<label for={id.toString()} class="text-sm text-neutral-600 dark:text-neutral-400 font-medium">
			{#if $$slots.label}
				<slot name="label" />
			{:else if label}
				{label}
			{/if}
		</label>
	{/if}
	<div class="rounded-md flex flex-row items-center w-full text-sm {$$props.class}">
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
			id={id.toString()}
			{placeholder}
			{disabled}
			bind:value
			on:input
			on:change
			{...$$restProps}
			class="{sizeClass[size]} {borderClass} hover:bg-white focus:border-neutral-800
			focus:dark:border-neutral-200 bg-white dark:bg-black
     focus:outline-none focus:ring-2 ring-neutral-800/50 rounded-md
    dark:ring-neutral-200/50 transition-all text-sm max-w-full disabled:bg-neutral-100
		disabled:cursor-not-allowed disabled:dark:bg-neutral-800 {$$props.class}"
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

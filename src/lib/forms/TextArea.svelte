<script context="module" lang="ts">
	export type Size = keyof typeof sizeClass

	export const sizeClass = {
		sm: 'p-3',
		md: 'p-4',
		lg: 'p-5'
	}
</script>

<script lang="ts">
	import Label from '$lib/forms/Label.svelte'
	import { generateID } from '$lib/forms/helper.js'

	export let label: string | undefined = undefined
	export let value: string = ''
	export let placeholder: string = ''
	export let disabled: boolean = false
	export let required: boolean = false
	export let size: Size = 'md'
	export let id: string = generateID()
	export let rows: number = 4

	const borderClass = `
	border border-gray-200 dark:border-gray-800
	`
</script>

<div class="flex flex-col gap-1 {$$props.class}">
	{#if $$slots.label || label}
		<Label
			for={id}
			text={label}
			class="peer-invalid:text-red-500 {required
				? "after:content-['*'] after:text-red-500 after:ml-1"
				: ''}"
		>
			<slot name="label" />
		</Label>
	{/if}
	<div
		class="rounded-md flex flex-col items-center text-sm bg-white dark:bg-gray-950 {$$props.class}"
	>
		<textarea
			{id}
			{placeholder}
			{disabled}
			{rows}
			bind:value
			on:input
			on:change
			on:focus
			{...$$restProps}
			class="{sizeClass[size]} {borderClass} focus:border-gray-800
			focus:dark:border-gray-200 bg-white dark:bg-gray-950
		 focus:outline-none focus:ring-2 ring-gray-800/50 rounded-md
		dark:ring-gray-200/50 transition-all text-sm w-full disabled:bg-gray-100
		disabled:cursor-not-allowed disabled:dark:bg-gray-900 invalid:!border-red-500
		peer invalid:text-red-500 z-10
		{$$props.class || ''}"
			class:rounded-b-none={$$slots.suffix}
			class:border-b-0={$$slots.suffix}
		/>
		{#if $$slots.suffix}
			<div
				class="{borderClass} {sizeClass[size]} w-full border-t-0 rounded-md rounded-t-none
      flex items-center"
			>
				<slot name="suffix" />
			</div>
		{/if}
	</div>
	<slot />
</div>

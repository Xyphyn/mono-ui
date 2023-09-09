<script context="module" lang="ts">
	export type Size = keyof typeof sizeClass
	export type Shadow = keyof typeof shadowClass

	export const sizeClass = {
		sm: 'px-3 py-1.5',
		md: 'px-4 py-2',
		lg: 'px-5 py-3'
	}

	export const shadowClass = {
		sm: 'shadow-sm',
		none: 'shadow-none'
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
	export let inlineAffixes: boolean = false
	export let shadow: Shadow = 'sm'

	const borderClass = `
	border border-slate-200 dark:border-zinc-800
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
	<div class="{shadowClass[shadow]} flex flex-row items-center text-sm {$$props.class}">
		{#if $$slots.prefix}
			<div
				class="rounded-md rounded-r-none border {borderClass}
			border-r-0 text-slate-600 dark:text-zinc-400 {inlineAffixes
					? 'bg-white dark:bg-zinc-950 pr-0 w-8'
					: ''} {sizeClass[size]}"
			>
				<slot name="prefix" />
			</div>
		{/if}
		<input
			type="text"
			{id}
			{placeholder}
			{disabled}
			bind:value
			on:input
			on:change
			on:focus
			{...$$restProps}
			class="{sizeClass[size]} {borderClass} focus:border-slate-800
			focus:dark:border-zinc-200 bg-white dark:bg-zinc-950
		 focus:outline-none focus:ring-2 ring-slate-800/50 rounded-md
		dark:ring-zinc-200/50 transition-all text-sm w-full disabled:bg-slate-100
		disabled:cursor-not-allowed disabled:dark:bg-zinc-900 invalid:!border-red-500
		peer invalid:text-red-500 z-10
		{$$props.class || ''}"
			class:rounded-l-none={$$slots.prefix}
			class:border-l-0={$$slots.prefix && inlineAffixes}
			class:rounded-r-none={$$slots.suffix}
			class:border-r-0={$$slots.suffix && inlineAffixes}
		/>
		{#if $$slots.suffix}
			<div
				class="rounded-md rounded-l-none border {borderClass}
			border-l-0 text-slate-600 dark:text-zinc-400 {inlineAffixes
					? 'bg-white dark:bg-zinc-950 pl-0'
					: ''} {sizeClass[size]}"
			>
				<slot name="suffix" />
			</div>
		{/if}
	</div>
	<slot />
</div>

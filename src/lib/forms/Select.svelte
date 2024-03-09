<script lang="ts">
	import {
		buttonColor,
		buttonSize,
		type ButtonShadow,
		type ButtonSize,
		buttonShadow
	} from '$lib/button/Button.svelte'
	import Label from '$lib/forms/Label.svelte'
	import { generateID } from '$lib/forms/helper.js'
	import { ChevronDown, ChevronUpDown, Icon } from 'svelte-hero-icons'

	export let value: string | undefined = undefined
	export let placeholder: string | undefined = undefined
	export let label: string | undefined = undefined
	export let size: ButtonSize = 'md'
	export let shadow: ButtonShadow = 'none'

	export let id: string = generateID()
</script>

<div class="flex flex-col gap-1 {$$props.class}">
	{#if $$slots.label || label}
		<Label for={id} text={label}>
			<slot name="label" />
		</Label>
	{/if}

	<div class="w-full relative">
		<select
			{id}
			class="{buttonSize[size]} {buttonShadow[
				shadow
			]} {buttonColor.secondary} appearance-none transition-colors rounded-lg text-sm
	w-full min-w-full cursor-pointer pr-6 {buttonColor.secondary}
	{$$props.class}"
			bind:value
			on:change
			on:contextmenu
			on:input
			{placeholder}
		>
			{#if placeholder}
				<option disabled selected value="">{placeholder}</option>
			{/if}
			<slot />
		</select>
		<Icon
			src={ChevronUpDown}
			mini
			size="16"
			class="absolute right-0 top-1/4 mx-2 box-border pointer-events-none"
		/>
	</div>
</div>

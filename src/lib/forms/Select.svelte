<script lang="ts">
	import { buttonColor } from '$lib/button/Button.svelte'
	import Label from '$lib/forms/Label.svelte'
	import { generateID } from '$lib/forms/helper.js'

	export let value: string | undefined = undefined
	export let placeholder: string | undefined = undefined
	export let label: string | undefined = undefined

	export let id: string = generateID()
</script>

<div class="flex flex-col gap-1 {$$props.class}">
	{#if $$slots.label || label}
		<Label for={id} text={label}>
			<slot name="label" />
		</Label>
	{/if}
	<select
		{id}
		class="px-3 py-1.5 transition-colors rounded-md text-sm
    w-full min-w-full cursor-pointer bg-transparent {buttonColor.secondary}
		 {$$props.class}"
		bind:value
		{placeholder}
	>
		<slot />
	</select>
</div>

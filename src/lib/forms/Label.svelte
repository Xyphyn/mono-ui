<script lang="ts">
	let forID: string
	export { forID as for }
	/**
	 * The `text` prop will take precedence over the slot.
	 */
	export let text: string | undefined = undefined
</script>

<label
	{...$$restProps}
	for={forID}
	class="text-sm text-gray-600 dark:text-gray-400 font-medium {$$props.class}"
>
	{#if text}
		{text}
	{:else if $$slots.default}
		<slot />
	{/if}
</label>

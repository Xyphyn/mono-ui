<script lang="ts">
	import { Menu, TextInput, Spinner, MenuButton } from '$lib/index.js'
	import { debounce } from '$lib/util/time.js'
	import { createEventDispatcher } from 'svelte'

	export let query: string = ''

	type T = $$Generic
	let items: T[] = []

	export let selected: T | undefined = undefined

	export let search: (query: string) => Promise<T[]>
	export let extractName: (item: T) => string

	/**
	 * This is here so that the menu doesn't open as soon as it's mounted.
	 */
	let openMenu = false
	let searching = false

	const dispatcher = createEventDispatcher<{ input: Event; select: T | undefined }>()

	export let select = (item: T) => {
		selected = item
		query = extractName(item)
		dispatcher('select', item)
	}

	const debounceFunc = debounce(async () => {
		openMenu = true
		searching = true
		items = await search(query)
		searching = false
	})
</script>

<div class="relative">
	<slot name="input">
		<TextInput
			bind:value={query}
			on:input={(e) => {
				searching = true
				openMenu = true
				dispatcher('input', e)
				debounceFunc()
			}}
			on:focus={(e) => {
				searching = true
				openMenu = true
				dispatcher('input', e)
				debounceFunc()
			}}
			{...$$restProps}
		/>
	</slot>
	<Menu origin="bottom-left" bind:open={openMenu}>
		{#if searching}
			<div class="w-full h-24 grid place-items-center">
				<Spinner width={24} />
			</div>
		{:else if items.length == 0}
			<div class="text-center h-24 grid place-items-center">
				<slot name="noresults">No results found.</slot>
			</div>
		{:else}
			{#each items as item}
				<slot {extractName} {item} {dispatcher} {select}>
					<MenuButton on:click={() => select(item)}>
						{extractName(item)}
					</MenuButton>
				</slot>
			{/each}
		{/if}
	</Menu>
</div>

<script lang="ts">
	import { page } from '$app/stores'
	import Button from '$lib/button/Button.svelte'
	import Routebar from '$lib/nav/Routebar.svelte'
	import { ChevronDoubleLeft, ChevronDoubleRight, Icon } from 'svelte-hero-icons'

	const toPathName = (url: URL) => `${url.pathname}${url.hash}`

	$: currentRoute = toPathName($page.url)

	let expanded = false
</script>

<div class="md:hidden">
	<Button on:click={() => (expanded = !expanded)} size="square-md">
		<Icon src={ChevronDoubleRight} size="16" slot="prefix" mini />
	</Button>
</div>

<div
	class="{expanded
		? 'flex'
		: 'hidden'} md:flex w-1/2 md:w-1/4 h-full border-r px-2 flex-col gap-4 fixed md:sticky
		top-20 left-0 bg-neutral-50 dark:bg-neutral-950 border-neutral-200 dark:border-neutral-800"
>
	<div class="md:hidden flex flex-col gap-2">
		<span class="text-sm font-medium">Navigation</span>
		<Button on:click={() => (expanded = !expanded)} size="square-md">
			<Icon src={ChevronDoubleLeft} size="16" slot="prefix" mini />
		</Button>
	</div>
	<div class="flex flex-col gap-2">
		<Routebar
			{currentRoute}
			routes={[
				{
					name: 'Components',
					url: '/docs/components',
					children: [
						{
							url: '/docs/components/button',
							name: 'Button'
						},
						{
							url: '/docs/components/popover',
							name: 'Popover'
						},
						{
							url: '/docs/components/codeblock',
							name: 'Code Blocks'
						},
						{
							url: '/docs/components/forms',
							name: 'Forms',
							children: [
								{
									url: '/docs/components/forms/textinput',
									name: 'Text Input'
								}
							]
						}
					]
				}
			]}
		/>
	</div>
</div>

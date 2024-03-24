<script lang="ts">
	import './catppuccin.css'
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
		: 'hidden'} md:flex w-1/2 md:w-1/4 h-full max-h-[100vh-160px] overflow-auto border-r px-2 flex-col gap-4 fixed md:sticky
		top-20 left-0 bg-slate-50 dark:bg-zinc-950 border-slate-200 dark:border-zinc-800 z-20"
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
					name: 'Getting Started',
					url: '/docs/start#installation',
					children: [
						{
							url: '/docs/start#installation',
							name: 'Installation'
						},
						{
							url: '/docs/start#setup-tailwindcss',
							name: 'Setup Tailwind'
						},
						{
							url: '/docs/start#inter',
							name: 'Inter Font'
						}
					]
				},
				{
					name: 'Components',
					url: '/docs/components',
					children: [
						{
							url: '/docs/components/button',
							name: 'Button'
						},
						{
							url: '/docs/components/badge',
							name: 'Badge'
						},
						{
							url: '/docs/components/codeblock',
							name: 'Code Blocks'
						},
						{
							url: '/docs/components/disclosure',
							name: 'Disclosure'
						},
						{
							url: '/docs/components/forms',
							name: 'Forms',
							children: [
								{
									url: '/docs/components/forms/checkbox',
									name: 'Checkbox'
								},
								{
									url: '/docs/components/forms/textinput',
									name: 'Text Input'
								},
								{
									url: '/docs/components/forms/fileinput',
									name: 'File Input'
								},
								{
									url: '/docs/components/forms/select',
									name: 'Select Menus'
								},
								{
									url: '/docs/components/forms/radio',
									name: 'Radio Inputs'
								}
							]
						},
						{
							url: '/docs/components/materials',
							name: 'Materials'
						},
						{
							url: '/docs/components/modal',
							name: 'Modal'
						},
						{
							url: '/docs/components/placeholder',
							name: 'Placeholder'
						},
						{
							url: '/docs/components/popover',
							name: 'Popover'
						},
						{
							url: '/docs/components/search',
							name: 'Search'
						},
						{
							url: '/docs/components/toasts',
							name: 'Toasts'
						}
					]
				}
			]}
		/>
	</div>
</div>

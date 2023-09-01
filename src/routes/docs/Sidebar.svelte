<script lang="ts">
	import { page } from '$app/stores'
	import Routebar from '$lib/nav/Routebar.svelte'

	const toPathName = (url: URL) => `${url.pathname}${url.hash}`

	$: currentRoute = toPathName($page.url)
	$: console.log(currentRoute)
</script>

<div class="w-1/4 h-full border-r px-2 flex flex-col gap-4 sticky top-0 left-0">
	<div class="flex flex-col gap-2">
		<Routebar
			{currentRoute}
			routes={[
				{
					name: 'Getting Started',
					url: '/docs/getting-started',
					children: [
						{
							url: '/docs/getting-started#installation',
							name: 'Installation'
						},
						{
							url: '/docs/getting-started#test',
							name: 'Test'
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
							url: '/docs/getting-started#snippet',
							name: 'Snippet'
						}
					]
				}
			]}
		/>
	</div>
</div>

<script lang="ts">
	import Snippet from '$lib/code/Snippet.svelte'
	import Button from './../lib/button/Button.svelte'
	import { ArrowRight, Check, Icon } from 'svelte-hero-icons'
</script>

<div class="grid md:grid-cols-2 gap-6 max-w-full min-w-0">
	<div class="flex flex-col gap-6 col-span-1 w-full min-w-0">
		<h1 class="font-black text-5xl">
			A Svelte UI library for <span
				class="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-pink-600"
			>
				everything
			</span>
		</h1>
		<p class="text-slate-600 dark:text-zinc-400 text-lg">
			Whether it's a landing page or a big web app, Mono is a great choice for any project. It
			follows best Svelte practices-with a low bundle size.
		</p>
		<div class="flex flex-col sm:flex-row gap-4 w-full">
			<Snippet value="npm i mono-svelte" class="h-12" />
			<Button
				class="w-max bg-gradient-to-br from-violet-500 to-pink-600 text-white hover:brightness-110"
				color="none"
				size="xl"
				href="/docs/components"
			>
				Components
				<Icon src={ArrowRight} mini size="16" slot="suffix" />
			</Button>
		</div>
	</div>
</div>

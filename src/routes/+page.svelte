<script lang="ts">
	import Button from './../lib/button/Button.svelte'
</script>

<div class="grid md:grid-cols-2">
	<div class="flex flex-col gap-6">
		<h1 class="font-black text-5xl">
			A Svelte UI library for <span
				class="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-pink-600"
			>
				everything
			</span>
		</h1>
		<p class="text-neutral-600 dark:text-neutral-400 text-lg">
			Whether it's a landing page or a big web app, Mono is a great choice for any project. It
			follows best Svelte practices-with a low bundle size.
		</p>
		<Button class="w-max">View the Docs</Button>
	</div>
	<div class="flex flex-col" />
</div>

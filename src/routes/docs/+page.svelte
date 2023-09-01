<script context="module">
	import Sidebar from './Sidebar.svelte'
	import h1 from './components/h1.svelte'
	import h2 from './components/h2.svelte'
	import h3 from './components/h3.svelte'
	import p from './components/p.svelte'
	import code from './components/code.svelte'

	export { h1, h2, h3, p, code }
</script>

<div class="flex w-full h-full gap-6">
	<Sidebar />
	<article class="w-full h-full p-3 flex flex-col gap-2 flex-1 max-w-full min-w-0">
		<slot />
	</article>
</div>

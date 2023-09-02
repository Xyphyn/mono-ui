<script lang="ts">
	import '../style/app.css'
	import Navbar from './page/components/Navbar.svelte'
</script>

<svelte:head><title>Mono UI</title></svelte:head>

<div class="flex flex-col max-w-full min-w-0 min-h-screen">
	<Navbar />
	<div class="box-border max-w-full p-4 md:p-6 lg:p-8 overlfow-scroll flex-1 min-w-0 h-full">
		<slot />
	</div>
	<footer
		class="mt-auto p-6 bg-gray-100 dark:bg-black border-t
	 border-gray-200 dark:border-gray-800"
	>
		Mono
	</footer>
</div>

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
</div>

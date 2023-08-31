<script lang="ts">
	import '../style/app.css'
	import Navbar from './page/components/Navbar.svelte'
</script>

<Navbar />
<div class="p-6">
	<slot />
</div>

<script lang="ts">
	import { headerID } from './header.js'

	export let id: string | undefined = undefined
</script>

<h1 use:headerID {id} class="font-bold text-3xl my-3 mt-4 leading-10">
	<slot />
</h1>

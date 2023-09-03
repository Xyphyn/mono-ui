<script lang="ts">
	import { Material } from '$lib/index.js'
</script>

<Material padding="lg" class="flex flex-row flex-wrap gap-8 items-start {$$props.class}">
	<slot />
</Material>

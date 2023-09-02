<script lang="ts">
	export let defaultValue: boolean = false
	export let checked: boolean | undefined = defaultValue
</script>

<label class="font-normal cursor-pointer text-sm">
	<input type="checkbox" bind:checked class="cursor-pointer" />
	<slot />
</label>

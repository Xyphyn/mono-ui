<script lang="ts">
	export let label: string = ''

	const badgeColor = {
		red: 'bg-red-500 text-white',
		green: 'bg-green-500 text-white',
		yellow: 'bg-yellow-500 text-black',
		gray: 'bg-gray-600 text-white',
		'red-subtle': 'bg-red-200 dark:bg-red-900 text-red-800 dark:text-red-300',
		'green-subtle': 'bg-green-200 dark:bg-green-900 text-green-800 dark:text-green-300',
		'yellow-subtle': 'bg-yellow-200 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-300',
		'gray-subtle': 'bg-slate-200 dark:bg-zinc-800 text-gray-800 dark:text-gray-200'
	}

	type BadgeColor = keyof typeof badgeColor

	export let color: BadgeColor = 'gray-subtle'
</script>

<span
	class="px-2 py-0.5 rounded-full text-xs font-bold flex items-center gap-1 {badgeColor[
		color
	]} {$$props.class}"
	title={label}
>
	<slot />
</span>

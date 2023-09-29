<script lang="ts">
	export let label: string = ''

	const badgeColor = {
		red: 'bg-red-500 text-white ring-0',
		green: 'bg-green-500 text-white dark:text-black ring-0',
		yellow: 'bg-yellow-500 text-black ring-0',
		gray: 'bg-gray-600 text-white ring-0',
		blue: 'bg-blue-500 text-white ring-0',
		purple: 'bg-purple-500 text-white ring-0',
		'red-subtle': `bg-red-100 dark:bg-red-500/20 text-red-800 dark:text-red-400
		ring-red-400 dark:ring-red-500/30`,
		'green-subtle': `bg-green-100 dark:bg-green-500/20 text-green-800 dark:text-green-400
		ring-green-400 dark:ring-green-500/30`,
		'yellow-subtle': `bg-yellow-100 dark:bg-yellow-500/20 text-yellow-800 dark:text-yellow-400
		ring-yellow-400 dark:ring-yellow-500/30`,
		'gray-subtle': `bg-gray-100 dark:bg-gray-500/20 text-gray-800 dark:text-gray-300
		ring-gray-400 dark:ring-gray-400/30`,
		'blue-subtle': `bg-blue-100 dark:bg-blue-500/20 text-blue-800 dark:text-blue-300
		ring-blue-400 dark:ring-blue-400/30`,
		'purple-subtle': `bg-purple-100 dark:bg-purple-500/20 text-purple-800 dark:text-purple-400
		ring-purple-400 dark:ring-purple-500/30`,
		custom: ''
	}

	const badgeRoundness = {
		full: 'rounded-full',
		md: 'rounded-md',
		custom: ''
	}

	type BadgeColor = keyof typeof badgeColor
	type BadgeRoundness = keyof typeof badgeRoundness

	export let color: BadgeColor = 'gray-subtle'
	export let rounding: BadgeRoundness = 'full'
</script>

<span
	class="px-2.5 py-1 {badgeRoundness[
		rounding
	]} text-xs font-medium flex items-center gap-1 ring-1 ring-inset {badgeColor[
		color
	]} {$$props.class}"
	title={label}
>
	<slot />
</span>

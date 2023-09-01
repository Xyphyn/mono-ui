<script lang="ts">
	type Elevation = keyof typeof elevationClass
	type Padding = keyof typeof paddingClass
	type Rounding = keyof typeof roundedClass
	type Color = keyof typeof colorClass

	const elevationClass = {
		flat: '',
		low: 'shadow-xs',
		medium: 'shadow-sm',
		high: 'shadow-md',
		xhigh: 'shadow-lg',
		max: 'shadow-xl'
	}

	const paddingClass = {
		none: 'p-0',
		sm: 'p-2',
		md: 'p-4',
		lg: 'p-5',
		xl: 'p-6'
	}

	const roundedClass = {
		none: 'rounded-none',
		sm: 'rounded-sm',
		md: 'rounded-md',
		lg: 'rounded-lg',
		xl: 'rounded-xl',
		'2xl': 'rounded-2xl'
	}

	const colorClass = {
		default: 'bg-neutral-50 dark:bg-neutral-950',
		distinct: 'bg-white dark:bg-neutral-950'
	}

	export let elevation: Elevation = 'flat'
	export let padding: Padding = 'md'
	export let rounding: Rounding = 'lg'
	export let color: Color = 'default'
</script>

<div
	class="{elevationClass[elevation]}
  {paddingClass[padding]}
  {roundedClass[rounding]}
  {colorClass[color]}
  border border-neutral-200 dark:border-neutral-800
  {$$props.class}
  "
>
	<slot />
</div>

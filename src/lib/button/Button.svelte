<script context="module" lang="ts">
	export type ButtonColor = keyof typeof buttonColor
	export type ButtonAlignment = keyof typeof buttonAlignment

	export const buttonAlignment = {
		left: 'justify-start text-left',
		center: 'justify-center text-center',
		right: 'justify-end text-right'
	}

	export const buttonColor = {
		primary: `border border-primary-900 bg-primary-900 dark:bg-primary-100
	dark:border-primary-100 dark:text-primary-900 hover:text-inherit text-primary-100
	hover:bg-transparent hover:dark:bg-transparent active:text-inherit
	active:bg-primary-900/10 active:dark:bg-primary-100/10`,

		secondary: `border border-gray-200 dark:border-gray-700 dark:bg-gray-900
		hover:bg-gray-100 hover:dark:bg-gray-800 hover:dark:border-gray-700 dark:text-gray-300 hover:text-inherit
		hover:dark:text-inherit`,

		tertiary:
			'border border-transparent bg-transparent hover:bg-gray-100 hover:dark:bg-gray-800 dark:text-gray-200',

		danger: 'border border-red-500 bg-red-500 hover:text-red-500 hover:bg-transparent text-white',

		ghost: `border border-gray-200 dark:border-gray-800 bg-transparent
		hover:bg-gray-100 hover:dark:bg-gray-800 hover:dark:border-gray-700 dark:text-gray-400 hover:text-inherit
		hover:dark:text-inherit`,

		elevated: `bg-gray-100 dark:bg-gray-800 border border-gray-200
	 dark:border-gray-700 hover:bg-gray-200 hover:dark:bg-gray-700 hover:border-gray-300
	 hover:dark:border-gray-600`,

		elevatedLow: `bg-gray-100 dark:bg-gray-900 border border-gray-200
	dark:border-gray-800 hover:bg-gray-200 hover:dark:bg-gray-800 hover:border-gray-300
	hover:dark:border-gray-700`,

		none: ''
	}

	export type ButtonSize = keyof typeof buttonSize

	export const buttonSize = {
		sm: 'px-2 py-1',
		md: 'px-3 py-1.5',
		lg: 'px-4 py-2',
		xl: 'px-6 py-3',
		'square-sm': 'w-6 h-6',
		'square-md': 'w-8 h-8',
		'square-lg': 'w-10 h-10',
		'square-xl': 'w-12 h-12',
		custom: ''
	}
</script>

<script lang="ts">
	import Spinner from '$lib/loader/Spinner.svelte'

	type ButtonRoundness = keyof typeof buttonRoundness

	const buttonRoundness = {
		pill: 'rounded-full',
		lg: 'rounded-lg',
		md: 'rounded-md',
		none: ''
	}

	export let loading = false
	export let submit = false

	export let color: ButtonColor = 'secondary'
	export let size: ButtonSize = 'md'
	export let rounding: ButtonRoundness = 'md'
	export let alignment: ButtonAlignment = 'center'
	export let column: boolean = false

	export let loaderWidth: number | undefined = undefined

	export let href: string | undefined = undefined
</script>

<svelte:element
	this={href ? 'a' : 'button'}
	role={href ? 'link' : 'button'}
	{href}
	{...$$restProps}
	on:click
	class="
      {buttonColor[color]}
      {buttonSize[size]}
      {buttonRoundness[rounding]}
      text-sm transition-all disabled:!opacity-70 disabled:!pointer-events-none
      disabled:!border disabled:!border-slate-300 disabled:!bg-neutral-200
      disabled:dark:!border-neutral-700 disabled:dark:!bg-neutral-800 disabled:text-inherit
      font-medium cursor-pointer
      {$$props.class}
     {loading ? (color == 'primary' ? '!bg-transparent !text-inherit' : '') : ''}"
	type={submit ? 'submit' : 'button'}
>
	<div
		class="flex {column
			? 'flex-col justify-center'
			: 'flex-row items-center'} gap-1.5 {buttonAlignment[alignment]}"
	>
		{#if loading}
			<Spinner
				width={loaderWidth
					? loaderWidth
					: size == 'lg'
					? 20
					: size == 'md'
					? 18
					: size == 'sm'
					? 16
					: 16}
			/>
		{:else if $$slots.prefix}
			<slot name="prefix" />
		{/if}
		<slot />
		<slot name="suffix" />
	</div>
</svelte:element>

<!--
  @component
  
  @slot `prefix` -- Will be replaced if `loading` is `true`.
  @slot `suffix`
-->

<script lang="ts">
	import Spinner from '$lib/loader/Spinner.svelte'

	type ButtonColor = keyof typeof buttonColor
	type ButtonSize = keyof typeof buttonSize
	type ButtonRoundness = keyof typeof buttonRoundness
	type ButtonAlignment = keyof typeof buttonAlignment

	const buttonAlignment = {
		left: 'justify-start text-left',
		center: 'justify-center text-center',
		right: 'justify-end text-right'
	}

	const buttonColor = {
		primary: `border border-slate-900 bg-slate-900 dark:bg-neutral-100
    dark:border-neutral-100 dark:text-black hover:text-inherit text-slate-100
    hover:bg-transparent hover:dark:bg-transparent active:text-inherit
    active:bg-black/10 active:dark:bg-white/10`,

		secondary: `border border-slate-200 dark:border-neutral-700 dark:bg-neutral-900
      hover:bg-slate-100 hover:dark:bg-neutral-800 hover:dark:border-neutral-700 dark:text-neutral-300 hover:text-inherit
      hover:dark:text-inherit`,

		tertiary:
			'border border-transparent bg-transparent hover:bg-slate-100 hover:dark:bg-neutral-800 dark:text-neutral-200',

		danger: 'border border-red-500 bg-red-500 hover:text-red-500 hover:bg-transparent text-white',

		ghost: `border border-slate-200 dark:border-neutral-800 bg-transparent
      hover:bg-slate-100 hover:dark:bg-neutral-800 hover:dark:border-neutral-700 dark:text-neutral-400 hover:text-inherit
      hover:dark:text-inherit`,

		elevated: `bg-slate-100 dark:bg-neutral-800 border border-slate-200
     dark:border-neutral-700 hover:bg-slate-200 hover:dark:bg-neutral-700 hover:border-slate-300
     hover:dark:border-neutral-600`,

		elevatedLow: `bg-slate-100 dark:bg-neutral-900 border border-slate-200
    dark:border-neutral-800 hover:bg-slate-200 hover:dark:bg-neutral-800 hover:border-slate-300
    hover:dark:border-neutral-700`,

		none: ''
	}

	const buttonSize = {
		sm: 'px-2 py-1',
		md: 'px-3 py-1.5',
		lg: 'px-4 py-2',
		xl: 'px-6 py-3',
		'square-sm': 'w-6 h-6',
		'square-md': 'w-8 h-8',
		'square-lg': 'w-10 h-10',
		custom: ''
	}

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
	export let rounded: ButtonRoundness = 'md'
	export let alignment: ButtonAlignment = 'center'

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
      {buttonRoundness[rounded]}
      text-sm transition-all disabled:!opacity-70 disabled:!pointer-events-none
      disabled:!border disabled:!border-slate-300 disabled:!bg-slate-200
      disabled:dark:!border-zinc-700 disabled:dark:!bg-zinc-800 disabled:text-inherit
      font-medium cursor-pointer
      {$$props.class}
     {loading ? (color == 'primary' ? '!bg-transparent !text-inherit' : '') : ''}"
	type={submit ? 'submit' : 'button'}
>
	<div class="flex flex-row items-center gap-1.5 {buttonAlignment[alignment]}">
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

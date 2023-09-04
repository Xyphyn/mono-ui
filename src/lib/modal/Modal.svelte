<script lang="ts">
	import { Button } from '$lib/index.js'
	import { createEventDispatcher } from 'svelte'
	import { Icon, XMark } from 'svelte-hero-icons'
	import { expoOut } from 'svelte/easing'
	import { fade, scale } from 'svelte/transition'

	export let action: string | undefined = undefined
	export let open = false
	export let title: string | undefined = undefined

	let el: any

	const dispatcher = createEventDispatcher()
</script>

{#if open}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
	<div
		role="dialog"
		class="overflow-hidden fixed top-0 left-0 w-screen h-screen z-50
flex flex-col items-center justify-center bg-black/50 box-border p-4"
		transition:fade|global={{ duration: 200 }}
		on:click={(e) => {
			if (!el.contains(e.target)) open = false
		}}
	>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			transition:scale|global={{ start: 0.95, easing: expoOut }}
			class="overflow-y-auto {$$props.class} rounded-xl max-w-full box-border w-full overscroll-contain"
		>
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<div
				bind:this={el}
				class="w-full dark:bg-zinc-950 rounded-xl max-w-xl box-border mx-auto overscroll-contain shadow-xl"
			>
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div
					class="p-6 rounded-xl flex flex-col gap-4 w-full dark:bg-zinc-950
          bg-white border border-slate-200 dark:border-zinc-800"
					class:rounded-b-none={action}
					class:border-b-0={action}
				>
					<div
						class="flex flex-row max-w-full sticky top-0 left-0 dark:bg-zinc-950
          bg-white"
					>
						<h1 class="font-bold text-2xl w-max max-w-full">
							{#if $$slots.title}
								<slot name="title" />
							{:else if title}
								{title}
							{/if}
						</h1>
						<Button size="square-md" class="ml-auto" on:click={() => (open = false)}>
							<Icon src={XMark} mini size="16" />
						</Button>
					</div>
					<slot />
				</div>
				{#if action}
					<div
						class="border bg-slate-50 dark:bg-zinc-900 dark:border-zinc-800 p-3 py-2 flex justify-end rounded-b-xl"
					>
						<slot name="action">
							<Button on:click={(e) => dispatcher('action', e)} color="primary" size="lg">
								{action}
							</Button>
						</slot>
					</div>
				{/if}
			</div>
		</div>
	</div>
{/if}

import adapter from '@sveltejs/adapter-auto'
import { mdsvex } from 'mdsvex'
import { vitePreprocess } from '@sveltejs/kit/vite'
import p from 'prismjs'
import 'prism-svelte'
import escape from 'html-escape'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md', '.svx'],
			layout: './src/routes/docs/+page.svelte',
			smartypants: {
				dashes: 'oldschool'
			},
			highlight: {
				highlighter: (code, lang) => {
					if (lang && p.languages[lang]) {
						const parsed = p
							.highlight(code, p.languages[lang])
							.replace(/{/g, '&#123;')
							.replace(/}/g, '&#125;')
						const langTag = 'language-' + lang
						const codeTag = `<code class="${langTag}">${parsed}</code>`
						const pre = codeTag
						// i don't even know why i turn the html to a string just to parse it out again
						// it's the only thing to make this work
						return `<Components.Codeblock class=${langTag} filename="${lang}">{@html \`${pre}\`}</Components.Codeblock>`
					} else {
						return
						const escaped = code.replace(/{/g, '&#123;').replace(/}/g, '&#125;')
						const pre = escape(`<code>${escaped}</code>`)
						return `<Components.Codeblock filename="${lang}">${pre}</Components.Codeblock>`
					}
				}
			}
		})
	],
	extensions: ['.svelte', '.md', '.svx'],

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	}
}

export default config

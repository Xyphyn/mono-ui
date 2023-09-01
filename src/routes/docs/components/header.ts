export const headerID = (node: HTMLHeadingElement) => {
	node.id = node.innerText
		.trim()
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
}

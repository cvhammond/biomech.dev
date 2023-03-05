import { visit } from 'unist-util-visit'
import { fromHtml } from 'hast-util-from-html'

const autolink = (options) => {
    return (tree) => {
        visit(tree, 'element', (node) => {
            if (node.tagName === 'div' || node.tagName === 'p' || node.tagName === 'span') {
                for (let i = 0; i < node.children.length; i++) {
                    if (node.children[i].type === 'text') {
                        node.children[i] = findLinks(node.children[i])
                    }
                }
            }
        })
    }
}

export default autolink

const findLinks = (node) => {
    if (node.value.match(/https?:\/\/[^\s]+/)) {
        const links = node.value.match(/https?:\/\/[^\s]+/g)
        const linkTree = fromHtml(
            `<a href=${links[0]} target=_blank>${links[0]}</a>`,
            { fragment: true }
        )
        const prefixText = fromHtml(node.value.substring(0, node.value.indexOf(links[0])), { fragment: true })
        const suffixText = fromHtml(node.value.substring(node.value.indexOf(links[0]) + links[0].length), { fragment: true })
        linkTree.children.unshift(prefixText)
        linkTree.children.push(suffixText)
        node = linkTree
    }
    return node
}

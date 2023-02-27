import { visit } from 'unist-util-visit'
import { fromHtml } from 'hast-util-from-html'
import { findSection } from '@/utils/mdxUtils'

const jargonTransform = (term, definition) => {
    const section = findSection(definition.link)
    const html = `See <a href=/${section.toLowerCase() + '/'}${definition.link} target=_blank>${definition.name}</a>
        ` + (section ? `in the <a href=/subjects/${section.toLowerCase()} target=_blank>${section} section</a>` : ``)
 return `<span class="jargon-term">${term}<span class="jargon-info">${html}</span></span>`
}

export default (options) => {
  // Don't bother if we don't have any jargon
  if (!options || !options.jargon) {
    throw Error('Required "jargon" option is missing in remark-jargon configuration')
  }

  // Allow passing in a custom transform method
  if (!options.transform) options.transform = jargonTransform

    const findJargon = (node) => {
        const jargon = Object.keys(options.jargon)
        for(let i = 0; i < jargon.length; i++) {
            if(node.value && node.value.toLowerCase().match(new RegExp(`\\b${jargon[i]}\\b`))) {
                const index = node.value.toLowerCase().indexOf(jargon[i])
                const termTree = fromHtml(
                    options.transform(
                        node.value.substring(index, index + jargon[i].length),
                        options.jargon[jargon[i]]
                    ),
                    { fragment: true }
                )
                const prefixText = fromHtml(node.value.substring(0, index), { fragment: true })
                const suffixText = fromHtml(node.value.substring(index + jargon[i].length), { fragment: true })
                termTree.children.unshift(prefixText)
                termTree.children.push(suffixText)
                node = termTree
                delete options.jargon[jargon[i]]
            }
        }
        return node
    }

  // Visitor method
  const visitor = (node) => {
      if(node.tagName === 'p') {
          for(let i = 0; i < node.children.length; i++) {
              if(node.children[i].type === 'text') {
                  node.children[i] = findJargon(node.children[i])
              }
          }
      }
  }

  const transform = (tree) => {
    visit(tree, 'element', visitor)
  }

  return transform
}


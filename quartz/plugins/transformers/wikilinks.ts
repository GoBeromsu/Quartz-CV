import { QuartzTransformerPlugin } from "../types"
import { Root, Text, Link } from "mdast"
import { visit } from "unist-util-visit"
import path from "path"

export const WikiLinks: QuartzTransformerPlugin = () => {
  return {
    name: "WikiLinks",
    markdownPlugins(ctx) {
      return [
        () => (tree: Root, file) => {
          const allSlugs = new Set(
            ctx.allSlugs.map((slug) => path.basename(slug, path.extname(slug))),
          )

          visit(tree, "text", (node: Text, index, parent) => {
            const regex = /\[\[(.*?)\]\]/g
            const matches = node.value.match(regex)

            if (matches) {
              const children = []
              let lastIndex = 0

              matches.forEach((match) => {
                const startIndex = node.value.indexOf(match, lastIndex)
                if (startIndex > lastIndex) {
                  children.push({ type: "text", value: node.value.slice(lastIndex, startIndex) })
                }

                const content = match.slice(2, -2)
                const [link, label] = content.split("|")
                const displayText = label || link
                const linkWithoutExtension = path.basename(link, path.extname(link))

                if (allSlugs.has(linkWithoutExtension)) {
                  // 링크가 존재하는 경우
                  children.push({
                    type: "link",
                    url: link,
                    children: [{ type: "text", value: displayText }],
                  } as Link)
                } else {
                  // 링크가 존재하지 않는 경우
                  children.push({ type: "text", value: displayText })
                }

                lastIndex = startIndex + match.length
              })

              if (lastIndex < node.value.length) {
                children.push({ type: "text", value: node.value.slice(lastIndex) })
              }

              parent.children.splice(index, 1, ...children)
            }
          })
        },
      ]
    },
  }
}

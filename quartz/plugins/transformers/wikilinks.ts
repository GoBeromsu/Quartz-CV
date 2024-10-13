import { QuartzTransformerPlugin } from "../types"
import { Root, Text, Link, PhrasingContent } from "mdast"
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
          console.log("allSlugs", allSlugs)

          visit(tree, "text", (node: Text, index, parent) => {
            if (!parent || index === undefined) return

            const regex = /\[\[(.*?)\]\]/g
            const parts = node.value.split(regex)

            if (parts.length > 1) {
              const newNodes: PhrasingContent[] = parts.flatMap((part, i): PhrasingContent[] => {
                if (i % 2 === 0) {
                  // Regular text
                  return part ? [{ type: "text", value: part }] : []
                } else {
                  // Wikilink
                  const [link, label] = part.split("|")
                  const displayText = label || link
                  const linkWithoutExtension = path.basename(link, path.extname(link))

                  if (allSlugs.has(linkWithoutExtension)) {
                    // Existing link
                    return [
                      {
                        type: "link",
                        url: link,
                        children: [{ type: "text", value: displayText }],
                      },
                    ]
                  } else {
                    // Non-existing link
                    return [{ type: "text", value: displayText }]
                  }
                }
              })

              parent.children.splice(index, 1, ...newNodes)
            }
          })
        },
      ]
    },
  }
}

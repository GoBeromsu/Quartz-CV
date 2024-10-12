import { htmlToJsx } from "../../util/jsx"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"
import style from "../styles/listPage.scss"
import { Root, Element } from "hast"

interface Frontmatter {
  cssclasses?: string[]
  image?: string
  github?: string
  email?: string
  linkedin?: string
  twitter?: string
}

function splitContent(tree: Root): [Element[], Element[]] {
  const firstHeadingIndex = tree.children.findIndex(
    (node): node is Element => node.type === "element" && node.tagName.startsWith("h"),
  )

  if (firstHeadingIndex === -1) {
    return [tree.children as Element[], []]
  }

  return [
    tree.children.slice(0, firstHeadingIndex) as Element[],
    tree.children.slice(firstHeadingIndex) as Element[],
  ]
}

const Content: QuartzComponent = ({ fileData, tree }: QuartzComponentProps) => {
  const frontmatter = fileData.frontmatter as Frontmatter | undefined
  const classes = ["popover-hint", ...(frontmatter?.cssclasses ?? [])].join(" ")

  const isHomePage = fileData.slug === "index"
  let description, content

  if (isHomePage && tree) {
    const [descriptionElements, contentElements] = splitContent(tree as Root)
    description = htmlToJsx(fileData.filePath!, {
      type: "root",
      children: descriptionElements,
    } as Root)
    content = htmlToJsx(fileData.filePath!, { type: "root", children: contentElements } as Root)
  } else {
    content = htmlToJsx(fileData.filePath!, tree)
  }

  return (
    <article class={classes}>
      {isHomePage && frontmatter && (
        <div class="home-info">
          <div class="left-column">
            <div class="profile-wrapper">
              {frontmatter.image && (
                <img src={frontmatter.image} alt="Profile" class="profile-image" />
              )}
            </div>
            <div class="social-links">
              {frontmatter.github && (
                <a href={frontmatter.github} target="_blank" rel="noopener noreferrer">
                  <i class="fab fa-github"></i>
                </a>
              )}
              {frontmatter.email && (
                <a href={`mailto:${frontmatter.email}`}>
                  <i class="fas fa-envelope"></i>
                </a>
              )}
              {frontmatter.linkedin && (
                <a href={frontmatter.linkedin} target="_blank" rel="noopener noreferrer">
                  <i class="fab fa-linkedin"></i>
                </a>
              )}
              {frontmatter.twitter && (
                <a href={frontmatter.twitter} target="_blank" rel="noopener noreferrer">
                  <i class="fab fa-twitter"></i>
                </a>
              )}
            </div>
          </div>
          <div class="right-column">{description}</div>
        </div>
      )}
      {content}
    </article>
  )
}

Content.css = style
export default (() => Content) satisfies QuartzComponentConstructor

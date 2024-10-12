import { htmlToJsx } from "../../util/jsx"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"
import style from "../styles/listPage.scss"

interface Frontmatter {
  cssclasses?: string[]
  image?: string
  github?: string
  email?: string
  linkedin?: string
  twitter?: string
}

const Content: QuartzComponent = ({ fileData, tree }: QuartzComponentProps) => {
  const content = htmlToJsx(fileData.filePath!, tree)
  const frontmatter = fileData.frontmatter as Frontmatter | undefined
  const classes: string[] = frontmatter?.cssclasses ?? []
  const classString = ["popover-hint", ...classes].join(" ")
  
  // Check if this is the home page
  const isHomePage = fileData.slug === "index"

  return (
    <article class={classString}>
      {isHomePage && frontmatter && (
        <div class="home-info">
          {frontmatter.image && (
            <img src={frontmatter.image} alt="Profile" class="profile-image" />
          )}
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
      )}
      {content}
    </article>
  )
}

Content.css = style
export default (() => Content) satisfies QuartzComponentConstructor

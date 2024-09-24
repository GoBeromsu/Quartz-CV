import { QuartzComponentProps } from "./types"
import style from "./styles/imageDescriptionLayout.scss"

interface SocialLink {
  github?: string
  email?: string
  linkedin?: string
  twitter?: string
}

interface Frontmatter {
  image?: string
  description?: string
  github?: string
  email?: string
  linkedin?: string
  twitter?: string
}

export function ImageDescriptionLayout({ fileData, children }: QuartzComponentProps) {
  if (!fileData) return null

  const frontmatter = fileData.frontmatter as Frontmatter
  const imageSrc: string = frontmatter.image || "/path/to/default/image.jpg"
  const description = frontmatter.description || "No description available"
  const socialLinks: SocialLink = {
    github: frontmatter.github,
    email: frontmatter.email,
    linkedin: frontmatter.linkedin,
    twitter: frontmatter.twitter,
  }

  return (
    <div className="image-description-layout">
      <div className="left-column">
        <div className="image-container">
          <img src={imageSrc} alt="Content image" />
        </div>
        <div className="social-links">
          {socialLinks.github && (
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
          )}
          {socialLinks.email && (
            <a href={`mailto:${socialLinks.email}`}>
              <i className="fas fa-envelope"></i>
            </a>
          )}
          {socialLinks.linkedin && (
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          )}
          {socialLinks.twitter && (
            <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          )}
        </div>
      </div>
      <div className="description-container">
        <p>{description}</p>
        {children}
      </div>
    </div>
  )
}

ImageDescriptionLayout.css = style
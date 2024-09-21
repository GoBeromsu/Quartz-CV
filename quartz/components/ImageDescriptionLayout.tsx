import { QuartzComponentProps } from "./types"
import style from "./styles/imageDescriptionLayout.scss"

export function ImageDescriptionLayout({ fileData, children }: QuartzComponentProps) {
  if (!fileData) return null

  const imageSrc: string = fileData.frontmatter?.image as string || "/path/to/default/image.jpg"
  const description = fileData.frontmatter?.description || "No description available"

  return (
    <div className="image-description-layout">
      <div className="image-container">
        <img src={imageSrc} alt="Content image" />
      </div>
      <div className="description-container">
        <p>{description}</p>
        {children}
      </div>
    </div>
  )
}

ImageDescriptionLayout.css = style

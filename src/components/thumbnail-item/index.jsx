import React from 'react'
import { Link } from 'gatsby'
import { TARGET_CLASS } from '../../utils/visible'
import Img from "gatsby-image"

import './index.scss'

export const ThumbnailItem = ({ node }) => (
  <Link className={`thumbnail ${TARGET_CLASS}`} to={node.fields.slug}>
    <div key={node.fields.slug}>
      <h3 style={{display : 'inline-block'}}>{node.frontmatter.title || node.fields.slug}</h3>
      <Img className="image" style={{display : 'inline-block', width: 175, padding: 5 }} fluid={node.frontmatter.featuredImage.childImageSharp.fluid} />
      <p style={{ paddingRight: 40, width: 380 }}>{node.frontmatter.description}</p>
      {/* <p dangerouslySetInnerHTML={{ __html: node.excerpt }} /> */}
    </div>
  </Link>
)

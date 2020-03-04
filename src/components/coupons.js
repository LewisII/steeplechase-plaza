import React from "react"
import { StaticQuery, graphql } from "gatsby"

const ComponentName = () => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark(
          filter: { frontmatter: { layout: { eq: "coupon" } } }
        ) {
          edges {
            node {
              frontmatter {
                info
                title
                coupon_image
              }
            }
          }
        }
      }
    `}
    render={data => <div>
        {data.allMarkdownRemark.edges.map(({node}) =>
        <div>
            <p>{node.frontmatter.title}</p>    
            <p>{node.frontmatter.info}</p>
            <img src={node.frontmatter.coupon_image}
            alt={node.frontmatter.coupon_image}/>
        </div>)}
    </div>}
  ></StaticQuery>
)

export default ComponentName

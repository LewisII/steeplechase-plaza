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
                couponImage
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
            <img src={node.frontmatter.couponImage}
            alt={node.frontmatter.couponImage}/>
        </div>)}
    </div>}
  ></StaticQuery>
)

export default ComponentName

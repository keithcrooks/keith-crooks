import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {
        data.allContentfulBlogPost.nodes.map((node) => (
          <article key={node.id}>
            <h2>
              <Link to={`/blog/${node.slug}`}>
                {node.title}
              </Link>
            </h2>
            <p>Posted: {node.date}</p>
          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulBlogPost(sort: {fields: date, order: DESC}) {
      nodes {
        id
        slug
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`

export default BlogPage

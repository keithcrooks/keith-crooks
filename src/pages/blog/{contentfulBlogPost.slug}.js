import * as React from 'react'
import { graphql } from 'gatsby'
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import Layout from '../../components/layout'

const BlogPost = ({ data }) => {
  return (
    <Layout pageTitle={data.contentfulBlogPost.title}>
      <p>{data.contentfulBlogPost.date}</p>
      {data.contentfulBlogPost.body && renderRichText(data.contentfulBlogPost.body)}
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    contentfulBlogPost(id: {eq: $id}) {
      id
      title
      date(formatString: "MMMM DD, YYYY")
      body {
        raw
      }
    }
  }
`

export default BlogPost

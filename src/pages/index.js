import * as React from "react"
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Keith as a South Park character"
        src="../images/keith-sp-studio.jpg"
      />
    </Layout>
  )
}

export default IndexPage

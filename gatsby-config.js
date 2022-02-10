require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const contentfulConfig = {
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  spaceId: process.env.CONTENTFUL_SPACE_ID,
};

if (process.env.CONTENTFUL_HOST && process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN) {
  contentfulConfig.host = process.env.CONTENTFUL_HOST;
  contentfulConfig.accessToken = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN;
}

module.exports = {
  siteMetadata: {
    title: "Keith Crooks",
    description: "My own personal website",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-mdx",
    {
      resolve: `gatsby-source-contentful`,
      options: contentfulConfig,
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`
      }
    },
  ],
};

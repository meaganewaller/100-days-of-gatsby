module.exports = {
  siteMetadata: {
    title: "audioc0re",
    siteUrl: "https://audioc0re13944.gtsb.io/",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-env-variables",
      options: {
        allowList: ["CONTENTFUL_ACCESS_TOKEN", "CONTENTFUL_SPACE_ID"],
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
      },
    },
    "gatsby-plugin-emotion",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-yaml",
      options: {
        typeName: ({node}) => {
          const name = node.sourceInstanceName
          if (name === `locations`) {
            return `Location`
          }

          return name
        },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: "./locations",
        name: "locations",
      },
      __key: "locations",
    },
  ],
};

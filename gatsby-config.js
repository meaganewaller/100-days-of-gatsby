module.exports = {
  siteMetadata: {
    title: "audioc0re",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "fYF_NXvKdiYeXMYsr9GhLpOW1MeizwjLJvLkyOHYey8",
        spaceId: "fs4h3yc53adm",
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

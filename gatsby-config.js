module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
    description: "Personal page of Ernesto Araiza",
    locale: "en",
    title: "Ernesto Araiza",
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },{
    resolve: "@wkocjan/gatsby-theme-intro",
    options: {
      theme: "classic",
      showThemeLogo: false,
    },
  },
]
};
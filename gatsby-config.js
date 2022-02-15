module.exports = {
  siteMetadata: {
    siteUrl: `https://www.ernestoaraiza.com`,
    description: "Personal page of Ernesto Araiza",
    locale: "en",
    title: "💻 Ernesto Araiza - Web Developer",
    formspreeEndpoint: "https://formspree.io/f/mlezbjba"
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-32392843-1",
        // this option places the tracking script into the head of the DOM
        head: true,
        // other options
      },
    },
    "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
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
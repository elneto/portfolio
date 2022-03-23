import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import { Link } from "gatsby"
import CustomFonts from "@wkocjan/gatsby-theme-intro/src/components/custom-fonts/custom-fonts"
import Footer from "@wkocjan/gatsby-theme-intro/src/components/footer/footer"
import Header from "@wkocjan/gatsby-theme-intro/src/components/header/header"
import SEO from "@wkocjan/gatsby-theme-intro/src/components/seo/seo"
import Sidebar from "./sidebar/sidebar"
import StructuredData from "@wkocjan/gatsby-theme-intro/src/components/structured-data/structured-data"
import "@wkocjan/gatsby-theme-intro/src/styles/style.css"

const Entry = ({ children }) => {

    const data = useStaticQuery(graphql`
    query {
        site {
          siteMetadata {
            showThemeLogo
            formspreeEndpoint
          }
        }
        profile: profileYaml {
          ...ProfileFragment
        }
        social: allSocialYaml(filter: { url: { ne: null } }) {
          nodes {
            ...SocialFragment
          }
        }
      }
  `)
  
  const { profile, site, social } = data;

  return (
    <div className="antialiased bg-back leading-normal font-text text-front">
      <SEO />
      <StructuredData profile={profile} social={social.nodes} />
      <CustomFonts />

      <Header initials={profile.initials} />

      <div className="md:max-w-screen-sm lg:max-w-screen-xl mx-auto px-4 flex flex-wrap pt-4 my-8">
        <Sidebar profile={profile} social={social.nodes} />

      <main className="lg:w-2/3 lg:pl-8 xl:pl-12">
        {children}
        <p className="text-blue-500 underline">
          <Link to="/">Go Back Home</Link>
        </p>
      </main>
      </div>

      <Footer
        name={profile.name}
        showThemeLogo={site.siteMetadata.showThemeLogo}
      />
      <style jsx>{`
      p {
        margin-bottom: 1em;
      }
    `}</style>
    </div>
    
  )
}

export default Entry;

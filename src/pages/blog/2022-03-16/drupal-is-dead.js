import { graphql } from "gatsby"
import React from "react"
import { Link } from "gatsby"
import CustomFonts from "@wkocjan/gatsby-theme-intro/src/components/custom-fonts/custom-fonts"
import Footer from "@wkocjan/gatsby-theme-intro/src/components/footer/footer"
import Header from "@wkocjan/gatsby-theme-intro/src/components/header/header"
import SEO from "@wkocjan/gatsby-theme-intro/src/components/seo/seo"
import Sidebar from "@wkocjan/gatsby-theme-intro/src/components/sidebar/sidebar"
import StructuredData from "@wkocjan/gatsby-theme-intro/src/components/structured-data/structured-data"
import "@wkocjan/gatsby-theme-intro/src/styles/style.css"

const Home = ({ data }) => {
  const { profile, site, social } = data

  return (
    <div className="antialiased bg-back leading-normal font-text text-front">
      <SEO />
      <StructuredData profile={profile} social={social.nodes} />
      <CustomFonts />

      <Header initials={profile.initials} />

      <div className="md:max-w-screen-sm lg:max-w-screen-xl mx-auto px-4 flex flex-wrap pt-4 my-8">
        <Sidebar profile={profile} social={social.nodes} />

      <main className="lg:w-2/3 lg:pl-8 xl:pl-12">
        <h1 class="font-header font-black text-front text-2xl leading-none break-words mb-6">Drupal is dead. Long live the Jamstack!</h1>
        <h2 class="mb-6 font-header font-black">16 March 2022</h2>
        <p>Generally, a website is made of two parts: content and presentation. The content is usually stored in databases such as MySQL; and the presentation is made with HTML tags, CSS and Javascript.</p>
<p>Monolithic content management systems (CMSs) such as Drupal, provide these two parts in a single product. All your content, like pages, news, events, blogs, etc. is stored in MySQL. Then it is transformed via PHP code and templates into HTML that can be understood and displayed by your browser. Every time a user visits a page in your Drupal website, a request is made to the server that accesses the database, generates the HTML and sends it to your browser. This is the old way of doing things.</p>
<p>A few years ago, a new philosophy was born: JAMstack. The Its acronym stands for Javascript, APIs and Markup. Basically, it proposes that a system can be distributed. That data can come from many places, not a single database, and that it can be accessed via APIs. Finally, you need some markup (such as HTML) to send to the browser.</p>
<p>Maintaining a MySQL server for your database, upgrading Drupal and its myriad of modules is costly, time consuming and it requires a server running all the time. In contrast, the Jamstack doesn&rsquo;t need a live server to run MySQL or PHP!</p>
<p>You can generate a website from any source of data, it could be local files in your computer, excel documents, distributed APIs from the cloud, files from your git repository or any data source that you can think of. Many plugins have been created to convert data sources. A Static Site Generator (SSG) will quickly convert your content sources into a fast, secure and accessible website that can be deployed in a Content Delivery Network (CDN). This step can be automated using tools like Git and services like Netlify, AWS, or Vercel. The end result is a static HTML website that can be deployed for free or at a very low cost.</p>
<p>It is significantly cheaper to host a Jamstack website than a Drupal one. A server running a MySQL database and PHP can cost from hundreds to thousands of dollars a month depending on the size of your website, while a CDN is free or costs a few cents depending on the traffic of your website. Hosting your site in a CDN makes your website loads faster notwithstanding where in the world you are located.</p>
<p>Another advantage of the Jamstack is that it is more secure. Not presenting a live server and a PHP server reduces the surface of attacks for hackers. Additionally, since your content usually lives in a git repository, you can quickly recover it and deploy it in another place in the rare case that your hosting becomes compromised.</p>
<p>One last point is the developer experience. Creating websites in Drupal involves modifying themes, views, content types using either Twig or PHP template files. You cannot usually see the end result unless you have set up a development environment. This means that you have to install in your computer the same versions of MySQL, PHP and Drupal that you have in your server. If you are developing multiple websites, this can quickly be a headache, even If you use container systems such as docker. Additionally, when you develop a new website or modify an existing one in Drupal, you have to continuously clear all the caches to see the changes you are making. In the JAMstack you see the changes you make instantly, additionally, a package manager tool called &ldquo;npm&rdquo; manages and installs all the tools you need to build your website both in your computer and in your hosting provider.</p>
<p>In conclusion, the Jamstack way is better because it is more modern, cheaper, more secure, its websites load faster and it also provides a better developer experience.</p>
        <p>
          <Link to="/"><p class="text-blue-500 underline">Go Back Home</p></Link>
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

export default Home;

export const query = graphql`
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
`
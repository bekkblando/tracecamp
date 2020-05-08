const path = require('path');
require('dotenv');
const packageJson = require('./package.json');

const config = {
  siteMetadata: {
    title: `Trace Camp eLearning`,
    description: `Our focus is teaching practical programming with hands-on web development. Our curated curriculums and experienced instructors will give you the tools you need to build your passion project.`,
    // siteUrl: `http://tracecamp.com/`,
    siteUrl: process.env.IS_SURGE
      ? `https://${packageJson.name}.surge.sh`
      : `http://tracecamp.com/`,
    // author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-root-import`,
      options: {
        static: path.join(__dirname, 'static'),
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-layout`,
    `gatsby-plugin-react-helmet-async`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'courses',
        path: `${__dirname}/src`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          `gatsby-remark-prismjs`,
          `gatsby-remark-relative-images`,
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1440,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // This path is relative to the root of the site.
        icon: `src/components/TigerPaw/tiger-paw-container-01.svg`,
      },
    },
    `gatsby-plugin-sitemap`,
    // this (optional) plugin enables Progressive Web App + Offline
    // functionality To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};

module.exports = config;

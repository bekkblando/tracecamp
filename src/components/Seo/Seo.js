/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({
  description,
  lang,
  meta,
  title,
  titleTemplate,
  // url,
}) {
  const { site, socialCard } = useStaticQuery(
    graphql`
      query {
        site: site {
          siteMetadata {
            title
            description
            siteUrl
          }
        }
        socialCard: file(
          relativePath: {
            eq: "images/demo-day/IMG_0592.jpg"
          }
        ) {
          childImageSharp {
            fixed(width: 1200, height: 628) {
              src
            }
          }
        }
      }
    `,
  );

  const metaDescription =
    description || site.siteMetadata.description;

  const siteUrlWithoutSlash = site.siteMetadata.siteUrl.replace(
    /\/$/,
    '',
  );

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={
        titleTemplate || `%s | ${site.siteMetadata.title}`
      }
      meta={[
        {
          name: `title`,
          content: title,
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: `${siteUrlWithoutSlash}${socialCard.childImageSharp.fixed.src}`,
        },
        // {
        //   property: `og:url`,
        //   content: `${siteUrlWithoutSlash}${url}`
        // },
        {
          property: `twitter:card`,
          content: `summary_large_image`,
        },
        // {
        //   property: `twitter:creator`,
        //   content: site.siteMetadata.author,
        // },
        {
          property: `twitter:title`,
          content: title,
        },
        {
          property: `twitter:description`,
          content: metaDescription,
        },
        {
          property: `twitter:image`,
          content: `${siteUrlWithoutSlash}${socialCard.childImageSharp.fixed.src}`,
        },
        // {
        //   property: `twitter:url`,
        //   content: `${siteUrlWithoutSlash}${url}`,
        // },
        // favicon
        {
          name: `msapplication-TileColor`,
          content: '#6875f5',
        },
        {
          name: `msapplication-config`,
          content: '/browserconfig.xml',
        },
        {
          name: `theme-color`,
          content: '#6875f5',
        },
      ].concat(meta)}
    >
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/safari-pinned-tab.svg"
        color="#6875f5"
      />
      <link rel="shortcut icon" href="/favicon.ico" />
      {/* <meta
        name="msapplication-TileColor"
        content="#6875f5"
      />
      <meta
        name="msapplication-config"
        content="/browserconfig.xml"
      />
      <meta name="theme-color" content="#6875f5" /> */}
    </Helmet>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default SEO;

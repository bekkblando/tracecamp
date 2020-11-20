import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

// https://stackoverflow.com/a/24378353
// https://stackoverflow.com/a/12249011
function formatUrl(url) {
  return url
    .replace(/https?:(\\\\|\/\/)(www.)?/, '')
    .replace(/\/$/, '');
}

export default function Instructors() {
  const data = useStaticQuery(graphql`
    query {
      instructors: allMarkdownRemark(
        filter: {
          fields: { pageType: { eq: "instructor" } }
        }
        limit: 1000
        sort: { fields: frontmatter___index, order: ASC }
      ) {
        edges {
          node {
            id
            frontmatter {
              category
              author
              authorGitHub
              authorWebsite
              description
              featuredImage {
                childImageSharp {
                  fluid(maxWidth: 512) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  return (
    // bg-gray-50
    <div
      id="instructors"
      className="relative bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8"
    >
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3"></div>
      </div>
      <div className="relative max-w-screen-xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
            Meet the team
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl leading-7 text-gray-500 sm:mt-4">
            Trace Camp instructors will guide you through
            your learning experience and support you in the
            completion of your project.
          </p>
        </div>
        <div className="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
          {data.instructors.edges.map((edge) => (
            <Instructor key={edge.node.id} edge={edge} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Instructor({ edge }) {
  return (
    <div
      id={edge.node.fields.slug}
      className="flex flex-col rounded-lg shadow-lg overflow-hidden"
    >
      <div className="flex-shrink-0">
        {/* <img
          className="h-48 w-full object-cover"
          src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
          alt=""
        /> */}
        <Img
          className="h-72 w-full object-cover"
          alt={edge.node.frontmatter.author}
          fluid={
            edge.node.frontmatter.featuredImage
              .childImageSharp.fluid
          }
        />
      </div>

      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <div className="">
            <p className="text-sm leading-5 text-gray-500">
              {edge.node.frontmatter.category}
            </p>
          </div>
          <a
            href={`#${edge.node.fields.slug}`}
            className="block"
          >
            <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
              {edge.node.frontmatter.author}
            </h3>
            <p className="mt-3 text-base leading-6 text-gray-500">
              {edge.node.frontmatter.description}
            </p>
          </a>
        </div>
        <div className="mt-6 flex flex-col sm:flex-row">
          {edge.node.frontmatter.authorWebsite ? (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={edge.node.frontmatter.authorWebsite}
              className="w-full mt-3 sm:mt-0 sm:w-1/2 flex items-center text-sm leading-5 text-gray-500 hover:text-gray-600 group"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12S0 18.623 0 12 5.377 0 12 0m2.557 16H9.442c.546 2.46 1.441 4.114 2.558 5.744 1.194-1.741 2.041-3.41 2.557-5.744M7.4 16H2.833c1.236 2.825 3.704 4.972 6.755 5.716A17.556 17.556 0 017.4 16m13.767 0H16.6a17.617 17.617 0 01-2.175 5.694c3.012-.763 5.517-2.895 6.742-5.694M7.162 10H2.2a10.088 10.088 0 000 4h4.915a20.028 20.028 0 01.047-4m7.661 0H9.176a18.016 18.016 0 00-.053 4h5.753a18.017 18.017 0 00-.053-4m6.977 0h-4.963c.148 1.328.166 2.671.048 4H21.8c.26-1.285.273-2.648 0-4M9.644 2.271C6.567 3.003 4.077 5.157 2.833 8h4.653a20.424 20.424 0 012.158-5.729m2.355-.048C10.91 3.993 10.089 5.676 9.536 8h4.927c-.534-2.246-1.337-3.948-2.464-5.777m2.368.069A20.45 20.45 0 0116.513 8h4.654c-1.232-2.816-3.762-4.958-6.8-5.708" />
              </svg>

              <span className="truncate">
                {formatUrl(
                  edge.node.frontmatter.authorWebsite,
                )}
              </span>
            </a>
          ) : null}
          {edge.node.frontmatter.authorGitHub ? (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={edge.node.frontmatter.authorGitHub}
              className="w-full sm:w-1/2 flex items-center text-sm leading-5 text-gray-500 hover:text-gray-600 group"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400 group-hover:text-gray-500"
              >
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>

              <span className="truncate">
                {edge.node.frontmatter.authorGitHub.slice(
                  19,
                )}
              </span>
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}

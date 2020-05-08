import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

export default function Projects() {
  const [showAll, setShowAll] = React.useState(false);

  const data = useStaticQuery(graphql`
    query {
      projects: allMarkdownRemark(
        filter: {
          frontmatter: { isPublished: { ne: false } }
          fields: { pageType: { eq: "project" } }
        }
        limit: 1000
        sort: { fields: frontmatter___index, order: ASC }
      ) {
        edges {
          node {
            id
            authorAvatar {
              childImageSharp {
                fixed(width: 40, height: 40) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
            frontmatter {
              author
              authorGitHub
              project
              link
              camp
              index
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
    <div className="max-w-full pb-16 pt-12">
      <div className="relative mx-auto max-w-7xl text-center">
        <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
          Student projects
        </h2>
        <p className="max-w-2xl mx-auto mt-3 text-xl leading-7 text-gray-500 sm:mt-4">
          The camp ends with a hackathon where students
          build an app of their own design. Here are some of
          the projects from previous camps!
        </p>
      </div>

      <div className="max-w-4xl mx-auto mt-10">
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <ul>
            {showAll
              ? data.projects.edges.map((edge) => (
                  <Project key={edge.node.id} edge={edge} />
                ))
              : data.projects.edges
                  .filter(
                    (edge) =>
                      typeof edge.node.frontmatter.index ===
                      'number',
                  )
                  .map((edge) => (
                    <Project
                      key={edge.node.id}
                      edge={edge}
                    />
                  ))}
            <li className="border-t border-gray-200 first:border-t-0">
              {/* focus:bg-white focus:text-gray-400 */}
              <button
                className="focus:outline-none min-w-full px-6 py-3 text-left text-xs leading-4 font-medium text-gray-500 bg-gray-50 hover:bg-gray-100 hover:text-gray-600 uppercase tracking-wider text-center"
                onClick={(event) =>
                  setShowAll((prevState) => !prevState)
                }
              >
                {showAll ? 'Show less' : 'Show more'}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function Project({ edge }) {
  return (
    <li className="border-t border-gray-200 first:border-t-0">
      <a
        href={edge.node.frontmatter.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out"
      >
        <div className="flex items-center px-4 py-4 sm:px-6">
          <div className="min-w-0 flex-1 flex items-center">
            <div className="flex-shrink-0 flex flex-col justify-center">
              {/* <img
                className="h-12 w-12 rounded-full"
                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              /> */}
              <Img
                className="h-12 w-12 rounded-full"
                fixed={
                  edge.node.authorAvatar.childImageSharp
                    .fixed
                }
              />
            </div>
            {/* <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4"> */}
            <div className="flex-1 min-w-0 px-4 grid grid-cols-2 gap-4">
              <div className="flex flex-col justify-center">
                <div className="text-sm leading-5 font-medium text-indigo-600">
                  {edge.node.frontmatter.author}
                </div>
                <div className="hidden sm:flex mt-2 items-center text-sm leading-5 text-gray-500">
                  {/* <svg
                    className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884zM18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                      clipRule="evenodd"
                    />
                  </svg> */}
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                  >
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>

                  <span className="truncate">
                    {edge.node.frontmatter.authorGitHub.slice(
                      19,
                    )}
                  </span>
                </div>
              </div>
              {/* <div className="hidden md:block"> */}
              <div className="">
                <div className="flex flex-col justify-center h-full">
                  <div className="text-sm leading-5 text-gray-900">
                    {edge.node.frontmatter.project}
                  </div>
                  <div className="mt-2 text-sm leading-5 text-gray-500">
                    {edge.node.frontmatter.camp}
                  </div>
                  {/* <div className="text-sm leading-5 text-gray-900">
                    Applied on
                    <time dateTime="2020-01-07">
                      January 7, 2020
                    </time>
                  </div>
                  <div className="mt-2 flex items-center text-sm leading-5 text-gray-500">
                    <svg
                      className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Completed phone screening
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div>
            <svg
              className="h-5 w-5 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </a>
    </li>
  );
}

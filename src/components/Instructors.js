import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { FaGithub } from 'react-icons/fa';
import { IoGlobeOutline } from 'react-icons/io';
import { IconContext } from 'react-icons';

// https://stackoverflow.com/a/24378353
// https://stackoverflow.com/a/12249011
function formatUrl(url) {
  return url
    .replace(/https?:(\\\\|\/\/)(www.)?/, '')
    .replace(/\/$/, '');
}

const Instructor = ({ title, name, bio, image }) => {
  return (
    <div className="w-full lg:w-1/3">
      <div className="m-3 h-48 rounded-lg overflow-hidden shadow-md grid grid-cols-3">
        <div className="col-span-1">
          <Img
            className="h-full object-cover"
            alt={name}
            fluid={image.childImageSharp.fluid}
          />
        </div>
        <div className="col-span-2 flex flex-col relative h-100 p-4">
          <p className="text-sm leading-5 text-gray-500">
            {title}
          </p>
          <h3 className="text-xl leading-7 font-semibold text-gray-900">
            {name}
          </h3>
          <p className="mt-1 text-sm leading-2 text-gray-500">
            {bio}
          </p>

          <div className="m-4 absolute bottom-0 left-0 flex flex-row space-x-3">
            <IconContext.Provider
              value={{
                size: '1.5rem',
                className:
                  'opacity-50 hover:opacity-100 transition-opacity duration-150 text-gray-500',
              }}
            >
              <FaGithub />
              <IoGlobeOutline />
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </div>
  );
};

const Former = ({ name, title, image }) => {
  return (
    <div className="w-full lg:w-1/4">
      <div className="m-3 h-24 rounded-lg overflow-hidden shadow-md grid grid-cols-3">
        <div className="col-span-1">
          <Img
            className="h-full object-cover"
            alt={name}
            fluid={image.childImageSharp.fluid}
          />
        </div>

        <div className="h-24 col-span-2 p-4 flex flex-col justify-center">
          <p className="text-sm leading-5 text-gray-500">
            {title}
          </p>
          <h3 className="text-xl leading-7 font-semibold text-gray-900">
            {name}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default function Instructors() {
  const data = useStaticQuery(graphql`
    query {
      instructors: allMarkdownRemark(
        filter: {
          fields: { pageType: { eq: "person" } }
          frontmatter: {
            category: { regex: "/^(?!Former.*$).*/" }
          }
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

      former: allMarkdownRemark(
        filter: {
          fields: { pageType: { eq: "person" } }
          frontmatter: { category: { regex: "/Former.*/" } }
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
        <div className="mt-12 flex flex-row flex-wrap justify-center max-w-lg mx-auto lg:max-w-none">
          {data.instructors.edges.map((edge) => {
            const {
              author,
              featuredImage,
              description,
              category,
            } = edge.node.frontmatter;

            return (
              <Instructor
                name={author}
                image={featuredImage}
                bio={description}
                title={category}
              />
            );
          })}
        </div>
        <div className="text-center pt-10 mt-6 border-t-2 border-gray-100">
          <h2 className="text-2xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-3xl sm:leading-10">
            Former team members
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl leading-7 text-gray-500 sm:mt-4">
            All of this would not be possible without the
            rich history of instructors that brought us to
            where we are today.
          </p>
        </div>
        <div className="mt-7 flex flex-row flex-wrap justify-center max-w-lg mx-auto lg:max-w-none">
          {data.former.edges.map((edge) => {
            const {
              author,
              featuredImage,
              category,
            } = edge.node.frontmatter;
            return (
              <Former
                title={category}
                name={author}
                image={featuredImage}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

export default function Courses() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fields: { pageType: { eq: "course" } } }
        sort: {
          fields: frontmatter___createdAt
          order: DESC
        }
        limit: 8
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              createdAt(formatString: "MMM D, YYYY")
              updatedAt(formatString: "MMM D, YYYY")
              category
              description
              duration
              isPublished
              timeframe
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
    <div
      id="courses"
      className="relative px-4 pt-16 pb-20 bg-gray-50 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8"
    >
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3"></div>
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            Latest bootcamps and courses
          </h2>
          <p className="max-w-2xl mx-auto mt-3 text-xl leading-7 text-gray-500 sm:mt-4">
            Learn immediately useful technologies while
            building relevant industry skills. Peruse all of
            our secondary{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.notion.so/Supported-Technologies-1f217441aca9421b99af421b1e2cb87f"
              className="font-medium text-gray-700 underline"
            >
              supported technologies
            </a>
            .
          </p>
        </div>
        {/* lg:max-w-none */}
        <div className="grid max-w-lg gap-5 mx-auto mt-12 lg:grid-cols-2 lg:max-w-screen-md">
          {data.allMarkdownRemark.edges.map((edge) => (
            <Course edge={edge} key={edge.node.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Course({ edge }) {
  return (
    <div
      id={edge.node.fields.slug}
      className="flex flex-col overflow-hidden rounded-lg shadow-lg"
    >
      <div className="flex-shrink-0">
        <Img
          className="object-cover w-full h-48"
          fluid={
            edge.node.frontmatter.featuredImage
              .childImageSharp.fluid
          }
        />
      </div>
      <div className="flex flex-col justify-between flex-1 p-6 bg-white">
        <div className="flex-1">
          <div className="">
            {/* <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-indigo-100 text-indigo-800">
              {edge.node.frontmatter.category}
            </span> */}
            <p className="text-sm leading-5 text-gray-500">
              {edge.node.frontmatter.category}
            </p>
          </div>
          {/* <p className="text-sm font-medium leading-5 text-indigo-600">
            <a
              href={`#${edge.node.id}`}
              className="hover:underline"
            >
              {edge.node.frontmatter.category}
            </a>
          </p> */}
          {edge.node.frontmatter.isPublished ? (
            <Link
              to={`/courses/${edge.node.fields.slug}/`}
              className="block"
            >
              <h3 className="mt-2 text-xl font-semibold leading-7 text-gray-900">
                {edge.node.frontmatter.title}
              </h3>
              <p className="mt-3 text-base leading-6 text-gray-500">
                {edge.node.frontmatter.description}
              </p>
            </Link>
          ) : (
            <a
              href={`#${edge.node.fields.slug}`}
              className="block"
            >
              <h3 className="mt-2 text-xl font-semibold leading-7 text-gray-900">
                {edge.node.frontmatter.title}
              </h3>
              <p className="mt-3 text-base leading-6 text-gray-500">
                {edge.node.frontmatter.description}
              </p>
            </a>
          )}
        </div>
        {/* <div className="mt-6 text-sm font-medium leading-5 text-indigo-600">
          <time dateTime="2020-03-16">
            {edge.node.frontmatter.createdAt}
          </time>
          <span className="mx-1">&middot;</span>
          <span>
            {edge.node.frontmatter.duration} course
          </span>
        </div> */}
        <div className="mt-3 text-base leading-6 font-semibold text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150">
          <time dateTime="2020-03-16">
            {edge.node.frontmatter.timeframe}
          </time>
          <span className="mx-1">&middot;</span>
          <span>
            {edge.node.frontmatter.duration} bootcamp
          </span>
        </div>
        {/* <div className="flex items-center mt-6">
          <div className="flex-shrink-0">
            <a
              aria-label={`${edge.node.frontmatter.author}’s GitHub`}
              href={edge.node.frontmatter.authorGitHub}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Img
                fixed={
                  edge.node.authorAvatar.childImageSharp
                    .fixed
                }
                className="w-10 h-10 rounded-full"
              />
            </a>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium leading-5 text-gray-900">
              <a
                href={edge.node.frontmatter.authorGitHub}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {edge.node.frontmatter.author}
              </a>
            </p>
            <div className="flex text-sm leading-5 text-gray-500">
              <time dateTime="2020-03-16">
                {edge.node.frontmatter.createdAt}
              </time>
              <span className="mx-1">&middot;</span>
              <span>
                {edge.node.frontmatter.duration} course
              </span>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

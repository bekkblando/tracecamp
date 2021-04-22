import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import CourseCard from './CourseCard';

export default function Courses() {
  const graphqlData = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fields: { pageType: { eq: "course" } } }
        sort: {
          fields: frontmatter___createdAt
          order: ASC
        }
        limit: 8
      ) {
        edges {
          node {
            id
            frontmatter {
              published
              title
              description
              location
              date
              duration
              technologies
              thumbnail {
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

  const courses = graphqlData.allMarkdownRemark.edges.map(
    (edge) => {
      const { frontmatter } = edge.node;
      const { slug } = edge.node.fields;
      return { ...frontmatter, slug };
    },
  );

  return (
    <div
      id="courses"
      className="relative px-4 pt-16 pb-16 bg-gray-50 sm:px-6 lg:pt-24 lg:pb-20 lg:px-8"
    >
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3"></div>
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            Upcoming bootcamps
          </h2>
          <p className="max-w-2xl mx-auto mt-3 text-xl leading-7 text-gray-500 sm:mt-4">
            Learn immediately useful technologies while
            building relevant industry skills and projects.
          </p>
        </div>
        <div className="flex justify-center spacing-x-5 max-w-lg mx-auto mt-12 lg:max-w-screen-md">
          {courses.map((course, index) => (
            <CourseCard {...course} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

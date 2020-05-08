import React from 'react';

import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Seo from 'components/Seo/Seo';
import Content from 'components/Content/Content';

export const query = graphql`
  query($lessonSlug: String!, $courseSlug: String!) {
    lesson: markdownRemark(
      fields: { slug: { glob: $lessonSlug } }
    ) {
      rawMarkdownBody
      frontmatter {
        title
        createdAt
      }
      html
    }
    course: markdownRemark(
      fields: { slug: { glob: $courseSlug } }
    ) {
      frontmatter {
        title
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 1440) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;

export default function Lesson({ data, pageContext }) {
  return (
    // Layout: Application
    <React.Fragment>
      <Seo
        title={data.lesson.frontmatter.title}
        titleTemplate={`${data.lesson.frontmatter.title} | ${data.course.frontmatter.title}`}
      />
      <div className="relative h-72 overflow-hidden rounded-lg">
        <Img
          className="absolute inset w-full h-full"
          fluid={
            data.course.frontmatter.splash.childImageSharp
              .fluid
          }
        />
        <div className="absolute inset-0 opacity-75 bg-indigo-700" />
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            className="w-32 h-32 mt-5 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <span className="absolute top-8 left-8 text-white font-bold text-4xl uppercase leading-tight">
          {data.lesson.frontmatter.title}
        </span>
        <span className="absolute bottom-8 left-8 text-indigo-100 uppercase text-2xl leading-tight">
          Section {pageContext.index + 1}
        </span>
      </div>
      <Content>
        <h1>{data.lesson.frontmatter.title}</h1>
        <p>{data.lesson.frontmatter.createdAt}</p>
        <p>
          TOC in Course, perhaps course launched and updated
          date, see Udemy
        </p>
        <p>YouTube Video</p>
        <p>Previous Lesson</p>
        <p>Next Lesson</p>
        <p>
          Things like sitemap and schema.org structured data
        </p>
        <p>content smaller max width</p>
        <p>Add words to logo on home page</p>
        <p>all of chelkys suggestions </p>
        <p>Make search disappear if only one index page</p>
      </Content>
      <Content.dangerouslySetInnerHTML>
        {data.lesson.html}
      </Content.dangerouslySetInnerHTML>
    </React.Fragment>
  );
}

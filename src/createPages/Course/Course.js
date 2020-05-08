import React from 'react';

import { graphql } from 'gatsby';
import Seo from 'components/Seo/Seo';
import Content from 'components/Content/Content';

export const query = graphql`
  query($courseSlug: String!) {
    course: markdownRemark(
      fields: { slug: { glob: $courseSlug } }
    ) {
      frontmatter {
        title
        createdAt
      }
      html
    }
  }
`;

export default function Course({ data, pageContext }) {
  return (
    // Layout: Application
    <React.Fragment>
      <Seo title={data.course.frontmatter.title} />
      <h1 className="text-2xl font-semibold text-gray-900">
        Dashboard
      </h1>

      <h1>THIS IS A COURSE</h1>
      <h1>{data.course.frontmatter.title}</h1>
      <p>{data.course.frontmatter.createdAt}</p>
      <Content.dangerouslySetInnerHTML>
        {data.course.html}
      </Content.dangerouslySetInnerHTML>
    </React.Fragment>
  );
}

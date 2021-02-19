/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path');

// https://github.com/danielmahon/gatsby-remark-relative-images/blob/master/README.md
// const {
//   fmImagesToRelative,
// } = require('gatsby-remark-relative-images');

const {
  createRemoteFileNode,
} = require('gatsby-source-filesystem');

// makes it so imports can be absolute relative to src along with node_modules
// https://www.gatsbycentral.com/enable-absolute-imports-for-gatsby-v2
exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [
        path.resolve(__dirname, 'src'),
        'node_modules',
      ],
    },
  });
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  createTypes(`
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      authorAvatar: File @link(from: "authorAvatar___NODE")
    }
    type Frontmatter {
      authorAvatar: String
    }
  `);
};

exports.onCreateNode = async ({
  node,
  actions,
  store,
  cache,
  createNodeId,
}) => {
  const { createNode, createNodeField } = actions;
  const { internal, fileAbsolutePath: file_path } = node;

  // add custom fields
  if (internal.type === 'MarkdownRemark') {
    const filename = path.basename(file_path, '.md');
    const path_parts = path
      .normalize(file_path) // normalize the path to platform
      .split(path.sep); // split based on plaform

    // if (courseIndex !== -1) {
    if (path_parts.includes('courses')) {
      const courseIndex = path_parts.indexOf('courses');
      let course;
      // markdown nested in a folder
      if (filename === path_parts[path_parts.length - 2]) {
        course = path_parts.slice(courseIndex + 1, -2);
      } else {
        course = path_parts.slice(courseIndex + 1, -1);
      }

      if (filename === 'index') {
        createNodeField({
          node,
          name: 'slug',
          value: `${course}`,
        });
        createNodeField({
          node,
          name: 'pageType',
          value: `course`,
        });
      } else {
        createNodeField({
          node,
          name: 'slug',
          value: `${course}/${filename}`,
        });
        createNodeField({
          node,
          name: 'pageType',
          value: `lesson`,
        });
      }
    }

    // const projectIndex = path_parts.indexOf('projects');
    // if (projectIndex !== -1) {
    if (path_parts.includes('projects')) {
      createNodeField({
        node,
        name: 'slug',
        value: `${filename}`,
      });
      createNodeField({
        node,
        name: 'pageType',
        value: `project`,
      });
    }

    // const instructorIndex = path_parts.indexOf(
    //   'instructors',
    // );
    // if (instructorIndex !== -1) {
    if (path_parts.includes('instructors')) {
      createNodeField({
        node,
        name: 'slug',
        value: `${filename}`,
      });
      createNodeField({
        node,
        name: 'pageType',
        value: `instructor`,
      });
    }
  }

  // https://github.com/danielmahon/gatsby-remark-relative-images/blob/master/README.md
  // fmImagesToRelative(node);

  // https://www.gatsbyjs.org/docs/preprocessing-external-images/
  // For all MarkdownRemark nodes that have a featured image url, call createRemoteFileNode
  if (
    node.internal.type === 'MarkdownRemark' &&
    typeof node.frontmatter.authorAvatar === 'string' &&
    node.frontmatter.authorAvatar.length > 0
  ) {
    let fileNode = await createRemoteFileNode({
      url: node.frontmatter.authorAvatar, // string that points to the URL of the image
      parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
      createNode, // helper function in gatsby-node to generate the node
      createNodeId, // helper function in gatsby-node to generate the node id
      cache, // Gatsby's cache
      store, // Gatsby's redux store
    });
    // if the file was created, attach the new node to the parent node
    if (fileNode) {
      node.authorAvatar___NODE = fileNode.id;
    }
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const markdownLesson = path.resolve(
    'src/createPages/Lesson/Lesson.js',
  );
  const markdownCourse = path.resolve(
    'src/createPages/Course/Course.js',
  );
  // https://github.com/gatsbyjs/gatsby/issues/9882#issuecomment-462089503
  const courses = await graphql(`
    {
      allMarkdownRemark(
        filter: { fields: { pageType: { eq: "course" } } }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              published
              thumbnail {
                childImageSharp {
                  fixed(width: 239, height: 135) {
                    base64
                    width
                    height
                    src
                    srcSet
                  }
                }
              }
            }
          }
        }
      }
    }
  `);
  if (courses.errors) throw courses.errors;

  for (const edge of courses.data.allMarkdownRemark.edges) {
    const courseSlug = edge.node.fields.slug;
    const published = edge.node.frontmatter.published;

    if (published !== false) {
      const lessons = await graphql(`
      {
        allMarkdownRemark(
          filter: {
            fields: {
              slug: { glob: "${courseSlug}/*" }
              pageType: { eq: "lesson" }
            }
            frontmatter: {
              published: {
                ne: false
              }
            }
          }
          limit: 1000
          sort: {
            fields: frontmatter___index
            order: ASC
          }
        ) {
          edges {
            node {
              frontmatter {
                title
              }
              fields {
                slug
              }
            }
          }
        }
      }
      `);
      if (lessons.errors) throw lessons.errors;

      // nav
      const nav = {
        course: {
          title: edge.node.frontmatter.title,
          courseSlug: courseSlug,
          thumbnail: {
            childImageSharp: {
              fixed:
                edge.node.frontmatter.thumbnail
                  .childImageSharp.fixed,
            },
          },
        },
        links: lessons.data.allMarkdownRemark.edges.map(
          (edge) => ({
            title: edge.node.frontmatter.title,
            slug: edge.node.fields.slug,
          }),
        ),
      };

      // create course page
      createPage({
        path: `/courses/${courseSlug}`,
        component: markdownCourse,
        context: {
          layout: 'Application',
          courseSlug: courseSlug,
          nav,
        },
      });

      // create lesson page
      const edges = lessons.data.allMarkdownRemark.edges;
      edges.forEach((edge, index) => {
        createPage({
          path: `/courses/${edge.node.fields.slug}`,
          component: markdownLesson,
          context: {
            layout: 'Application',
            lessonSlug: edge.node.fields.slug,
            index: index,
            previousSlug:
              edges[index - 1] &&
              edges[index - 1].node.fields.slug,
            nextSlug:
              edges[index + 1] &&
              edges[index + 1].node.fields.slug,
            courseSlug: courseSlug,
            nav,
          },
        });
      });
    }
  }
};

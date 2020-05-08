import React from 'react';
// https://github.com/sindresorhus/github-markdown-css
import './Markdown.css';
// https://gist.github.com/jlarmstrongiv/94e75fbae94fd3430890a7a5f7c2a7fd#file-js-js-L18
import './Prism.css';

export default function Content({ children }) {
  return <div className="markdown-body">{children}</div>;
}

Content.dangerouslySetInnerHTML = ({ children }) => {
  return (
    <div
      className="markdown-body"
      dangerouslySetInnerHTML={{
        __html: children,
      }}
    ></div>
  );
};

// Inter var, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"
// Georgia, Cambria, "Times New Roman", Times, serif
// Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace

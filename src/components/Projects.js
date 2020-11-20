import React from 'react';
import Img from 'gatsby-image';

import content, { featuredProjects } from '../content';

export default function Projects() {
  const [showAll, setShowAll] = React.useState(false);
  const toggleShowAll = () => setShowAll((v) => !v);

  const minimizedCount = 4;

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
              ? featuredProjects.map((project, index) => (
                  <Project {...project} key={index} />
                ))
              : featuredProjects
                  .filter(
                    (project, i) => i < minimizedCount,
                  )
                  .map((project, index) => (
                    <Project {...project} key={index} />
                  ))}
            <li className="border-t border-gray-200 first:border-t-0">
              {/* focus:bg-white focus:text-gray-400 */}
              <button
                className="focus:outline-none min-w-full px-6 py-3 text-left text-xs leading-4 font-medium text-gray-500 bg-gray-50 hover:bg-gray-100 hover:text-gray-600 uppercase tracking-wider text-center"
                onClick={toggleShowAll}
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

function Project({
  name,
  githubName,
  camp,
  projectTitle,
  url,
}) {
  return (
    <li className="border-t border-gray-200 first:border-t-0">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out"
      >
        <div className="flex items-center px-4 py-4 sm:px-6">
          <div className="min-w-0 flex-1 flex items-center">
            <div className="flex-shrink-0 flex flex-col justify-center">
              <img
                className="h-12 w-12 rounded-full"
                src={`https://github.com/${githubName}.png`}
              />
            </div>
            {/* <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4"> */}
            <div className="flex-1 min-w-0 px-4 grid grid-cols-2 gap-4">
              <div className="flex flex-col justify-center">
                <div className="text-sm leading-5 font-medium text-indigo-600">
                  {name}
                </div>
                <div className="hidden sm:flex mt-2 items-center text-sm leading-5 text-gray-500">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                  >
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>

                  <span className="truncate">
                    {githubName}
                  </span>
                </div>
              </div>
              {/* <div className="hidden md:block"> */}
              <div className="">
                <div className="flex flex-col justify-center h-full">
                  <div className="text-sm leading-5 text-gray-900">
                    {projectTitle}
                  </div>
                  <div className="mt-2 text-sm leading-5 text-gray-500">
                    {camp}
                  </div>
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

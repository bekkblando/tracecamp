import React, { useState } from 'react';

import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import content from '../../content';
import Navbar from './Navbar';

export default function Splash() {
  const data = useStaticQuery(graphql`
    query {
      splash: file(
        relativePath: { eq: "content/images/splash.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <div
      id="splash"
      className="relative overflow-hidden bg-white"
    >
      <div className="max-w-screen-xl mx-auto ">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          {/* slant overlay over the image */}
          <svg
            className="absolute inset-y-0 right-0 hidden w-48 h-full text-white transform translate-x-1/2 lg:block"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
          <Navbar />
          <div className="max-w-screen-xl px-4 mx-auto mt-10 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                Invest in yourself
                <br className="xl:hidden" />{' '}
                <span className="text-indigo-600">
                  learn to code
                </span>
              </h2>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                {/* Our focus is teaching practical programming
                with hands-on web development. Our
                curriculums are open source and supported by  
                a passionate community of students. */}
                {/* We've picked the best resources to help you
                build web apps and our experienced
                instructors will help you understand how
                they work. */}
                Our focus is teaching practical programming
                with hands-on web development. Our curated
                curriculums and experienced instructors will
                give you the tools you need to build your
                passion project.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href={content.signupUrl}
                    className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:shadow-outline md:py-4 md:text-lg md:px-10"
                  >
                    Get started
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={content.detailsUrl}
                    className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-indigo-700 transition duration-150 ease-in-out bg-indigo-100 border border-transparent rounded-md hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline focus:border-indigo-300 md:py-4 md:text-lg md:px-10"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-3/4">
        <Img
          fluid={data.splash.childImageSharp.fluid}
          className="object-cover w-full h-56 sm:h-72 md:h-96 lg:w-full lg:h-full"
        />
      </div>
    </div>
  );
}

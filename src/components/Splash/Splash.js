import React, { useState } from 'react';
import Transition from 'repositories/Transition/Transition';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Logo from 'components/Logo/Logo';

import content from '../../content';

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

  // methods for controlling sidebar state
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [_, setSidebarHidden] = useState(true);

  const openSidebar = () => {
    setSidebarOpen(true);
    setSidebarHidden(false);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const hideSidebar = () => {
    setSidebarHidden(true);
  };

  const MobileSideBar = () => (
    <div className="flex items-center -mr-2 md:hidden">
      <button
        type="button"
        className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
        aria-label="Open sidebar"
        onClick={openSidebar}
      >
        <svg
          className="w-6 h-6"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>
  );

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

          <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
            <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start">
              <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                <div className="flex items-center justify-between w-full md:w-auto">
                  <a aria-label="Home" href="#splash">
                    <Logo
                      className="w-auto h-8 sm:h-10"
                      alt="Trace Camp Logo"
                    />
                  </a>
                  <MobileSideBar />
                </div>
              </div>
              <div className="hidden md:block md:ml-10 md:pr-4">
                <a
                  href="#splash"
                  className="font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-900 focus:outline-none focus:text-gray-900"
                >
                  Home
                </a>
                <a
                  href="#courses"
                  className="ml-8 font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-900 focus:outline-none focus:text-gray-900"
                >
                  Courses
                </a>
                <a
                  href="#faq"
                  className="ml-8 font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-900 focus:outline-none focus:text-gray-900"
                >
                  FAQ
                </a>
                <a
                  href="#contact"
                  className="ml-8 font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-900 focus:outline-none focus:text-gray-900"
                >
                  Contact
                </a>
              </div>
            </nav>
          </div>

          {/* <!--
        Mobile menu, show/hide based on menu open state.

        Entering: "duration-150 ease-out"
          From: "opacity-0 scale-95"
          To: "opacity-100 scale-100"
        Leaving: "duration-100 ease-in"
          From: "opacity-100 scale-100"
          To: "opacity-0 scale-95"
      --> */}
          <Transition
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
            show={sidebarOpen}
            onExited={hideSidebar}
          >
            <div className="absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden">
              <div className="rounded-lg shadow-md">
                <div className="overflow-hidden bg-white rounded-lg shadow-xs">
                  <div className="flex items-center justify-between px-5 pt-4">
                    <a href="#splash">
                      <Logo
                        className="w-auto h-8"
                        alt="Trace Camp Logo"
                      />
                    </a>
                    <div className="-mr-2">
                      <button
                        type="button"
                        className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
                        aria-label="Close sidebar"
                        onClick={closeSidebar}
                      >
                        <svg
                          className="w-6 h-6"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="px-2 pt-2 pb-3">
                    <a
                      href="#splash"
                      className="block px-3 py-2 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50"
                    >
                      Home
                    </a>
                    <a
                      href="#courses"
                      className="block px-3 py-2 mt-1 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50"
                    >
                      Courses
                    </a>
                    <a
                      href="#faq"
                      className="block px-3 py-2 mt-1 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50"
                    >
                      FAQ
                    </a>
                    <a
                      href="#contact"
                      className="block px-3 py-2 mt-1 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50"
                    >
                      Contact
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
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

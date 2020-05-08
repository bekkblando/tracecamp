import React from 'react';
import Transition from 'repositories/Transition/Transition';
import MinimalFooter from 'components/MinimalFooter/MinimalFooter';
import Logo from 'components/Logo/Logo';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { useLocation } from '@reach/router';
import { useFuzzy } from 'react-use-fuzzy';

const imageDimensions = {
  width: '239px',
  height: '135px',
};

const fuseOptions = {
  keys: ['title', 'slug'],
};

export default function Application({ children, nav }) {
  const { result, keyword, search } = useFuzzy(
    nav.links,
    fuseOptions,
  );

  const results =
    result && result[0] && result[0].slug
      ? result
      : result.map((wrapper) => wrapper.item);

  const { pathname } = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(
    false,
  );
  const [
    hideSidebarMenu,
    setHideSidebarMenu,
  ] = React.useState(true);

  const openSidebar = () => {
    setIsSidebarOpen(true);
    setHideSidebarMenu(false);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const hideSidebar = () => {
    setHideSidebarMenu(true);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-white">
      {/* Off-canvas menu for mobile */}
      <div
        className={`md:hidden ${
          hideSidebarMenu ? 'hidden ' : ''
        }`}
      >
        <div className="fixed inset-0 z-40 flex">
          {/* <!--
        Off-canvas menu overlay, show/hide based on off-canvas menu state.

        Entering: "transition-opacity ease-linear duration-300"
          From: "opacity-0"
          To: "opacity-100"
        Leaving: "transition-opacity ease-linear duration-300"
          From: "opacity-100"
          To: "opacity-0"
      --> */}
          <Transition
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            show={isSidebarOpen}
            onExited={hideSidebar}
          >
            <div
              className="fixed inset-0"
              onClick={closeSidebar}
            >
              <div className="absolute inset-0 bg-gray-600 opacity-75"></div>
            </div>
          </Transition>
          {/* <!--
        Off-canvas menu, show/hide based on off-canvas menu state.

        Entering: "transition ease-in-out duration-300 transform"
          From: "-translate-x-full"
          To: "translate-x-0"
        Leaving: "transition ease-in-out duration-300 transform"
          From: "translate-x-0"
          To: "-translate-x-full"
      --> */}
          <Transition
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
            show={isSidebarOpen}
          >
            <div className="relative flex flex-col flex-1 w-full max-w-xs bg-white">
              <div className="absolute top-0 right-0 p-1 -mr-14">
                {isSidebarOpen && (
                  <button
                    className="flex items-center justify-center w-12 h-12 rounded-full focus:outline-none focus:bg-gray-600"
                    aria-label="Close sidebar"
                    onClick={closeSidebar}
                  >
                    <svg
                      className="w-6 h-6 text-white"
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
                )}
              </div>
              <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                {/* <div className="flex items-center flex-shrink-0 px-4">
                  <img
                    className="w-auto h-8"
                    src="https://tailwindui.com/img/logos/workflow-logo-on-white.svg"
                    alt="Workflow"
                  />
                </div> */}
                <Link
                  to="/"
                  className="flex items-center flex-shrink-0 px-4"
                >
                  <Logo className="w-9 h-9" />
                  <span className="ml-2 font-bold text-xl text-gray-800">
                    Trace Camp
                  </span>
                </Link>
                <nav className="px-2 mt-5">
                  {/* <Link
                    to="/"
                    className="flex items-center px-2 py-2 text-base font-medium leading-6 text-gray-900 transition duration-150 ease-in-out bg-gray-100 rounded-md group focus:outline-none focus:bg-gray-200"
                  >
                    <svg
                      className="w-6 h-6 mr-4 text-gray-500 transition duration-150 ease-in-out group-hover:text-gray-500 group-focus:text-gray-600"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10M9 21h6"
                      />
                    </svg>
                    Home
                  </Link> */}
                  <Link
                    to="/"
                    className="flex items-center px-2 py-2 mt-1 text-base font-medium leading-6 text-gray-600 transition duration-150 ease-in-out rounded-md group hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-100"
                  >
                    <svg
                      className="w-6 h-6 mr-4 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-500 group-focus:text-gray-500"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10M9 21h6" />
                    </svg>
                    Home
                  </Link>
                  <Link
                    to="/#courses"
                    className="flex items-center px-2 py-2 mt-1 text-base font-medium leading-6 text-gray-600 transition duration-150 ease-in-out rounded-md group hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-100"
                  >
                    <svg
                      className="w-6 h-6 mr-4 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-500 group-focus:text-gray-500"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    Courses
                  </Link>
                  <Link
                    to="/#faq"
                    className="flex items-center px-2 py-2 mt-1 text-base font-medium leading-6 text-gray-600 transition duration-150 ease-in-out rounded-md group hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-100"
                  >
                    <svg
                      className="w-6 h-6 mr-4 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-500 group-focus:text-gray-500"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    FAQ
                  </Link>
                  <Link
                    to="/#contact"
                    className="flex items-center px-2 py-2 mt-1 text-base font-medium leading-6 text-gray-600 transition duration-150 ease-in-out rounded-md group hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-100"
                  >
                    <svg
                      className="w-6 h-6 mr-4 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-500 group-focus:text-gray-500"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Contact
                  </Link>
                </nav>
              </div>
              {/* <div className="flex flex-shrink-0 p-4 border-t border-gray-200">
                <a
                  href="/"
                  className="flex-shrink-0 block group focus:outline-none"
                >
                  <div className="flex items-center">
                    <div>
                      <img
                        className="inline-block w-10 h-10 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-base font-medium leading-6 text-gray-700 group-hover:text-gray-900">
                        Tom Cook
                      </p>
                      <p className="text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out group-hover:text-gray-700 group-focus:underline">
                        View profile
                      </p>
                    </div>
                  </div>
                </a>
              </div> */}
            </div>
          </Transition>

          <div className="flex-shrink-0 w-14">
            {/* Force sidebar to shrink to fit close icon */}
          </div>
        </div>
      </div>

      {/* Static sidebar for desktop */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64 bg-white border-r border-gray-200">
          {/* <div className="flex flex-col flex-1 h-0 pt-5 pb-4 overflow-y-auto"> */}
          <div className="flex flex-col pt-5 pb-4 flex-shrink-0">
            {/* <div className="flex items-center flex-shrink-0 px-4">
              <img
                className="w-auto h-8"
                src="https://tailwindui.com/img/logos/workflow-logo-on-white.svg"
                alt="Workflow"
              />
            </div> */}
            <Link
              to="/"
              className="flex items-center flex-shrink-0 px-4"
            >
              <Logo className="h-9 w-9" />
              <span className="ml-2 font-bold text-xl text-gray-800">
                Trace Camp
              </span>
            </Link>
            {/* Sidebar component, swap this element with another sidebar if you like */}
            {/* <nav className="flex-1 px-2 mt-5 bg-white"> */}
            <nav className="px-2 mt-5 bg-white">
              {/* <Link
                to="/"
                className="flex items-center px-2 py-2 text-sm font-medium leading-5 text-gray-900 transition duration-150 ease-in-out bg-gray-100 rounded-md group hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-200"
              >
                <svg
                  className="w-6 h-6 mr-3 text-gray-500 transition duration-150 ease-in-out group-hover:text-gray-500 group-focus:text-gray-600"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10M9 21h6"
                  />
                </svg>
                Home
              </Link> */}
              <Link
                to="/#courses"
                className="flex items-center px-2 py-2 mt-1 text-sm font-medium leading-5 text-gray-600 transition duration-150 ease-in-out rounded-md group hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-100"
              >
                <svg
                  className="w-6 h-6 mr-3 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-500 group-focus:text-gray-500"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10M9 21h6" />
                </svg>
                Home
              </Link>
              <Link
                to="/#courses"
                className="flex items-center px-2 py-2 mt-1 text-sm font-medium leading-5 text-gray-600 transition duration-150 ease-in-out rounded-md group hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-100"
              >
                <svg
                  className="w-6 h-6 mr-3 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-500 group-focus:text-gray-500"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Courses
              </Link>
              <Link
                to="/#faq"
                className="flex items-center px-2 py-2 mt-1 text-sm font-medium leading-5 text-gray-600 transition duration-150 ease-in-out rounded-md group hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-100"
              >
                <svg
                  className="w-6 h-6 mr-3 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-500 group-focus:text-gray-500"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                FAQ
              </Link>
              <Link
                to="/#contact"
                className="flex items-center px-2 py-2 mt-1 text-sm font-medium leading-5 text-gray-600 transition duration-150 ease-in-out rounded-md group hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-100"
              >
                <svg
                  className="w-6 h-6 mr-3 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-500 group-focus:text-gray-500"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact
              </Link>
            </nav>
          </div>
          {/* <div className="flex flex-shrink-0 p-4 border-t border-gray-200">
            <a
              href="/"
              className="flex-shrink-0 block w-full group"
            >
              <div className="flex items-center">
                <div>
                  <img
                    className="inline-block rounded-full h-9 w-9"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium leading-5 text-gray-700 group-hover:text-gray-900">
                    Tom Cook
                  </p>
                  <p className="text-xs font-medium leading-4 text-gray-500 transition duration-150 ease-in-out group-hover:text-gray-700">
                    View profile
                  </p>
                </div>
              </div>
            </a>
          </div> */}
          <div className="flex flex-col flex-shrink-0">
            <div className="p-2">
              <Link
                to={`/courses/${nav.course.courseSlug}/`}
                className="block relative overflow-hidden rounded-lg shadow-lg w-full flex-shrink-0"
                style={imageDimensions}
              >
                <Img
                  className="absolute inset-0"
                  fixed={
                    nav.course.featuredImage.childImageSharp
                      .fixed
                  }
                />
                <div className="absolute inset-0 bg-indigo-700 opacity-75" />
                <p className="absolute left-4 top-4 right-4 font-bold text-lg text-white leading-tight">
                  {nav.course.title}
                </p>
                <p className="absolute text-sm bottom-4 left-4 uppercase text-indigo-100">
                  {nav.links.length} sections
                </p>
              </Link>
            </div>
            <div>
              <div className="w-full px-2 flex md:ml-0 border-t border-b mt-6 -mx-2 border-gray-200">
                <label
                  htmlFor="search_field"
                  className="sr-only"
                >
                  Search
                </label>
                <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                  <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      />
                    </svg>
                  </div>
                  <input
                    id="search_field"
                    className="block w-full h-full pl-8 pr-3 py-2 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400"
                    placeholder="Search"
                    type="search"
                    value={keyword}
                    onChange={(event) =>
                      search(event.target.value)
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col overflow-y-auto">
            <nav className="p-2">
              {results.map((link, index) =>
                `/courses/${link.slug}/` === pathname ? (
                  <div key={link.slug}>
                    <a
                      href="#!"
                      className="px-2 py-2 block mt-1 text-sm font-medium leading-6 text-gray-900 transition duration-150 ease-in-out bg-gray-100 rounded-md group focus:outline-none focus:bg-gray-200"
                    >
                      <span className="mr-1 text-gray-500 transition duration-150 ease-in-out group-hover:text-gray-500 group-focus:text-gray-600">
                        {index + 1}.
                      </span>
                      {link.title}
                    </a>
                  </div>
                ) : (
                  <div key={link.slug}>
                    <Link
                      to={`/courses/${link.slug}/`}
                      className="px-2 py-2 block mt-1 text-sm font-medium leading-6 text-gray-600 transition duration-150 ease-in-out rounded-md group hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-100"
                    >
                      <span className="mr-1 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-500 group-focus:text-gray-500">
                        {index + 1}.
                      </span>
                      {link.title}
                    </Link>
                  </div>
                ),
              )}
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-1 w-0 overflow-hidden">
        <div className="pt-1 pl-1 md:hidden sm:pl-3 sm:pt-3">
          <button
            className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150"
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
        <main
          className="relative z-0 flex-1 overflow-y-auto focus:outline-none"
          tabIndex={0}
        >
          <div className="flex flex-col min-h-full px-4 pt-2 pb-6 mx-auto max-w-7xl sm:px-6 md:px-8 md:py-6">
            {/* Replace with your content */}
            {/* <div className="border-4 border-gray-200 border-dashed rounded-lg h-96"></div> */}
            <div className="flex-grow">{children}</div>
            <MinimalFooter />
            {/* /End replace */}
          </div>
        </main>
      </div>
    </div>
  );
}

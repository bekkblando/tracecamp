import React, { useState } from 'react';
import Transition from 'repositories/Transition/Transition';
import Logo from 'components/Logo/Logo';

export const links = [
  { label: 'Home', href: '#splash' },
  //{ label: 'Courses', href: '#courses' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Instructors', href: '#instructors' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
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

  const XIcon = () => {};

  const OpenSideBarButton = () => (
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
    <>
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
              <OpenSideBarButton />
            </div>
          </div>
          <div className="hidden md:block md:ml-10 md:pr-4 flex flex-row space-x-4">
            {links.map(({ label, href }) => (
              <a
                href={href}
                className="font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-900 focus:outline-none focus:text-gray-900"
              >
                {label}
              </a>
            ))}
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
                  <Logo className="w-auto h-8" />
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
                {links.map(({ label, href }) => (
                  <a
                    href={href}
                    className="block px-3 py-2 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </>
  );
};

export default Navbar;

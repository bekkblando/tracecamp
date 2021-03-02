import React from 'react';
import { Link /* useStaticQuery, graphql */ } from 'gatsby';
import { useLocation } from '@reach/router';

import { links } from './Splash/Navbar';

export default function Footer() {
  const { pathname } = useLocation();

  const copyright = (
    <div className="">
      <p className="text-base leading-6 text-center text-gray-500">
        &copy; {new Date().getFullYear()} Trace Camp. All
        rights reserved.
      </p>
    </div>
  );

  const nav = (
    <nav className="flex flex-wrap justify-center">
      {links.map(({ label, href }) => (
        <div className="px-5 py-2">
          <a
            href={href}
            className="text-base leading-6 text-gray-500 hover:text-gray-900"
          >
            {label}
          </a>
        </div>
      ))}
    </nav>
  );

  return (
    <div id="footer" className="bg-gray-50">
      <div className="max-w-screen-xl px-4 py-12 mx-auto overflow-hidden sm:px-6 lg:px-8 flex flex-col space-y-4">
        {copyright}
        {nav}
      </div>
    </div>
  );
}

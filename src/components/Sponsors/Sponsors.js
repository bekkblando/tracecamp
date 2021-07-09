import React from 'react';

import clemson_logo from './clemson_logo.svg';
import trace_logo from './trace_logo.png';
import itsab_logo from './itsab_logo.svg';
import clemson_libraries_logo from './clemson_libraries.png';

const sponsers = [
  {
    name: 'Clemson University',
    image: clemson_logo,
    url: 'https://clemson.edu/',
  },
  {
    name: 'ITSAB',
    image: itsab_logo,
    url:
      'https://ccit.clemson.edu/about/governance/it-student-advisory-board/',
  },
  {
    name: 'Trace Research Group',
    image: trace_logo,
    url: 'https://computing.clemson.edu/trace/',
  },
  {
    name: 'Clemson Libraries',
    image: clemson_libraries_logo,
    url: 'https://libraries.clemson.edu/',
  },
];

export default function Sponsors() {
  return (
    <div id="sponsors" className="bg-gray-50">
      <div className="max-w-screen-md px-4 py-12 mx-auto sm:px-6 lg:py-16 lg:px-8">
        {/* title */}
        <p className="text-base font-semibold leading-6 tracking-wider text-center text-gray-600 uppercase">
          Special thanks to our sponsors and partners
        </p>
        {/* container */}
        <div
          className={`mt-6 grid grid-cols-4 gap-0.5 lg:mt-8`}
        >
          {sponsers.map(({ name, image, url }, index) => (
            <a
              aria-label={name}
              className="flex justify-center col-span-1 px-8 py-8"
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
            >
              <img
                src={image}
                alt={name}
                className="h-full max-h-12"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

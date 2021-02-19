import React from 'react';

export default function Footer() {
  return (
    <div className="bg-white">
      <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center md:order-2">
          <a
            href="https://github.com/bekkblando/tracecamp_curriculum"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-6 text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">GitHub</span>
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="http://tracecamp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-6 text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Website</span>
            <svg
              width={24}
              height={24}
              fillRule="evenodd"
              clipRule="evenodd"
              fill="currentColor"
            >
              <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12S0 18.623 0 12 5.377 0 12 0m2.557 16H9.442c.546 2.46 1.441 4.114 2.558 5.744 1.194-1.741 2.041-3.41 2.557-5.744M7.4 16H2.833c1.236 2.825 3.704 4.972 6.755 5.716A17.556 17.556 0 017.4 16m13.767 0H16.6a17.617 17.617 0 01-2.175 5.694c3.012-.763 5.517-2.895 6.742-5.694M7.162 10H2.2a10.088 10.088 0 000 4h4.915a20.028 20.028 0 01.047-4m7.661 0H9.176a18.016 18.016 0 00-.053 4h5.753a18.017 18.017 0 00-.053-4m6.977 0h-4.963c.148 1.328.166 2.671.048 4H21.8c.26-1.285.273-2.648 0-4M9.644 2.271C6.567 3.003 4.077 5.157 2.833 8h4.653a20.424 20.424 0 012.158-5.729m2.355-.048C10.91 3.993 10.089 5.676 9.536 8h4.927c-.534-2.246-1.337-3.948-2.464-5.777m2.368.069A20.45 20.45 0 0116.513 8h4.654c-1.232-2.816-3.762-4.958-6.8-5.708" />
            </svg>
          </a>
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-center text-base leading-6 text-gray-400">
            &copy; {new Date().getFullYear()} Trace Camp.
            All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { Link } from 'gatsby';

import DefaultLayout from 'layouts/Default/Default';
import SEO from 'components/Seo/Seo';

const NotFoundPage = () => (
  <DefaultLayout>
    <SEO title="404: Not found" />
    <div className="display flex items-center justify-center flex-col min-h-screen">
      <h1 className="text-center -mt-16">
        <span className="text-indigo-600 text-6xl font-bold leading-tight">
          404
        </span>
        <br />
        <span className="text-indigo-600 uppercase font-semibold leading-6 tracking-wider">
          Not found
        </span>
      </h1>
      <br />
      <p>
        You just hit a route that doesn&#39;t exist… the
        sadness.
      </p>
      <br />
      <div className="inline-flex rounded-md shadow">
        <Link
          to="/"
          className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
        >
          Return home
        </Link>
      </div>
    </div>
  </DefaultLayout>
);

export default NotFoundPage;

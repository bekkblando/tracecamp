import React from 'react';
import content from '../../content';

export default function Stats() {
  return (
    <div id="stats" className="pt-12 bg-gray-50 sm:pt-16">
      <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold leading-9 text-gray-900 sm:text-4xl sm:leading-10">
            Built by students, for students
          </h2>
          <p className="mt-3 text-xl leading-7 text-gray-500 sm:mt-4">
            Committed to helping students learn how to code.
            Teaching pragmatic programming. Meet our team of{' '}
            <a
              href="#instructors"
              className="font-medium text-gray-700 underline"
            >
              instructors
            </a>
            .
          </p>
        </div>
      </div>
      <div className="pb-12 mt-10 bg-white sm:pb-16">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-gray-50"></div>
          <div className="relative max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <dl
                className={`bg-white rounded-lg shadow-lg sm:grid sm:grid-cols-${content.stats.length}`}
              >
                {content.stats.map(
                  ([top, bottom], index) => {
                    let className =
                      'flex flex-col p-6 text-center border-gray-100 sm:border-0';

                    // first stat
                    if (index == 0)
                      className += ' border-b sm:border-r';
                    //middle stats
                    else if (
                      index !=
                      content.stats.length - 1
                    )
                      className +=
                        ' border-b border-t sm:border-r sm:border-l';
                    //last stat
                    else
                      className += ' border-t sm:border-l';

                    // render
                    return (
                      <div
                        className={className}
                        key={index}
                      >
                        <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                          {bottom}
                        </dt>
                        <dd className="order-1 text-5xl font-extrabold leading-none text-indigo-600">
                          {top}
                        </dd>
                      </div>
                    );
                  },
                )}

                {/* <div className="flex flex-col p-6 text-center border-b border-gray-100 sm:border-0 sm:border-r">
                  <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                    Online
                  </dt>
                  <dd className="order-1 text-5xl font-extrabold leading-none text-indigo-600">
                    100%
                  </dd>
                </div>
                <div className="flex flex-col p-6 text-center border-t border-b border-gray-100 sm:border-0 sm:border-l sm:border-r">
                  <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                    Graduates
                  </dt>
                  <dd className="order-1 text-5xl font-extrabold leading-none text-indigo-600">
                    70+
                  </dd>
                </div>
                <div className="flex flex-col p-6 text-center border-t border-gray-100 sm:border-0 sm:border-l">
                  <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                    Week
                  </dt>
                  <dd className="order-1 text-5xl font-extrabold leading-none text-indigo-600">
                    1
                  </dd>
                </div> */}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
// import mailtoLink from 'mailto-link';

export default function Faq() {
  return (
    <div id="faq" className="bg-white">
      <div className="max-w-screen-xl px-4 pt-12 pb-16 mx-auto sm:pt-16 sm:pb-20 sm:px-6 lg:pt-20 lg:pb-28 lg:px-8">
        <h2 className="text-3xl font-extrabold leading-9 text-gray-900">
          Frequently asked questions
        </h2>
        <div className="pt-10 mt-6 border-t-2 border-gray-100">
          <dl className="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <div>
                <dt className="text-lg font-medium leading-6 text-gray-900">
                  How are these courses free?
                </dt>
                <dd className="mt-2">
                  <p className="text-base leading-6 text-gray-500">
                    These courses are made by members of
                    Trace Camp. Trace Camp has previously
                    received funding from our{' '}
                    <a
                      className="font-medium text-gray-700 underline"
                      href="#sponsors"
                    >
                      sponsors
                    </a>
                    .
                  </p>
                </dd>
              </div>
              {/* <div className="mt-12">
                <dt className="text-lg font-medium leading-6 text-gray-900">
                  Help, my code isn’t working!
                </dt>
                <dd className="mt-2">
                  <p className="text-base leading-6 text-gray-500">
                    During the bootcamp, ask your
                    instructor! They will be glad to help
                    you. After the bootcamp, feel free to
                    make an issue on the course&rsquo;s
                    GitHub page.
                  </p>
                </dd>
              </div> */}
              <div className="mt-12">
                <dt className="text-lg font-medium leading-6 text-gray-900">
                  Where can I find the details about the
                  bootcamp schedule?
                </dt>
                <dd className="mt-2">
                  <p className="text-base leading-6 text-gray-500">
                    More details about the weekly bootcamp
                    schedule and tracks can be found{' '}
                    <a
                      className="font-medium text-gray-700 underline"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.notion.so/Details-on-TRACE-Camp-5ceb8f8391134a618f7ca37d3a923732"
                    >
                      here
                    </a>
                    . Feel free to send us an email if you
                    have any questions.
                  </p>
                </dd>
              </div>
              {/* <div className="mt-12">
                <dt className="text-lg font-medium leading-6 text-gray-900">
                  Can I suggest a course?
                </dt>
                <dd className="mt-2">
                  <p className="text-base leading-6 text-gray-500">
                    Sure! We would love to know what
                    students want to learn. If we cannot
                    provide a course in a timely manner, we
                    will send you an alternative self-taught
                    curriculum.
                  </p>
                </dd>
              </div> */}
            </div>
            <div className="mt-12 md:mt-0">
              {/* <div>
                <dt className="text-lg font-medium leading-6 text-gray-900">
                  Where can I learn about the bootcamps?
                </dt>
                <dd className="mt-2">
                  <p className="text-base leading-6 text-gray-500">
                    Please check our main website for
                    upcoming bootcamps. We would love to
                    have you! Learn more at{' '}
                    <a
                      className="font-medium text-gray-700 underline"
                      href="http://tracecamp.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      tracecamp.com
                    </a>
                    .
                  </p>
                </dd>
              </div> */}
              {/* <div>
                <dt className="text-lg font-medium leading-6 text-gray-900">
                  Can I suggest a course?
                </dt>
                <dd className="mt-2">
                  <p className="text-base leading-6 text-gray-500">
                    Sure! We would love to know what
                    students want to learn. If your favorite
                    technology is not on the list, we still
                    encourage you to join and learn with us.
                  </p>
                </dd>
              </div> */}
              <div>
                <dt className="text-lg font-medium leading-6 text-gray-900">
                  Can I suggest a course?
                </dt>
                <dd className="mt-2">
                  <p className="text-base leading-6 text-gray-500">
                    Sure! We would love to know what
                    students want to learn. If your favorite
                    technology is not on the{' '}
                    <a
                      className="font-medium text-gray-700 underline"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.notion.so/Supported-Technologies-1f217441aca9421b99af421b1e2cb87f"
                    >
                      supported technologies
                    </a>{' '}
                    list, we still encourage you to join and
                    learn with us.
                  </p>
                </dd>
              </div>
              <div className="mt-12">
                <dt className="text-lg font-medium leading-6 text-gray-900">
                  Are the live streams from the bootcamps
                  available?
                </dt>
                <dd className="mt-2">
                  <p className="text-base leading-6 text-gray-500">
                    Check your discord or slack for the
                    livestream links. They are not public by
                    default, but we keep them online for
                    students.
                  </p>
                </dd>
              </div>
              {/* <div className="mt-12">
                <dt className="text-lg font-medium leading-6 text-gray-900">
                  How can I donate?
                </dt>
                <dd className="mt-2">
                  <p className="text-base leading-6 text-gray-500">
                    Please email{' '}
                    <a
                      className="font-medium text-gray-700 underline"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={mailtoLink({
                        to: 'mcneese@clemson.edu',
                        subject: 'Trace Camp Donation',
                      })}
                    >
                      Dr. McNeese
                    </a>{' '}
                    directly. Thank you for your donation.
                  </p>
                </dd>
              </div> */}
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}

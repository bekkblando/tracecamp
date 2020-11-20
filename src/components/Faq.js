import React from 'react';
//import mailtoLink from 'mailto-link';
import content from '../content';

const FAQ = ({ question, children }) => {
  return (
    <div className="">
      <dt className="text-lg font-medium leading-6 text-gray-900">
        {question}
      </dt>
      <dd className="mt-2">
        <p className="text-base leading-6 text-gray-500">
          {children}
        </p>
      </dd>
    </div>
  );
};

const Link = ({ href, children }) => (
  <a
    className="font-medium text-gray-700 underline"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Faq() {
  return (
    <div id="faq" className="bg-white">
      <div className="max-w-screen-xl px-4 pt-12 pb-16 mx-auto sm:pt-16 sm:pb-20 sm:px-6 lg:pt-20 lg:pb-28 lg:px-8">
        <h2 className="text-3xl font-extrabold leading-9 text-gray-900">
          Frequently asked questions
        </h2>
        <div className="pt-10 mt-6 border-t-2 border-gray-100">
          <dl className="grid md:grid-cols-2 gap-8">
            {/* <FAQ question="How are these courses free?">
              These courses are made by members of Trace
              Camp. Trace Camp has previously received
              funding from our{' '}
              <Link href="#sponsors">sponsors</Link>.
            </FAQ> */}
            <FAQ question="Where can I find the details about the bootcamp schedule?">
              More details about the weekly bootcamp
              schedule and tracks can be found{' '}
              <Link href={content.detailsUrl}>here</Link>.
              Feel free to send us an email if you have any
              questions.
            </FAQ>
            <FAQ question="Can I suggest a course?">
              Sure! We would love to know what students want
              to learn. There are future camps in the works
              that we hope cover more topics.
            </FAQ>
            <FAQ question="Are the live streams from the bootcamps available?">
              We do not have any recordings available to the
              public at the moment. However, students
              accepted within the camp have access.
            </FAQ>
            <FAQ question="What has changed because of covid?">
              We have moved completely online for the time
              being. Last summers camp was in this format
              and worked really well.
            </FAQ>
            {/* Unused questions (some of these were commented out in the old code) */}
            {/* <FAQ question="Do these camps cost anything?">
              Nope! They are 100% free.
            </FAQ> */}
            {/* <FAQ question="How can I donate?">
              Please email{' '}
              <Link
                href={mailtoLink({
                  to: 'mcneese@clemson.edu',
                  subject: 'Trace Camp Donation',
                })}
              >
                Dr. McNeese
              </Link>{' '}
              directly. Thank you for your donation.
            </FAQ> */}
            {/* <FAQ question="Help, my code isn’t working!">
              During the bootcamp, ask your instructor! They
              will be glad to help you. After the bootcamp,
              feel free to make an issue on the course's
              GitHub page.
            </FAQ> */}
            {/* <FAQ question="How are these courses free?">
              These courses are made by members of Trace
              Camp. Trace Camp has previously received
              funding from our{' '}
              <Link href="#sponsors">sponsors</Link>.
            </FAQ> */}
          </dl>
        </div>
      </div>
    </div>
  );
}

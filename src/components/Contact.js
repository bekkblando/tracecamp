import React from 'react';
import mailtoLink from 'mailto-link';
import content from '../content';

const minHeightStyle = {
  minHeight: '122px',
};

const Contact = () => {
  const email_icon = (
    <svg
      className="flex-shrink-0 w-6 h-6 text-gray-400"
      stroke="currentColor"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );

  return (
    <div id="contact" className="relative bg-gray-50">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50"></div>
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="px-4 py-16 bg-gray-50 sm:px-6 lg:col-span-2 lg:px-8 lg:py-12 xl:pr-12">
          <div className="max-w-lg mx-auto">
            <h2 className="text-2xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-3xl sm:leading-9 text-center">
              Get in touch
            </h2>
            <p className="mt-3 text-lg leading-6 text-gray-500">
              Send us an email with the address below. We
              would be glad to answer questions about our
              bootcamps, and events.
            </p>
            <dl className="mt-8 text-base leading-6 text-gray-500">
              <div className="mt-3">
                <dt className="sr-only">Email</dt>
                <dd className="flex justify-center">
                  {email_icon}
                  <span className="ml-3">
                    <a
                      href={mailtoLink({
                        to: content.contact.email,
                      })}
                    >
                      {content.contact.email}
                    </a>
                  </span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

// const Contact = () => {
//   const [name, setName] = React.useState('');
//   const [email, setEmail] = React.useState('');
//   const [message, setMessage] = React.useState('');
//   return (
//     <div id="contact" className="relative bg-gray-50">
//       <div className="absolute inset-0">
//         <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50"></div>
//       </div>
//       <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
//         <div className="px-4 py-16 bg-gray-50 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
//           <div className="max-w-lg mx-auto">
//             <h2 className="text-2xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-3xl sm:leading-9">
//               Get in touch
//             </h2>
//             <p className="mt-3 text-lg leading-6 text-gray-500">
//               Drop us a line. We would be glad to answer
//               questions about our upcoming courses,
//               bootcamps, and events.
//             </p>
//             <dl className="mt-8 text-base leading-6 text-gray-500">
//               <div>
//                 <dt className="sr-only">Postal address</dt>
//                 <dd>
//                   {content.contact.address.map(
//                     (line, index) => (
//                       <p key={index}>{line}</p>
//                     ),
//                   )}
//                 </dd>
//               </div>
//               <div className="mt-3">
//                 <dt className="sr-only">Email</dt>
//                 <dd className="flex">
//                   <svg
//                     className="flex-shrink-0 w-6 h-6 text-gray-400"
//                     stroke="currentColor"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                     />
//                   </svg>
//                   <span className="ml-3">
//                     {content.contact.email}
//                   </span>
//                 </dd>
//               </div>
//             </dl>
//             <p className="mt-6 text-base leading-6 text-gray-500">
//               Looking for leadership?{' '}
//               <a
//                 href={mailtoLink({
//                   to: content.contact.email,
//                   subject: 'Join Trace Camp Staff',
//                 })}
//                 className="font-medium text-gray-700 underline"
//               >
//                 Inquire
//               </a>
//               .
//             </p>
//           </div>
//         </div>
//         <div className="px-4 py-16 bg-gray-50 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
//           <div className="max-w-lg mx-auto lg:max-w-none">
//             <form
//               className="grid grid-cols-1 row-gap-6"
//               onSubmit={(event) => {
//                 event.preventDefault();
//                 window.open(
//                   mailtoLink({
//                     to: content.contact.email,
//                     cc: email,
//                     subject: 'Trace Camp',
//                     body: message,
//                   }),
//                 );
//                 setName('');
//                 setEmail('');
//                 setMessage('');
//               }}
//             >
//               <div>
//                 <label
//                   htmlFor="full_name"
//                   className="sr-only"
//                 >
//                   Full name
//                 </label>
//                 <div className="relative rounded-md shadow-sm">
//                   <input
//                     id="full_name"
//                     className="block w-full px-4 py-3 placeholder-gray-500 transition duration-150 ease-in-out form-input"
//                     placeholder="Full name"
//                     value={name}
//                     onChange={(event) =>
//                       setName(event.target.value)
//                     }
//                   />
//                 </div>
//               </div>
//               <div>
//                 <label htmlFor="email" className="sr-only">
//                   Email
//                 </label>
//                 <div className="relative rounded-md shadow-sm">
//                   <input
//                     id="email"
//                     type="email"
//                     className="block w-full px-4 py-3 placeholder-gray-500 transition duration-150 ease-in-out form-input"
//                     placeholder="Email"
//                     value={email}
//                     onChange={(event) =>
//                       setEmail(event.target.value)
//                     }
//                   />
//                 </div>
//               </div>
//               <div>
//                 <label
//                   htmlFor="message"
//                   className="sr-only"
//                 >
//                   Message
//                 </label>
//                 <div className="relative rounded-md shadow-sm">
//                   <textarea
//                     id="message"
//                     rows="4"
//                     className="block w-full px-4 py-3 placeholder-gray-500 transition duration-150 ease-in-out form-input"
//                     placeholder="Message"
//                     style={minHeightStyle}
//                     value={message}
//                     onChange={(event) =>
//                       setMessage(event.target.value)
//                     }
//                   ></textarea>
//                 </div>
//               </div>
//               <div className="">
//                 <span className="inline-flex rounded-md shadow-sm">
//                   <button
//                     type="submit"
//                     className="inline-flex justify-center px-6 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
//                   >
//                     Submit
//                   </button>
//                 </span>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

export default Contact;

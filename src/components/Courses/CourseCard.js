import React from 'react';
import Img from 'gatsby-image';
import Link from 'gatsby';

const CourseCard = ({
  title,
  thumbnail,
  slug,
  description,
  duration,
  date,
  technologies,
  location,
}) => {
  const Tag = ({ name }) => (
    <div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-indigo-200 text-indigo-700 rounded-full mr-1 mb-1">
      {name}
    </div>
  );

  return (
    <div
      id={slug}
      className="flex flex-col overflow-hidden rounded-lg shadow-lg"
    >
      <div className="flex-shrink-0">
        <Img
          className="object-cover w-full h-48"
          fluid={thumbnail.childImageSharp.fluid}
        />
      </div>
      <div className="flex flex-col justify-between flex-1 p-6 bg-white">
        <div className="flex-1">
          <div className="mt-2">
            <p className="text-sm leading-5 text-gray-500">
              {location}
            </p>
          </div>

          <h3 className="mt-2 text-xl font-semibold leading-7 text-gray-900">
            {title}
          </h3>

          <div className="mt-3 flex flex-wrap">
            {technologies.map((name, index) => (
              <Tag name={name} key={index} />
            ))}
          </div>

          <p className="mt-3 text-base leading-6 text-gray-500">
            {description}
          </p>
        </div>

        <div className="mt-5 text-base leading-6 font-semibold text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150">
          <time dateTime="">{date}</time>
          <span className="mx-2">&middot;</span>
          <span>{duration}</span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;

import React from 'react';
import Splash from 'components/Splash/Splash';
import Courses from 'components/Courses/Courses';
import Features from 'components/Features';
import Testimonials from 'components/Testimonials';
import Stats from 'components/Stats';
import Projects from 'components/Projects';
import Cta from 'components/Cta';
import Faq from 'components/Faq';
import Contact from 'components/Contact';
import Instructors from 'components/Instructors';
import Sponsors from 'components/Sponsors/Sponsors';
import Footer from 'components/Footer';
import Seo from 'components/Seo/Seo';

export default function IndexPage() {
  return (
    // Layout: Default
    <React.Fragment>
      <Seo title="Home" />
      <Splash />
      <Features />
      <Testimonials />
      <Courses />
      <Stats />
      <Projects />
      <Faq />
      {/* <Cta /> */}
      <Instructors />
      <Contact />
      <Sponsors />
      <Footer />
    </React.Fragment>
  );
}

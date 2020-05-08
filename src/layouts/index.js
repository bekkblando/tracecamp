import React from 'react';
import DefaultLayout from 'layouts/Default/Default';
import ApplicationLayout from 'layouts/Application/Application';

export default function layout({ children, pageContext }) {
  if (pageContext.layout === 'Application') {
    // what about default around application
    return (
      <ApplicationLayout nav={pageContext.nav}>
        {children}
      </ApplicationLayout>
    );
  }
  return <DefaultLayout>{children}</DefaultLayout>;
}

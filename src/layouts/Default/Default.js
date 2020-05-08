import React from 'react';
// import HttpsRedirect from 'react-https-redirect';
import { ToastProvider } from 'repositories/Toast/toastContext';
import ToastContainer from 'repositories/Toast/ToastContainer';
import Styling from 'layouts/Styling/Styling';

export default function Default({ children }) {
  return (
    <React.Fragment>
      {/* <HttpsRedirect> */}
      <Styling />
      <ToastProvider>
        <ToastContainer>{children}</ToastContainer>
      </ToastProvider>
      {/* </HttpsRedirect> */}
    </React.Fragment>
  );
}

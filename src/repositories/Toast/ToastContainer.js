import React from 'react';
import PropTypes from 'prop-types';

import Toast from './Toast';
import { useToast } from './toastContext';

export default function ToastContainer({ children }) {
  const { toasts } = useToast();

  if (toasts.length === 0) {
    return children;
  }

  return (
    <React.Fragment>
      {children}
      <div className="fixed inset-0 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end">
        {toasts.map(({ content, id }) => {
          return (
            <Toast key={id} toastId={id}>
              {content}
            </Toast>
          );
        })}
      </div>
    </React.Fragment>
  );
}

ToastContainer.propTypes = {
  children: PropTypes.node,
};

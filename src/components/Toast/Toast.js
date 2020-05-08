import React from 'react';
import { useToast } from 'repositories/Toast/toastContext';

export default function Marketing() {
  const { addToast } = useToast();

  return (
    <React.Fragment>
      <div
        onClick={() => {
          addToast('Good job!');
        }}
      >
        Toast
      </div>
    </React.Fragment>
  );
}

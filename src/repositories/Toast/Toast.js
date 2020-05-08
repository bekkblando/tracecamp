import React from 'react';
import PropTypes from 'prop-types';
import { useTimeoutFn } from 'react-use';

import CloseIcon from './Close';
import CheckCircleIcon from './CheckCircle';

import Transition from './Transition';
import { useToast } from './toastContext';

export default function Toast({ children, toastId }) {
  const { removeToast } = useToast();
  // const router = useRouter();
  const [show, setShow] = React.useState(true);
  const [
    timedout,
    cancelTimeout,
    resetTimeout,
  ] = useTimeoutFn(hide, 5000);

  function hide() {
    if (timedout() === false) {
      cancelTimeout();
    }

    setShow(false);
  }

  function onMouseEnter() {
    cancelTimeout();
  }

  function onMouseLeave() {
    resetTimeout();
  }

  React.useEffect(() => {
    return () => {
      if (show === false) {
        removeToast(toastId);
      }
    };
  });

  return (
    <Transition
      appear={true}
      enter="transform ease-out duration-300 transition"
      enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
      enterTo="translate-y-0 opacity-100 sm:translate-x-0"
      leave="transition ease-in duration-100"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      show={show}
    >
      <div
        className="max-w-xs w-full bg-white shadow-lg rounded-lg mb-4 pointer-events-auto"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        role="presentation"
      >
        <div className="rounded-lg shadow-xs overflow-hidden">
          <div className="p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <CheckCircleIcon className="h-6 w-6 text-green-400" />
              </div>
              <div className="ml-3 w-0 flex-1 pt-0.5">
                <p className="text-sm leading-5 font-medium text-gray-900">
                  {children}
                </p>
              </div>
              <div className="ml-4 flex-shrink-0 flex">
                <button
                  className="inline-flex text-gray-400 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150"
                  onClick={hide}
                >
                  <CloseIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
}

Toast.propTypes = {
  children: PropTypes.node.isRequired,
  toastId: PropTypes.number.isRequired,
};

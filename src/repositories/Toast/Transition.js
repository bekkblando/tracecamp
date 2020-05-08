import PropTypes from 'prop-types';
import React from 'react';
import { CSSTransition } from 'react-transition-group';

function Transition({
  show = true,
  enter,
  enterFrom,
  enterTo,
  leave,
  leaveFrom,
  leaveTo,
  children,
  appear = false,
}) {
  const enterClasses = enter.split(' ');
  const enterFromClasses = enterFrom.split(' ');
  const enterToClasses = enterTo.split(' ');
  const leaveClasses = leave.split(' ');
  const leaveFromClasses = leaveFrom.split(' ');
  const leaveToClasses = leaveTo.split(' ');

  return (
    <CSSTransition
      addEndListener={(node, done) => {
        node.addEventListener('transitionend', done, false);
      }}
      appear={appear}
      in={show}
      onEnter={(node) => {
        node.classList.add(
          ...enterClasses,
          ...enterFromClasses,
        );
      }}
      onEntered={(node) => {
        node.classList.remove(
          ...enterToClasses,
          ...enterClasses,
        );
      }}
      onEntering={(node) => {
        node.classList.remove(...enterFromClasses);
        node.classList.add(...enterToClasses);
      }}
      onExit={(node) => {
        node.classList.add(
          ...leaveClasses,
          ...leaveFromClasses,
        );
      }}
      onExited={(node) => {
        node.classList.remove(
          ...leaveToClasses,
          ...leaveClasses,
        );
      }}
      onExiting={(node) => {
        node.classList.remove(...leaveFromClasses);
        node.classList.add(...leaveToClasses);
      }}
      unmountOnExit={true}
    >
      {children}
    </CSSTransition>
  );
}

Transition.propTypes = {
  appear: PropTypes.bool,
  children: PropTypes.node,
  enter: PropTypes.string,
  enterFrom: PropTypes.string,
  enterTo: PropTypes.string,
  leave: PropTypes.string,
  leaveFrom: PropTypes.string,
  leaveTo: PropTypes.string,
  show: PropTypes.bool,
};

export default Transition;

import React, { Children, useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ModalWindow from './ModalWindow';
import ModalTitle from './ModalTitle';
import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';
import { BaseProps, warn } from '../../../shared';
import getPortalWrapper from './getPortalWrapper';

import './modal.scss';


// this function wipes out the wrong children and warns about it.
const wipeOutIncorrectChildren = (child) => {
  if (child.type !== ModalTitle && child.type !== ModalBody && child.type !== ModalFooter) {
    warn(
      'Modal allows only Modal.Title, Modal.Body or Modal.footer children, other kind of elements will be wiped out',
    );
    return null;
  }
  return child;
};


/**
 * Modal component looks like a smaller window  with some content that shows up disabling the main window.
 */
// the React.memo has been used here rather than on the export line like other cases, to avoid wrapping the shortcut.
const Modal = React.memo((props) => {
  const { children, isOpen, onShow } = props;

  /* getPortalWrapper returns the element with the given id, in this case bi-modals
  * if it doesn't exist create a new div with the given id and returns it.
  */
  const modalDiv = getPortalWrapper('bi-modals');

  useEffect(() => () => {
    if (modalDiv && modalDiv.innerHTML === '') {
      modalDiv.remove();
    }
  }, []);

  // useEffect is used to run onShow prop only when modal shows up
  useEffect(() => {
    if (onShow && isOpen) {
      onShow();
    }
  }, [isOpen]);

  const childrenArray = Children.map(children, wipeOutIncorrectChildren);
  /**
     * React.createPortal is moving the ModalWindow component into a modal div created for this particular component.
     * This is done in order to have modal div as the latest div into body.
     * In this way the modal will be always in front of everything else present in the webpage.
     */
  return ReactDOM.createPortal(
    <ModalWindow {...props}>{childrenArray}</ModalWindow>,
    modalDiv,
  );
});

Modal.propTypes = {
  ...BaseProps,
  /**
   * This prop is required to show or hide the modal window.
   */
  isOpen: PropTypes.bool.isRequired,
  /**
   * onShow will be performed when each time the modal will be open
   */
  onShow: PropTypes.func,
};

Modal.defaultProps = {
  onShow: undefined,
};

Modal.Title = ModalTitle;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;

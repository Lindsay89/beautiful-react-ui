import React, { Children, useEffect } from 'react';
import PropTypes from 'prop-types';
import Portal from '../_Portal';
import ModalWindow from './ModalWindow';
import ModalTitle from './ModalTitle';
import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';
import { BaseProps, warn } from '../../../shared';

import './modal.scss';

// this function wipes out the wrong children and warns about it.
const wipeOutIncorrectChildren = (child) => {
  if (child.type !== ModalTitle && child.type !== ModalBody && child.type !== ModalFooter) {
    warn(
      'Modal allows only Modal.Title, Modal.Body or Modal.Footer children, other kind of elements will be wiped out',
    );
    return null;
  }
  return child;
};


/**
 * A Modal component shows its children contents positioned over everything else in the document.
 */
// the React.memo has been used here rather than on the export line like other cases, to avoid wrapping the shortcut.
const Modal = React.memo((props) => {
  const { children, isOpen, onShow } = props;

  // useEffect is used to run onShow prop only when modal shows up
  useEffect(() => {
    if (onShow && isOpen) {
      onShow();
    }
  }, [isOpen]);

  return (
    <Portal id="bi-modals">
      <ModalWindow {...props}>
        {Children.map(children, wipeOutIncorrectChildren)}
      </ModalWindow>
    </Portal>
  );
});

Modal.propTypes = {
  ...BaseProps,
  /**
   * This prop defines whether the modal is shown or not.
   */
  isOpen: PropTypes.bool.isRequired,
  /**
   * onShow will be performed when each time the modal will be open
   */
  onShow: PropTypes.func,
  /**
   * The callback to be performed when clicking on clasable button
   */
  onToggle: PropTypes.func.isRequired,
  /**
   * Centered prop center the modal to place it in the middle of the screen viewport.
   */
  centered: PropTypes.bool,
  /**
   * It defines the modal's dimension
   */
  size: PropTypes.string,
  /**
   * It defines what kind of animation should be performed
   */
  animation: PropTypes.string,
  /**
   * If defined, this function will be run when clicking on backdrop
   */
  onBackdropClick: PropTypes.func,
  /**
   * this prop will replace the normal behavior of modal component
   */
  backdropRender: PropTypes.func,
  /**
  * it will be render instead of the close button
  */
  closeButtonRender: PropTypes.func,
};

Modal.defaultProps = {
  onShow: undefined,
  centered: false,
  size: 'default',
  animation: 'fade',
  onBackdropClick: undefined,
  backdropRender: undefined,
  closeButtonRender: undefined,
};

Modal.Title = ModalTitle;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;

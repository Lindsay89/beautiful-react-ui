import React, { Children, useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ModalTitle from './ModalTitle';
import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';
import { BaseProps, warn, makeCallback } from '../../../shared';

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

// runOnShowOnOpenModal is used to run onShow only when modal is opening
let runOnShowOnOpenModal;

/**
 * Modal component looks like a smaller window  with some content that shows up disabling the main window.
 */
const Modal = (props) => {
  const {
    id, style, className, children, isOpen, centered, size, animation, onBackdropClick, onShow,
    backdropRender,
  } = props;

  const classList = classNames('bi bi-modal', {
    'modal-open': isOpen,
    'modal-centered': centered,
    'modal-small': size === 'small',
    'modal-large': size === 'large',
    'modal-fade': animation === 'fade',
    'modal-scale': animation === 'scale',
    'modal-slideRight': animation === 'slideRight',
    'modal-slideLeft': animation === 'slideLeft',
    'modal-slideBottom': animation === 'slideBottom',
    'modal-slideTop': animation === 'slideTop',
  }, className);

  let modalDiv = document.getElementById('bi-modals');

  useEffect(() => {
    if (!modalDiv) {
      modalDiv = document.createElement('div');
      modalDiv.classList.add('modal-wrapper');
      modalDiv.id = 'bi-modals';
      document.body.appendChild(modalDiv);
    }
    return () => {
      if (modalDiv) {
        modalDiv.remove();
      }
    };
  }, []);

  if (onShow && runOnShowOnOpenModal === 0 && isOpen) {
    onShow();
  }

  if (isOpen) {
    runOnShowOnOpenModal += 1;
    /**
     * React.createPortal is a function that renders the first parameter (a React component)
     * within the second one (A DOM element).s
     * It is quite often used to create modals, tooltips or dropdown
     */
    return ReactDOM.createPortal(
      <div
        className="bi-show-modal"
        onClick={makeCallback(onBackdropClick)}
        role="presentation"
      >
        {!backdropRender && <div className="modal-backdrop" />}
        {backdropRender && backdropRender(props)}
        <div
          id={id}
          style={style}
          className={classList}
          onClick={event => event.stopPropagation()}
          role="presentation"
        >
          {Children.map(children, wipeOutIncorrectChildren)}
        </div>
      </div>,
      modalDiv,
    );
  }

  runOnShowOnOpenModal = 0;

  return null;
};

Modal.propTypes = {
  ...BaseProps,
  /**
   * This prop is required to show or hide the modal window.
   */
  isOpen: PropTypes.bool.isRequired,
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
   * onShow will be performed when each time the modal will be open
   */
  onShow: PropTypes.func,
  /**
   * this prop will replace the normal behavior of modal component
   */
  backdropRender: PropTypes.func,
};

Modal.defaultProps = {
  centered: false,
  size: 'default',
  animation: 'fade',
  onBackdropClick: undefined,
  onShow: undefined,
  backdropRender: undefined,
};

Modal.Title = ModalTitle;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;

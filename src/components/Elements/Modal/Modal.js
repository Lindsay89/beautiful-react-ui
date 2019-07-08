import React, { Children, useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ModalTitle from './ModalTitle';
import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';
import Button from '../Button';
import CloseIcon from '../_CloseIcon';
import { BaseProps, warn } from '../../../shared';

import './modal.scss';
// this function wipe out wrong children types.
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
 * Modal component is a controlled element that disables the main window and show a smaller window in front of it.
 */
const Modal = (props) => {
  const {
    id, style, className, children, isOpen, centered, size, animation, onToggle, onBackdropClick, onShow, onClose,
    backdropRender, closeButtonRender,
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
        document.body.removeChild(modalDiv);
      }
    };
  }, []);

  const onCloseFunctions = () => {
    if (onToggle) {
      if (onClose) {
        onToggle();
        onClose();
      } else {
        onToggle();
      }
    }
  };

  if (isOpen) {
    if (onShow) {
      onShow();
    }
    // one of the two following props must be defined.
    if (!onToggle && !closeButtonRender) {
      warn('It must be define one of the following two props to close the modal: onToggle or closeButtonRender');
    }

    /**
     * createPortal has been used to moved the component into a div that will be always in front of the main window
     * if open.
     * This div won't be in the "original" DOM tree but it will be the latest div into the entire DOM.
     */
    return ReactDOM.createPortal(
      <div className="bi-show-modal" onClick={onBackdropClick || backdropRender} role="presentation">
        {!backdropRender && <div className="modal-backdrop" />}
        {backdropRender && backdropRender()}
        <div
          id={id}
          style={style}
          className={classList}
          onClick={event => event.stopPropagation()}
          role="presentation"
        >
          {closeButtonRender && closeButtonRender(props)}
          {!closeButtonRender
            && (
              <Button color="transparent" className="close-button" onClick={onCloseFunctions}>
                <CloseIcon />
              </Button>
            )
          }
          {Children.map(children, child => wipeOutIncorrectChildren(child))}
        </div>
      </div>,
      modalDiv,
    );
  }

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
   * If defined, this prop will affect closable button into modal window.
   */
  onToggle: PropTypes.func,
  /**
   * If defined, this function will be run when clicking on backdrop
   */
  onBackdropClick: PropTypes.func,
  /**
   * onShow will be performed when each time the modal will be open
   */
  onShow: PropTypes.func,
  /**
   * onClose will be performed when each time the modal will be close
   */
  onClose: PropTypes.func,
  /**
   * this prop will replace the normal behavior of modal component
   */
  backdropRender: PropTypes.func,
  /**
   * this prop will effect the modal closable button.
   */
  closeButtonRender: PropTypes.func,
};

Modal.defaultProps = {
  centered: false,
  size: 'default',
  animation: 'fade',
  onToggle: undefined,
  onBackdropClick: undefined,
  onShow: undefined,
  onClose: undefined,
  backdropRender: undefined,
  closeButtonRender: undefined,
};

Modal.Title = ModalTitle;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;

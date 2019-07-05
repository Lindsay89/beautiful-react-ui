import React, { Children } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ModalTitle from './ModalTitle';
import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';
import Button from '../Button';
import Icon from '../Icon';
import { BaseProps } from '../../../shared';

import './modal.scss';

// this function wipe out wrong children types.
const wipeOutIncorrectChildren = (child) => {
  if (child.type !== ModalTitle && child.type !== ModalBody && child.type !== ModalFooter) {
    /**
    * Eslint forces the developer to not have any `console` statement, in this case we want to warn the
    * user without throwing an error so it's perfectly safe to disable this rule.
    */
    /* eslint-disable-next-line no-console */
    console.warn(
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
    id, style, className, children, isOpen, centered, size, animation,
    onToggle, onBackdropClick, onShow, onClose,
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

  let modalDiv = document.querySelector('.modal-wrapper');


  if (isOpen && !modalDiv) {
    if (backdropRender) {
      backdropRender(props);
    } else {
      if (onShow) {
        onShow();
      }
      // one of the two following props must be defined.
      if (!onToggle && !closeButtonRender) {
        // eslint-disable-next-line no-console
        console.warn(
          'It must be define one of the following two props: onToggle or closeButtonRender',
        );
        return null;
      }
      /**
       * createPortal has been used to moved the component into a div that will be always in front of the main window
       * if open.
       * This div won't be in the "original" DOM tree but it will be the latest div into the entire DOM.
       */
      const div = document.createElement('div');
      div.setAttribute('class', 'modal-wrapper');
      modalDiv = document.body.appendChild(div);

      return ReactDOM.createPortal(
        <div className="bi-show-modal" onClick={onBackdropClick} role="presentation">
          <div
            id={id}
            style={style}
            className={classList}
            onClick={event => event.stopPropagation()}
            role="presentation"
          >
            <Button color="transparent" className="alert-button" onClick={closeButtonRender || onToggle}>
              <Icon name="times" />
            </Button>
            {Children.map(children, child => wipeOutIncorrectChildren(child))}
          </div>
        </div>,
        modalDiv,
      );
    }
  }

  if (modalDiv) {
    if (onClose) {
      onClose();
    }
    modalDiv.removeEventListener('click', onBackdropClick);
    document.body.removeChild(modalDiv);
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

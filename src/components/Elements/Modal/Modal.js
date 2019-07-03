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
  const { id, style, className, children, isOpen, onToggle, onClose, centered, size, animation } = props;
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

  if (isOpen) {
    // modal will be into the following div if isOpen is true
    const div = document.createElement('div');
    div.setAttribute('class', 'bi-show-modal');
    const modalDiv = document.body.appendChild(div);

    return ReactDOM.createPortal(
      <div
        id={id}
        style={style}
        className={classList}
        isOpen={isOpen}
        onToggle={onToggle && onToggle()}
        centered={centered}
        size={size}
      >
        <Button color="transparent" className="alert-button" onClick={onClose}><Icon name="times" /></Button>
        {Children.map(children, child => wipeOutIncorrectChildren(child))}
      </div>,
      modalDiv,
    );
  }

  // the div will be delete if the modal is not active.
  const showModal = document.querySelector('.bi-show-modal');

  if (!isOpen && showModal) {
    document.body.removeChild(showModal);
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
   * This prop take a function that will be execute when isOpen value change.
   */
  onToggle: PropTypes.func,
  /**
   * If defined, this prop will affect closable button into modal window.
   */
  onClose: PropTypes.func,
  /**
   * Centered prop center modal in order to let it be in the middle of the screen viewport.
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
};

Modal.defaultProps = {
  onToggle: undefined,
  onClose: undefined,
  centered: false,
  size: 'default',
  animation: 'fade',
};

Modal.Title = ModalTitle;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;

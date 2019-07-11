import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../Button';
import CloseIcon from '../_CloseIcon';
import { BaseProps, makeCallback, warn } from '../../../shared';

import './modal.scss';

/**
 * Modal window is rendering the modal window, which is a small window with some content.
 * When the modal is open, it will be in front of everything else into the webpage.
 */
const ModalWindow = (props) => {
  const {
    id, style, className, children, isOpen, centered, size, animation, onBackdropClick,
    backdropRender, closeButtonRender, onToggle, onClose,
  } = props;

  if (!isOpen) {
    return null;
  }


  // one of the two following props must be defined.
  if (!onToggle && !closeButtonRender) {
    warn('It must be define one of the following two props to close the modal: onToggle or closeButtonRender');
  }

  const onCloseClickHandler = () => {
    if (onToggle) {
      if (onClose) {
        onToggle();
        onClose();
      } else {
        onToggle();
      }
    }
  };

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

  return (
    <div className="bi-modal-wrapper">
      {!backdropRender && (
        <div
          className="modal-backdrop"
          onClick={makeCallback(onBackdropClick)}
          role="button"
          tabIndex={0}
          onKeyDown={makeCallback(onBackdropClick)}
        />
      )}
      {backdropRender && backdropRender(props)}
      <div id={id} style={style} className={classList}>
        {closeButtonRender && closeButtonRender()}
        {!closeButtonRender
          && (
            <Button color="transparent" className="modal-button" onClick={onCloseClickHandler}>
              <CloseIcon />
            </Button>
          )
        }
        {children}
      </div>
    </div>
  );
};

ModalWindow.propTypes = {
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
   * this prop will replace the normal behavior of modal component
   */
  backdropRender: PropTypes.func,
  /**
  * it will be render instead of the close button
  */
  closeButtonRender: PropTypes.func,
};

ModalWindow.defaultProps = {
  centered: false,
  size: 'default',
  animation: 'fade',
  onBackdropClick: undefined,
  backdropRender: undefined,
  closeButtonRender: undefined,
};

export default ModalWindow;

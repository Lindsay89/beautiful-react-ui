import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { BaseProps, makeCallback } from '../../../shared';

import './modal.scss';

/**
 * Modal window is rendering the modal window, which is a small window with some content.
 * When the modal is open, it will be in front of everything else into the webpage.
 */
const ModalWindow = (props) => {
  const {
    id, style, className, children, isOpen, centered, size, animation, onBackdropClick,
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

  if (!isOpen) {
    return null;
  }

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
};

ModalWindow.defaultProps = {
  centered: false,
  size: 'default',
  animation: 'fade',
  onBackdropClick: undefined,
  backdropRender: undefined,
};

export default ModalWindow;

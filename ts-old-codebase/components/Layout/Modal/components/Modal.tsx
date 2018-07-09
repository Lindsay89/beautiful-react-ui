import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';

// styles
import '../styles/modal.scss';

// types
import { Callback } from '../../../../shared';
import generateCallback from '../../../../common/generateCallback/generateCallback';

export type ModalProps = {
  open?: boolean,
  onBackgroundClick?: Callback<Event>,
};

class Modal extends PureComponent<ModalProps> {

  private wrapper: HTMLDivElement;

  constructor(props: ModalProps) {
    super(props);

    let modalsWrapper = document.querySelector('.bi.bi-modals') as HTMLDivElement;

    if (!modalsWrapper) {
      modalsWrapper = document.createElement('div');
      modalsWrapper.classList.add('bi');
      modalsWrapper.classList.add('bi-modals');
    }

    this.wrapper = modalsWrapper;
  }

  componentDidMount() {
    document.body.append(this.wrapper);
    this.wrapper.addEventListener('click', this.handleBgClick);
  }

  componentWillUnmount() {
    this.wrapper.removeEventListener('click', this.handleBgClick);
    this.wrapper.remove();
  }

  private handleBgClick = (event: Event) => {
    if (event.target === this.wrapper) {
      const { onBackgroundClick } = this.props;

      if (onBackgroundClick) onBackgroundClick(event);
    }
  }

  render() {
    const { open, children } = this.props;

    if (!open) {
      this.wrapper.classList.remove('have-modals');
      return null;
    }

    this.wrapper.classList.add('have-modals');

    return ReactDOM.createPortal(<div className="modal">{children}</div>, this.wrapper);
  }
}

export default Modal;

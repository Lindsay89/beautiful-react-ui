import React, { PureComponent } from 'react';
import { findDOMNode } from 'react-dom';
import { Callback } from '../../../../shared/models/Callback';

export type ClickOutsideProps = {
  /**
   * on click outside callback
   */
  onClickOutside: Callback<Event>,
};

/**
 * Detect a click outside the wrapped React component
 */
class ClickOutside extends PureComponent<ClickOutsideProps> {

  private element: Element | null | Text = null;

  clickOutsideHandler = (event: any) => {
    const { target } = event;

    if (this.element && target && !this.element.contains(target)) {
      const { onClickOutside } = this.props;

      onClickOutside(event);
    }
  }

  componentDidMount() {
    this.element = findDOMNode(this);

    document.addEventListener('click', this.clickOutsideHandler);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.clickOutsideHandler);
  }

  render() {
    return this.props.children;
  }
}

export default ClickOutside;

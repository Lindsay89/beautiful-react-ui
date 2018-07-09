import React, { PureComponent, RefObject, ReactElement } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

// utils
import getElementAbsoluteTop from '../utils/getElementAbsoluteTop';

// types
import { Callback, Style } from '../../../../shared';

/**
 * Component's props
 */
export type FloatNearProps = {
  /**
   * the React node to be rendered
   */
  render: ReactElement<any>,
  /**
   * define the position of the floating element
   * @default 'center'
   */
  floatAt?: 'left' | 'center' | 'right'
  /**
   * define the show event
   * @default 'click'
   */
  floatOn?: 'hover' | 'click',
  /**
   * adds a top offset
   * @default 0
   */
  topOffset?: number,
  /**
   * adds a left offset
   * @default 0
   */
  leftOffset?: number,
  /**
   * on show callback
   */
  onShow?: Callback<Event>,
  /**
   * on hide callback
   */
  onHide?: Callback<Event>,
  /**
   * on toggle callback, called both when hide and when show
   */
  onToggle?: Callback<Event, boolean>,
  /**
   * close on content's click
   */
  closeOnFloatingElClick?: boolean,
  /**
   * create the floating element's wrapper the same size as the rendered element
   * @default false
   */
  sameRenderSize?: boolean,
  /**
   * @ignore
   */
  className?: string,
};

/**
 * Component's state
 */
type FloatNearState = {
  shown: boolean,
  hovering: boolean,
};

// created items count
let componentInstancesCount = 0;

/**
 * The FloatNear is a utility component that aims to show a generic content (passed as children)
 * in proximity of another component passed as a render prop.
 * May be useful for generalizing the common floating behavior of more sophisticated components like
 * DropDown or Select.
 */
class FloatNear extends PureComponent<FloatNearProps, FloatNearState> {

  static defaultProps: Partial<FloatNearProps> = {
    floatAt: 'center',
    floatOn: 'click',
    topOffset: 0,
    leftOffset: 0,
    sameRenderSize: false,
    closeOnFloatingElClick: false,
  };

  static hoverDelay: number = 200;

  state: FloatNearState = { shown: false, hovering: false };

  /**
   * the render element's ref
   */
  private renderRef: RefObject<HTMLElement>;

  /**
   * the DOM Node to append the children within
   */
  private floatingDomElWrapper: HTMLDivElement = document.createElement('div');

  constructor(props: FloatNearProps) {
    super(props);

    this.renderRef = React.createRef();
    this.floatingDomElWrapper.className = this.floatingElClasses;
    this.floatingDomElWrapper.id = this.floatingElID;
  }

  /**
   * the CSS classes to be applied to the floating element
   * @returns {string}
   */
  private get floatingElClasses() {
    const { floatAt } = this.props;

    return classNames('bi bi-float', `bi-float-${floatAt}`);
  }

  /**
   * the floating element ID
   * @returns {string}
   */
  private get floatingElID() {
    componentInstancesCount += 1;
    return `float-${componentInstancesCount}`;
  }

  /**
   * returns the mouse enter event according to the `floatOn` prop
   * @returns {string}
   */
  private get enterEvent(): string {
    const { floatOn } = this.props;

    return floatOn === 'click' ? 'mousedown' : 'mouseenter';
  }

  /**
   * returns the mouse exit event according to the `floatOn` prop
   * @returns {string}
   */
  private get exitEvent(): string {
    const { floatOn } = this.props;

    return floatOn === 'click' ? 'mouseup' : 'mouseleave';
  }

  /**
   * returns the actual CSS style to be applied to the floating element
   * @returns {Style}
   */
  private get floatStyle(): Partial<Style> {
    const element = this.renderRef.current;
    if (element) {
      const { floatAt, sameRenderSize, topOffset, leftOffset } = this.props;
      const rect = element.getBoundingClientRect();
      const top = `${(rect.height + getElementAbsoluteTop(element) + (topOffset || 0))}px`;
      const width = sameRenderSize && rect.width ? `${rect.width}px` : undefined;
      const style: any = { width, top, position: 'absolute', zIndex: 1 + componentInstancesCount };

      if (floatAt === 'left') {
        style.left = `${(rect.left + (leftOffset || 0))}px`;
      }

      if (floatAt === 'right') {
        style.right = `${window.innerWidth - (rect.left + rect.width)}px`;
      }

      if (floatAt === 'center') {
        style.left = `${(rect.left + (leftOffset || 0)) + (rect.width / 2)}px`;
        style.transform = 'translateX(-50%)';
      }

      return style;
    }

    return {};
  }

  /**
   * defines whether an element can hide or not
   * @param {HTMLElement} target
   * @returns {boolean}
   */
  private canHide(target: HTMLElement): boolean {
    const { floatOn, closeOnFloatingElClick } = this.props;
    const { shown } = this.state;
    const { current: renderedEl } = this.renderRef;
    const floatingEl = this.floatingDomElWrapper;

    if (!renderedEl || !target) return true;

    return floatOn === 'click' ?
      shown && !renderedEl.contains(target) && (closeOnFloatingElClick ? true : !floatingEl.contains(target)) :
      target !== floatingEl && !floatingEl.contains(target);
  }

  /**
   * shows the component's children
   * @param {MouseEvent} event
   */
  private showChildren = (event: MouseEvent): void => {
    const { target } = event;
    const { onShow, onHide, onToggle } = this.props;
    const { shown } = this.state;
    const { current } = this.renderRef;

    if (current && current.contains(target as HTMLElement)) {
      if (!shown) {
        return this.setState({ shown: true }, () => {
          onShow && onShow(event);
          onToggle && onToggle(event, true);
        });
      }

      return this.setState({ shown: false }, () => {
        // handle callbacks
        onHide && onHide(event);
        onToggle && onToggle(event, false);
        this.floatingDomElWrapper.removeAttribute('style');
      });
    }
  }

  /**
   * hides the component's children
   * @param {MouseEvent} event
   */
  private hideChildren = (event: MouseEvent): void => {
    const { target, toElement } = event;
    const { floatOn, onHide, onToggle } = this.props;
    const delay = floatOn === 'hover' ? FloatNear.hoverDelay : 0;
    const element = floatOn === 'hover' ? toElement : target;

    // setTimeout is used to delay the following check if order to prevent the floating element
    // to disappear while the mouse transit from the rendered element to the floating one.
    const to = setTimeout(() => {
      if (this.canHide(element as HTMLElement)) {
        this.setState({ shown: false }, () => {
          // handle callbacks
          onHide && onHide(event);
          onToggle && onToggle(event, false);
          this.floatingDomElWrapper.removeAttribute('style');
        });
      }
      clearTimeout(to);
    }, delay);
  }

  componentDidMount() {
    const { floatOn } = this.props;
    const target = floatOn === 'click' ? document : this.renderRef.current;

    if (target) {
      target.addEventListener(this.enterEvent, this.showChildren);
      target.addEventListener(this.exitEvent, this.hideChildren);

      if (floatOn === 'hover') {
        this.floatingDomElWrapper.addEventListener(this.exitEvent, this.hideChildren);
      }
    }

    document.body.appendChild(this.floatingDomElWrapper);
  }

  getSnapshotBeforeUpdate(prevProps: FloatNearProps, prevState: FloatNearState): Partial<Style> | null {
    if (!prevState.shown) {
      return this.floatStyle;
    }

    return null;
  }

  componentDidUpdate(prevProps: FloatNearProps, prevState: FloatNearState, snapshot: Partial<Style> | null) {
    if (snapshot) {
      Object.keys(snapshot).forEach((styleProp: string) =>
        Object.defineProperty(this.floatingDomElWrapper.style, styleProp, { value: snapshot[styleProp] }),
      );
    }
  }

  componentWillUnmount() {
    const { floatOn } = this.props;
    const target = floatOn === 'click' ? document : this.renderRef.current;

    if (target) {
      target.removeEventListener(this.enterEvent, this.showChildren);
      target.removeEventListener(this.exitEvent, this.hideChildren);
    }

    this.floatingDomElWrapper.remove();
  }

  render() {
    const { children, render } = this.props;
    const { shown } = this.state;

    return (
      <>
        {React.cloneElement(render, { ref: this.renderRef })}
        {shown && ReactDOM.createPortal(children, this.floatingDomElWrapper)}
      </>
    );
  }
}

export default FloatNear;

import React, { Component, Fragment } from 'react';
import classNames from 'classnames';

// components
import Spinner from '../../Spinner/index';

// style
import '../styles/image.scss';

type ImageProps = {
  /**
   * @ignore
   */
  className?: string,
  /**
   * the url of the image
   * @required
   */
  src: string,
  /**
   * the title of the image
   * @default null
   */
  title?: string,
  /**
   * the alternative text of the image
   * @default null
   */
  alt?: string,
  /**
   * if fluid the image will get the 100% of the available width
   * @default false
   */
  fluid?: boolean,
  /**
   * shows a shadow under the image
   * @default false
   */
  shadow?: boolean,
  /**
   * an image may appear rounded
   * @default false
   */
  rounded?: boolean,
  /**
   * makes the image circular
   * @default false
   */
  circular?: boolean,
  /**
   * only show the image once loaded
   * @default false
   */
  lazy?: boolean,
  /**
   * the image width in px
   * @default null
   */
  width?: number,
  /**
   * the image height in px
   * @default null
   */
  height?: number,
};

type ImageState = {
  lazyLoaded: boolean,
};

class Image extends Component<ImageProps, ImageState> {
  static defaultProps = {
    classNames: '',
    title: null,
    alt: null,
    fluid: false,
    shadow: false,
    rounded: false,
    circular: false,
    lazy: false,
    width: null,
    height: null,
  };

  private el: HTMLImageElement | null;

  state: ImageState = {
    lazyLoaded: false,
  };

  componentDidMount() {
    if (this.el && this.props.lazy) {
      this.el.addEventListener('load', () => this.setState({ lazyLoaded: true }));
    }
  }

  render() {
    const {
      src, alt, title, fluid, shadow, rounded, circular, lazy, width, height, className,
    } = this.props;
    const { lazyLoaded } = this.state;

    const classes = classNames('bi', 'bi-img', {
      'img-fluid': fluid,
      'img-shadow': shadow,
      'img-rounded': rounded,
      'img-circular': circular,
      'img-lazy': lazy,
      'img-loaded': lazyLoaded,
    }, className);

    return (
      <Fragment>
        {lazy && !lazyLoaded &&
        <div className="bi-img-spinner">
          <Spinner size={18} />
        </div>
        }
        <img className={classes}
             src={src}
             alt={alt}
             title={title}
             width={width}
             height={height}
             ref={el => this.el = el}
        />
      </Fragment>
    );
  }
}

export default Image;

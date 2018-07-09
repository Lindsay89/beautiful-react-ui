import React, { Component, ReactElement } from 'react';
import classNames from 'classnames';

// components
import Spinner from '../../../Elements/Spinner';

// utils
import { getSpinner } from '../../../../common';

// styles
import '../styles/iframe.scss';

// types
import { SpinnerProps } from '../../../Elements/Spinner/components/Spinner';

type IFrameProps = {
  /**
   * the iframe src
   */
  src: string,
  /**
   * shows a spinner element during the loading of the src
   * @default true
   */
  spinner?: boolean | ReactElement<SpinnerProps>,
  /**
   * @ignore
   */
  className?: string,
  /**
   * @ignore
   */
  style?: any,
};

type IFrameState = {
  loaded: boolean,
  src?: string,
};

/**
 * Wraps an iFrame and shoes a Spinner while loading
 */
class IFrame extends Component<IFrameProps, IFrameState> {

  state = { loaded: false };

  static defaultProps = { className: '', spinner: true };

  static getDerivedStateFromProps(nextProps: IFrameProps, prevState: IFrameState) {
    return {
      src: nextProps.src,
      loaded: (nextProps.src === prevState.src),
    };
  }

  handleLoadComplete() {
    this.setState({ loaded: true });
  }

  getEventualSpinner() {
    const { spinner } = this.props;

    return getSpinner(spinner, <Spinner color="primary">Loading&hellip;</Spinner>);
  }

  render() {
    const { loaded } = this.state;
    const { src, style, className } = this.props;

    const width = style && style.width ? style.width : null;
    const height = style && style.height ? style.height : null;

    const classes = classNames('bi bi-iframe', { 'is-loaded': loaded, 'is-loading': !loaded }, className);

    return (
      <div className={classes} style={style}>
        {!loaded && <div className="iframe-spinner">{this.getEventualSpinner()}</div>}
        <iframe src={src} onLoad={() => this.handleLoadComplete()} width={width || '100%'} height={height}/>
      </div>
    );
  }
}

export default IFrame;

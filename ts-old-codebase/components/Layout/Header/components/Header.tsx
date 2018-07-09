import React, { PureComponent, ReactNode, RefObject } from 'react';
import classNames from 'classnames';

// components
import Grid from '../../Grid/components/Grid';

// styles
import '../styles/header.scss';

// types
import { Callback, Style } from '../../../../shared';

export type HeaderProps = {
  renderLeft?: ReactNode,
  renderRight?: ReactNode,
  affix?: boolean,
  affixOffset?: number,
  onAffix?: Callback<boolean>,
  /**
   * @ignore
   */
  className?: string,
  /**
   * @ignore
   */
  style?: Style,
};

type HeaderState = {
  affixed: boolean,
};

class Header extends PureComponent<HeaderProps, HeaderState> {

  static defaultProps: Partial<HeaderProps> = {
    affix: false,
    affixOffset: 0,
  };

  private elRef: RefObject<HTMLDivElement>;

  state = { affixed: false };

  constructor(props: HeaderProps) {
    super(props);

    this.elRef = React.createRef();
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const { affixed } = this.state;
    const { affix, affixOffset, onAffix } = this.props;

    if (affix) {
      if (!affixed && affixOffset && window.scrollY > affixOffset) {
        this.setState({ affixed: true }, () => onAffix && onAffix(true));
      }

      if (affixed && affixOffset && window.scrollY <= affixOffset) {
        this.setState({ affixed: false }, () => onAffix && onAffix(false));
      }
    }
  }

  render() {
    const { renderLeft, renderRight, affix, className, style } = this.props;
    const { affixed } = this.state;

    return (
      <div className={classNames('bi bi-header', { affix, affixed }, className)} ref={this.elRef} style={style}>
        <Grid>
          {renderLeft && (
            <Grid.Flex>
              {renderLeft}
            </Grid.Flex>
          )}
          {renderRight && (
            <Grid.Flex>
              {renderRight}
            </Grid.Flex>
          )}
        </Grid>
      </div>
    );
  }
}

export default Header;

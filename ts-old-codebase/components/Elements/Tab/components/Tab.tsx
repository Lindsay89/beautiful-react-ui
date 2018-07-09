import React, { Component, ReactElement, Children } from 'react';
import classNames from 'classnames';

// components
import TabContent from './TabContent';
import TabButton from './TabButton';

// styles
import '../styles/tab.scss';

// types
import { Callback, Color } from '../../../../shared';

type TabProps = {
  colorActive?: Color,
  color?: Color,
  align?: 'vertical' | 'horizontal',
  onChange?: Callback<number>
  className?: string,
};

type TabState = {
  active: number,
};

class Tab extends Component<TabProps, TabState> {

  constructor(props: TabProps) {
    super(props);

    this.state = {
      active: 0,
    };
  }

  static defaultProps: Partial<TabProps> = {
    className: '',
    colorActive: 'primary',
    color: 'default',
    align: 'horizontal',
  };

  public static Content = TabContent;

  activeContent(index: number) {
    const { onChange } = this.props;

    this.setState({ active: index }, () => {
      if (onChange) onChange(index);
    });
  }

  render() {
    const { active } = this.state;
    const { className, colorActive, align, children } = this.props;

    const tabButtons: ReactElement<typeof TabButton>[] = [];
    const contents: ReactElement<typeof TabContent>[] = [];

    Children.forEach(children, (item: ReactElement<any>, index: number) => {
      const btnTitle = item.props.title;
      const btnIcon = item.props.icon;
      const color = item.props.color;

      tabButtons.push(<TabButton
        key={index}
        isActive={active === index}
        title={btnTitle}
        icon={btnIcon}
        color={color}
        colorActive={colorActive}
        clickHandler={() => this.activeContent(index)}/>,
      );

      contents.push(<TabContent
        key={index}
        id={index.toString()}
        isActive={active === index}>
        {item.props.children}
      </TabContent>);
    });

    return (
      <div className={classNames('bi', 'bi-tab', className)}>
        <ul className={classNames('bi bi-tab-buttons', align)}>
          {tabButtons}
        </ul>
        <div className="tab-content-wrapper">
          {contents}
        </div>
      </div>
    );
  }
}

export default Tab;

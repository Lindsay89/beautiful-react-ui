import React, { Component, ReactElement, SyntheticEvent } from 'react';
import classNames from 'classnames';

// models
import { Color } from '../../../../shared';

// styles
import '../styles/breadcrumb.scss';

type BreadcrumbItem = {
  link: string,
  name: string,
};

type PathItem = BreadcrumbItem | string;

export type BreadcrumbProps = {
  onClick?: (...args: any[]) => any,
  /**
   * path to show in breadcrumb, any element is a piece of the path
   */
  path: PathItem[],

  /**
   * define the current item's color, can be 'default', 'primary', 'secondary', 'info', 'warning', 'success', 'error'
   * or 'transparent'
   * @default "default"
   */
  color?: Color,

  /**
   * @ignore
   */
  className?: string,
};

class Breadcrumb extends Component<BreadcrumbProps> {
  static defaultProps: Partial<BreadcrumbProps> = {
    color: 'default',
  };

  handleClick(event: SyntheticEvent<HTMLAnchorElement>) {
    const { onClick } = this.props;

    if (onClick) {
      event.preventDefault();

      const link = event.currentTarget.href;
      onClick(link);
    }
  }

  getItem(item: BreadcrumbItem | string) {
    return (typeof item === 'string' || item instanceof String) ? item :
      <a className="bi-breadcrumb-link"
        href={item.link}
        onClick={(e: SyntheticEvent<HTMLAnchorElement>) => this.handleClick(e)}>{item.name}</a>;
  }

  render() {
    const { path, color, className } = this.props;

    const breadcrumbItems: ReactElement<HTMLUListElement>[] = [];

    const classes = classNames('bi', 'bi-breadcrumb', `bi-breadcrumb-${color}`, {
    }, className);

    path.forEach((item: PathItem, index: number) => {
      breadcrumbItems.push(<li key={index} className="bi-breadcrumb-item">{this.getItem(item)}</li>);
    });

    return (
      <ul className={classes}>
        {breadcrumbItems}
      </ul>
    );
  }
}

export default Breadcrumb;

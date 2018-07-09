import React, { PureComponent, ReactNode } from 'react';
import classNames from 'classnames';

// styles
import '../styles/panel.scss';

// types
export type PanelProps = {
  title?: string,
  children?: ReactNode,
  className?: string,
};

class Panel extends PureComponent<PanelProps> {

  render() {
    const { children, title, className } = this.props;

    return (
      <div className={classNames('bi bi-panel', { 'with-title': !!title }, className)}>
        {title && <span className="bi-panel-title">{title}</span>}
        {children}
      </div>
    );
  }
}

export default Panel;

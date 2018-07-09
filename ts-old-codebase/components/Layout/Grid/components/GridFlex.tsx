import React, { ReactNode } from 'react';
import classNames from 'classnames';

type GridFlexProps = {
  children: ReactNode,
  className?: string,
};

const GridFlex = ({ children, className }: GridFlexProps) => (
  <div className={classNames('bi bi-grid-flex-item', className)}>
    {children}
  </div>
);

export default GridFlex;

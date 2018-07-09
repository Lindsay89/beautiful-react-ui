import React, { ReactNode } from 'react';
import classNames from 'classnames';

export type GridColumnProps = {
  size: 'full' | 'half' | 1 | 2 | 3 | 4 | 5 | 6,
  children: ReactNode,
  className?: string,
};

const GridColumn = ({ children, size, className }: GridColumnProps) => (
  <div className={classNames('bi bi-col', `col-${size}`, className)}>
    {children}
  </div>
);

export default GridColumn;

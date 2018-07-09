import React, { ReactNode } from 'react';
import classNames from 'classnames';

// component
import GridColumn from './GridColumn';
import GridFlex from './GridFlex';

// styles
import '../styles/flexgrid.scss';

// types
export type GridProps = {
  children: ReactNode,
  className?: string,
};

const Grid = ({ children, className }: GridProps) => (
  <div className={classNames('bi bi-flex-grid', className)}>
    {children}
  </div>
);

Grid.Col = Grid.Column = GridColumn;
Grid.Flex = GridFlex;

export default Grid;

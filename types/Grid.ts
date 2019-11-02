import { FunctionComponent } from 'react';
import GridColumn, { GridColumnProps } from './GridColumn';
import { DefaultProps } from './_shared';

export type GridProps = DefaultProps & {
  /**
   * Defines weather the grid should reverse its rows or not
   */
  reversed?: boolean,
  /**
   * Defines the position of the column along the grid's cross axis.
   */
  itemsAlign?: 'start' | 'center' | 'end' | 'stretch' | 'baseline',
};

/**
 * Declares the Grid functional component
 */
declare const Grid: FunctionComponent<GridProps> & { GridColumn: FunctionComponent<GridColumnProps> };

Grid.GridColumn = GridColumn;

export default Grid;

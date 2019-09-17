import React from 'react';
import GridColumn from './GridColumn';

import './grid.scss';

const Grid = ({ children }) => (
  <div className="bi bi-grid">
    {children}
  </div>
);

Grid.Column = GridColumn;

export default Grid;

import React, { Children } from 'react';
import GridColumn from './GridColumn';
import { warn } from '../../../shared';


const cloneGridColumn = (child, index, props) => {
  if (child.type !== GridColumn) {
    warn('Grid allows only GridColumn children, other kind of elements will be wiped out');

    return null;
  }

  return React.cloneElement(child, {
    internalId: index,
  });
};


const Grid = (props) => {
  const { children } = props;

  return (
    <div className="bi bi-grid border">
      
      {Children.map(children, (child, index) => cloneGridColumn(child, index, props))}
    </div>
  );
};

export default Grid;

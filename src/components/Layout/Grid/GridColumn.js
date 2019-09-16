import React from 'react';

const GridColumn = (props) => {
  const { children } = props;
  return (
    <div className="bi bi-grid-column">
      {children}
    </div>
  );
};

export default GridColumn;

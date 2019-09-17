import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './grid-column.scss';

const GridColumn = (props) => {
  const { children, sm, md, lg, xl } = props;


  const classList = classNames('bi bi-grid-column', {
    [`col-sm-${sm}`]: !!sm,
    [`col-md-${md}`]: !!md,
    [`col-lg-${lg}`]: !!lg,
    [`col-xl-${xl}`]: !!xl,
  });


  return (
    <div className={classList}>
      {children}
    </div>
  );
};

const AccetableWidthValue = PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);

GridColumn.propTypes = ({
  /**
   * this props accept a value to define column width
   */
  sm: AccetableWidthValue,

  md: AccetableWidthValue,
  lg: AccetableWidthValue,
  xl: AccetableWidthValue,
});

GridColumn.defaultProps = ({
  sm: undefined,
  md: undefined,
  lg: undefined,
  xl: undefined,
});

export default GridColumn;

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './grid-column.scss';
import checkColumnSize from './checkColumnSize';

const GridColumn = (props) => {
  const { children, sm, md, lg, xl, offset } = props;


  const classList = classNames('bi bi-grid-column', {
    [`offset-${offset}`]: !!offset && offset <= 12,
    [`bi-col-sm-${sm}`]: !!sm && sm <= 12,
    [`bi-col-md-${md}`]: !!md && md <= 12,
    [`bi-col-lg-${lg}`]: !!lg && lg <= 12,
    [`bi-col-xl-${xl}`]: !!xl && xl <= 12,
    [`offset-sm-${offset}`]: !!sm && sm <= 12 && !!offset,
    [`offset-md-${offset}`]: !!md && md <= 12 && !!offset,
    [`offset-lg-${offset}`]: !!lg && lg <= 12 && !!offset,
    [`offset-xl-${offset}`]: !!xl && xl <= 12 && !!offset,
  });

  checkColumnSize(sm, md, lg, xl, offset)

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
  /**
   * this prop accept a value to add a padding to the columns
   */
  offset: AccetableWidthValue,
});

GridColumn.defaultProps = ({
  sm: undefined,
  md: undefined,
  lg: undefined,
  xl: undefined,
  offset: undefined,
});

export default GridColumn;

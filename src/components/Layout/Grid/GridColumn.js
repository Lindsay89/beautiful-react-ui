import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import checkColumnSize from './checkColumnSize';

/**
 * A single column component
 */
const GridColumn = (props) => {
  const { children, sm, md, lg, xl, offset } = props;
  const classList = classNames('bi bi-grid-column', {
    [`offset-${offset}`]: !!offset && offset <= 12,
    [`bi-col-sm-${sm}`]: !!sm && sm <= 12,
    [`bi-col-md-${md}`]: !!md && md <= 12,
    [`bi-col-lg-${lg}`]: !!lg && lg <= 12,
    [`bi-col-xl-${xl}`]: !!xl && xl <= 12,
    [`bi-offset-sm-${offset}`]: !!sm && sm <= 12 && !!offset,
    [`bi-offset-md-${offset}`]: !!md && md <= 12 && !!offset,
    [`bi-offset-lg-${offset}`]: !!lg && lg <= 12 && !!offset,
    [`bi-offset-xl-${offset}`]: !!xl && xl <= 12 && !!offset,
  });

  // checks the column total size
  checkColumnSize(sm, md, lg, xl, offset);

  return (<div className={classList}>{children}</div>);
};

const ColumnWidth = PropTypes.oneOf([
  1, '1',
  2, '2',
  3, '3',
  4, '4',
  5, '5',
  6, '6',
  7, '7',
  8, '8',
  9, '9',
  10, '10',
  11, '11',
  12, '12',
]);

GridColumn.propTypes = ({
  /**
   * this props accept a value to define column width
   */
  sm: ColumnWidth,
  md: ColumnWidth,
  lg: ColumnWidth,
  xl: ColumnWidth,
  /**
   * this prop accept a value to add a padding to the columns
   */
  offset: ColumnWidth,
});

GridColumn.defaultProps = ({
  sm: undefined,
  md: undefined,
  lg: undefined,
  xl: undefined,
  offset: undefined,
});

export default GridColumn;

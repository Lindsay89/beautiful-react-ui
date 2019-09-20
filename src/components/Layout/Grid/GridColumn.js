import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import checkColumnSize from './checkColumnSize';

/**
 * A single column component
 */
const GridColumn = (props) => {
  const { children, sm, md, lg, xl, offset, offsetSm, offsetMd, offsetLg, offsetXl, selfAlign } = props;
  const classList = classNames('bi bi-grid-column', {
    [`bi-offset-${offset}`]: !!offset && offset <= 12,
    [`bi-col-sm-${sm}`]: !!sm && sm <= 12,
    [`bi-col-md-${md}`]: !!md && md <= 12,
    [`bi-col-lg-${lg}`]: !!lg && lg <= 12,
    [`bi-col-xl-${xl}`]: !!xl && xl <= 12,
    [`bi-offset-sm-${offsetSm}`]: !!offsetSm && offsetSm <= 12,
    [`bi-offset-md-${offsetMd}`]: !!offsetMd && offsetMd <= 12,
    [`bi-offset-lg-${offsetLg}`]: !!offsetLg && offsetLg <= 12,
    [`bi-offset-xl-${offsetXl}`]: !!offsetXl && offsetXl <= 12,
    [`self-${selfAlign}`]: !!selfAlign,
  });

  // checks the column total size
  checkColumnSize(sm, md, lg, xl, offset, offsetSm, offsetMd, offsetLg, offsetXl);

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
   * this props accept a value that will change the column width based on screens dimension
   */
  sm: ColumnWidth,
  /**
     * this props accept a value that will change the column width based on screens dimension
     */
  md: ColumnWidth,
  /**
   * this props accept a value that will change the column width based on screens dimension
   */
  lg: ColumnWidth,
  /**
     * this props accept a value that will change the column width based on screens dimension
     */
  xl: ColumnWidth,
  /**
   * this prop accept a value to add a space to the left of the columns
   */
  offset: ColumnWidth,
  /**
   * this prop accept a value to add a space to the left of the columns based on screens dimension
   */
  offsetSm: ColumnWidth,
  /**
   * this prop accept a value to add a space to the left of the columns based on screens dimension
   */
  offsetMd: ColumnWidth,
  /**
   * this prop accept a value to add a space to the left of the columns based on screens dimension
   */
  offsetLg: ColumnWidth,
  /**
   * this prop accept a value to add a space to the left of the columns based on screens dimension
   */
  offsetXl: ColumnWidth,
  /**
     * Defines the position of the n individual flex item along its container's cross axis.
     */
  selfAlign: PropTypes.oneOf(['start', 'center', 'end', 'stretch', 'auto']),
});

GridColumn.defaultProps = ({
  sm: undefined,
  md: undefined,
  lg: undefined,
  xl: undefined,
  offset: undefined,
  offsetSm: undefined,
  offsetMd: undefined,
  offsetLg: undefined,
  offsetXl: undefined,
  selfAlign: 'auto',
});

export default GridColumn;

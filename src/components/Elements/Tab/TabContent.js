import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { BaseProps } from '../../../shared';

/**
 * This component is used to  render the content.
 */
const TabContent = (props) => {
  const { active, title, children, id, className, style } = props;
  const classList = classNames('tab-content', {
    'tab-content-show': active,
  }, className);

  return (
    <div className={classList} id={id} style={style}>
      <h3>{title}</h3>
      {children}
    </div>
  );
};

TabContent.propTypes = {
  ...BaseProps,
  active: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.node,
};

TabContent.defaultProps = {
  children: undefined,
  active: false,
  title: null,
};

export default React.memo(TabContent);

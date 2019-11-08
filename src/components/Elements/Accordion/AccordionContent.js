import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Caret from '../_Caret';
import Button from '../Button';
import { makeCallback } from '../../../shared';

/**
 * Accordion content shows its content if active is provided
 */
const AccordionContent = (props) => {
  const { internalId, children, active, title, onChange, ...rest } = props;
  const classList = classNames('bi', 'bi-accordion-item', {
    'bi-item-open': active,
  });

  const onClickHandler = makeCallback(onChange, internalId);

  return (
    <div className={classList} {...rest}>
      <Button fluid color="transparent" onClick={onClickHandler} className="bi-accordion-toggle">
        <Caret />
        {title}
      </Button>
      <div className="bi-accordion-content">
        {children}
      </div>
    </div>
  );
};

AccordionContent.propTypes = {
  internalId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  active: PropTypes.bool,
  onChange: PropTypes.func,
  title: PropTypes.node,
};

AccordionContent.defaultProps = {
  active: false,
  title: undefined,
  onChange: undefined,
};

export default React.memo(AccordionContent);

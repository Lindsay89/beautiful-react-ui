import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Button from '../Button';
import { IconProp } from '../../../shared';

/**
 * Accordion content shows its content if active is provided
 */
const AccordionContent = (props) => {
  const { internalId, children, active, title, onChange, iconOpen, iconClose, ...rest } = props;
  const classList = classNames('bi', 'bi-acc-content', {
    'acc-content-show': active,
  });
  const icon = active ? iconOpen : iconClose;

  return (
    <div className={classList} {...rest}>
      <Button
        block
        color="transparent"
        outline
        onClick={() => {
          onChange(internalId);
        }}
        className="acc-title-button"
        icon={icon}
      >
        {title}
      </Button>
      <div className="acc-content">
        {children}
      </div>
    </div>
  );
};

AccordionContent.propTypes = {
  internalId: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  iconOpen: IconProp,
  iconClose: IconProp,
  title: PropTypes.string,
};

AccordionContent.defaultProps = {
  title: undefined,
  iconOpen: 'minus',
  iconClose: 'plus',
};

export default React.memo(AccordionContent);

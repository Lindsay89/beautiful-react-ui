import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { BaseProps } from '../../../shared';
import Button from '../Button';

/**
 * Accordion content shows its content if active is provided
 */
const AccordionContent = (props) => {
  const { internalId, id, style, children, active, title, onChange, iconOpen, iconClose } = props;
  const classList = classNames('bi', 'bi-acc-content', {
    'acc-content-show': active,
  });
  const icon = active ? iconOpen : iconClose;

  return (
    <div id={id} style={style} className={classList}>
      <Button
        block
        color="transparent"
        outline
        onClick={() => { onChange(internalId); }}
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
  ...BaseProps,
  active: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string,
};

AccordionContent.defaultProps = {
  active: false,
  title: null,
};

export default React.memo(AccordionContent);

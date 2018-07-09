import React, { Fragment } from 'react';
import classNames from 'classnames';

// components
import ButtonGroup, { ButtonGroupProps } from '../../../Elements/ButtonGroup/ButtonGroup';
import Button from '../../../Elements/Button/Button';
import Label from '../../_Label/components/Label';
import HelpText from '../../_HelpText/components/HelpText';

// styles
import '../styles/toggle.group.scss';

// types
import { Callback } from '../../../../shared';

export type ToggleGroupOption = {
  value: number | string,
  label: string,
  selected?: boolean,
  disabled?: boolean,
};

export type ToggleGroupProps = ButtonGroupProps & {
  /**
   * the options
   */
  options: ToggleGroupOption[],
  /**
   * the current selected button's value
   */
  value?: number | string,
  /**
   * @FIXME: ducmentation
   */
  label?: string,
  helpText?: string,
  /**
   * callback
   */
  onChange?: Callback<Event, string | number>,
};

const ToggleGroup = (props: ToggleGroupProps) => {
  const { options, rounded, outline, fluid, color, value, size, label, helpText, onChange, className } = props;

  return (
    <Fragment>
      {label && <Label text={label}/>}
      <ButtonGroup rounded={rounded} color={color} fluid={fluid} size={size} outline={outline}
                   className={classNames('toggle-group', className)}>
        {options.map((option, index) => (
          <Button
            key={index}
            onClick={event => onChange && onChange(event, option.value)}
            disabled={option.disabled}
            className={(value === option.value || option.selected) ? 'toggled' : undefined}
          >
            {option.label}
          </Button>
        ))}
      </ButtonGroup>
      {helpText && <HelpText text={helpText}/>}
    </Fragment>
  );
};

export default ToggleGroup;

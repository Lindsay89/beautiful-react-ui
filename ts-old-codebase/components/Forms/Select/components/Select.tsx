import React, { FC, ReactElement, useState } from 'react';
import classNames from 'classnames';

// components
import OptionsList from './OptionsList';
import SelectElement from './SelectElement';
import SelectLabel from './SelectLabel';
import Label from '../../_Label';
import HelpText from '../../_HelpText';
import FloatNear from '../../../Utils/FloatNear';

// style
import '../styles/select.scss';

// types
import { Size, Color, Callback, FormBaseProps } from '../../../../shared/';
import { SpinnerProps } from '../../../Elements/Spinner/components/Spinner';
import { createSpinnerFromProps } from '../../../../shared/utils';

export type Option = {
  label: string,
  value?: string | number,
  disabled?: boolean,
};

export type Divider = {
  divider: true,
};

export type SelectedOption = { label: string, value?: string | number };

export type SelectProps = FormBaseProps & {
  /**
   * An array of selectable options.
   * A single option can be defined as following:
   ```
   { label: string, value?: string, disabled: boolean }
   ```
   * or you can defined a divider:
   ```
   { divider: true }
   ```
   * So the `options` prop is a non-empty array of well defined options:
   ```
   const options = [
   {label: 'Option 1', value: 'opt1'},
   {label: 'Option 2', value: 'opt2'},
   {disabled: true},
   {label: 'Option 3', value: 'opt3', disabled: true},
   ]
   ```
   * This prop is optional as you may prefer an explicit approach.
   */
  options?: (Option | Divider)[],
  /**
   * the selected value
   */
  value?: string | number | (string | number)[],
  /**
   * makes the Select required
   */
  required?: boolean
  /**
   * defines the component's placeholder
   * @default undefined
   */
  placeholder?: string,
  /**
   * defines the component's color
   * @default "default"
   */
  color?: Color,
  /**
   * defines the component's size
   * @default "default"
   */
  size?: Size
  /**
   * defines if the select should take all the available space
   * @default true
   */
  fluid?: boolean,
  /**
   * shows outlines only
   * @default false
   */
  outline?: boolean,
  /**
   * disables the selection
   * @default false
   */
  disabled?: boolean,
  /**
   * defines the multi selection label's style
   * @default "list"
   */
  labelStyle?: 'list' | 'tags',
  /**
   * shows an options filter
   * @default false
   */
  filtrable?: boolean,
  /**
   * shows a spinner element instead of the chevron icon
   * @default false
   */
  spinner?: boolean | ReactElement<SpinnerProps>,
  /**
   * the on select change event callback
   */
  onChange?: Callback<Event, Option | undefined>,
  /**
   * the on toggle change event callback
   */
  onToggle?: Callback<Event, boolean>
  /**
   * the on remove button event callback
   */
  onRemove?: Callback<Event>,
  /**
   * defines the label to show when none of the items is selected
   * @default "Nothing selected"
   */
  labelNothingSelect?: string,
  /**
   * defines the label to show when none of the item are found
   */
  labelNoItemsFound?: string,
};

/**
 * Select Component
 */
const Select: FC<SelectProps> = (props) => {
  const {
    value, label, helpText, required, className, size, disabled, options, outline, color, filtrable,
    onRemove, onChange, onToggle, labelStyle, labelNothingSelect, placeholder, spinner, fluid, id, name, style,
  } = props;
  const values = value instanceof Array ? value : (!!value ? [value] : []);
  const [open, setOpen] = useState(false);

  const selectClasses = classNames('bi bi-select', `select-${color} select-${size}`, {
    outline,
    fluid,
    disabled,
  }, className);

  // label
  const labelProps = { values, color, labelNothingSelect, options, labelStyle, placeholder };
  const SelectLabelComp = <SelectLabel {...labelProps} />;

  // element
  const onClick = (e: Event, isOpen: boolean) => {
    if (!disabled) {
      setOpen(isOpen);
      if (onToggle) onToggle(e, isOpen);
    }
  };
  const onRemoveCb = (e: Event) => {
    if (!disabled) {
      if (onRemove) onRemove(e);
    }
  };
  const elementProps = { values, open, color, onClick, onRemove: onRemoveCb, spinner: createSpinnerFromProps(spinner) };
  const Element = (<SelectElement {...elementProps} renderLabel={SelectLabelComp} />);

  // options
  const onItemSelect = (e: Event, selected: SelectedOption) => {
    if (onChange) onChange(e, selected);
  };
  const optionsListProps = { options, filtrable, color, outline, values, onItemSelect };

  return (
    <div className={selectClasses} id={id} style={style}>
      {/* generate an hidden input for each selected value */}
      {values.map(val => <input key={val} name={name} value={val} type="hidden" />)}
      {/* Label */}
      {label && (
        <Label text={label} color={color} required={required} />
      )}
      {disabled && Element}
      {!disabled && (
        <FloatNear render={Element} sameRenderSize closeOnFloatingElClick onToggle={onClick}>
          <OptionsList {...optionsListProps} />
        </FloatNear>
      )}
      {/* help text */}
      {helpText && (<HelpText text={helpText} />)}
    </div>
  );
};

Select.defaultProps = {
  color: 'default',
  size: 'default',
  fluid: true,
  labelStyle: 'list',
  labelNothingSelect: 'Nothing selected',
  labelNoItemsFound: 'No items found',
};

export default Select;

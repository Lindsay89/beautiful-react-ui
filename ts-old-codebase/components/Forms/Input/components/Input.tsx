import React, { Attributes, PureComponent, ReactNode, ReactElement } from 'react';
import classNames from 'classnames';

// components
import Label from '../../_Label';
import HelpText from '../../_HelpText/components/HelpText';
import Icon from '../../../Elements/Icon';
import TextInput from './_TextInput';
import NumberInput from './_NumberInput';
// styles
import '../styles/input.scss';

// types
import { Color, Callback, Style } from '../../../../shared/';
import { IconName } from '../../../Elements/Icon/iconNames';
import { IconProps } from '../../../Elements/Icon/components/Icon';

export type InputProps = {
  /**
   * the Id of the input field
   * @default: undefined
   */
  id?: string,
  /**
   * the name of the input field
   * @default: undefined
   */
  name?: string,
  /**
   * the input field type
   * @default: 'text'
   */
  type?: 'text' | 'password' | 'number',
  /**
   * the input field placeholder
   * @default ''
   */
  placeholder?: string,
  /**
   * the value of the input field
   * @default: undefined
   */
  value?: string | number,
  /**
   * the error message
   */
  error?: boolean | string,
  /**
   * disables the input field
   */
  disabled?: boolean,
  /**
   * defines if the input is required
   */
  required?: boolean,
  /**
   * shows an icon
   */
  icon?: IconName | ReactElement<IconProps>,
  /**
   * define the icon position.
   * @default right
   */
  iconPosition?: 'left' | 'right',
  /**
   * the input label
   */
  label?: string,
  /**
   * input color
   * @default 'default'
   */
  color?: Color,
  /**
   * further text to be shown under the field.
   */
  helpText?: string,
  /**
   * on input change callback
   */
  onChange?: Callback<Event, string | number>,
  /**
   * on focus callback
   */
  onFocus?: Callback<Event, string | number>,
  /**
   * on blur callback
   */
  onBlur?: Callback<Event, string | number>,
  /**
   * @ignore
   */
  className?: string,
  /**
   * @ignore
   */
  style?: Style,
};

/**
 * The Input component specifies an input field where the user can enter data.
 */
class Input extends PureComponent<InputProps> {
  static defaultProps: Partial<InputProps> = {
    className: '',
    type: 'text',
    placeholder: '',
    color: 'default',
    disabled: false,
    required: false,
  };

  /**
   * return the instance of the eventual icon
   * @returns {React.ReactNode}
   */
  private getIconInstance(showError: boolean = false): React.ReactNode {
    const { icon, color } = this.props;
    const classes = 'input-icon';

    if (showError) {
      return <Icon name="icon_close" color="danger" className={classes}/>;
    }

    if (icon && !showError) {

      if (icon && typeof icon !== 'string' && (icon.type)) {
        const iconAttributes = { ...icon.props, className: classes };
        return React.cloneElement(icon as ReactElement<IconProps>, iconAttributes as Attributes);
      }

      if (icon && typeof icon === 'string') {
        return <Icon name={icon} color={color} className={classes}/>;
      }
    }

    return null;
  }

  render() {
    const {
      type, placeholder, required, value, className, id, name, onBlur, onChange, onFocus, disabled, color, icon, label,
      iconPosition, helpText, error, style,
    } = this.props;

    const classes = classNames('bi bi-input', `input-${!!error ? 'danger' : color}`, {
      disabled,
      'has-error': !!error,
      'has-icon': !!icon || !!error,
      'icon-left': iconPosition === 'left',
    }, className);

    return (
      <div className={classes} style={style}>
        {label && <Label text={label} color={error ? 'danger' : 'default'} required={required}/>}
        {(type === 'text' || type === 'password') && (
          <TextInput
            id={id}
            name={name}
            placeholder={placeholder}
            value={value as string}
            type={type}
            disabled={disabled}
            required={required}
            onFocus={onFocus}
            onChange={onChange}
            onBlur={onBlur}
          />
        )}
        {type === 'number' && (
          <NumberInput
            id={id}
            name={name}
            placeholder={placeholder}
            value={value as number}
            disabled={disabled}
            required={required}
            onFocus={onFocus}
            onChange={onChange}
            onBlur={onBlur}
          />
        )}
        {(icon || error) && this.getIconInstance(!!error)}
        {error && typeof error === 'string' && <p className="bi-input-error">{error}</p>}
        {helpText && <HelpText text={helpText}/>}
      </div>
    );
  }
}

export default Input;

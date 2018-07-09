import React, { Component } from 'react';
import classNames from 'classnames';

// components
import Label from '../../_Label';
import HelpText from '../../_HelpText';

// utils
import { generateCallback } from '../../../../common';

// styles
import '../styles/textarea.scss';

// types
import { Color, Callback, Style } from '../../../../shared';

export type TextAreaProps = {
  value?: string,
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
   * specifies the component's label
   */
  label?: string,
  /**
   * defines the component's placeholder
   */
  placeholder?: string,
  /**
   * specifies the component's color
   * @default 'default'
   */
  color?: Color,
  /**
   * shows an helping text right below the component
   */
  helpText?: string,
  /**
   * specifies the component's rows (component's height)
   * @default 3
   */
  rows?: number,
  /**
   * specifies the component's width (component's width)
   */
  cols?: number,
  /**
   * specifies if the component should automatically get focus when the page loads
   * @default false
   */
  autofocus?: boolean,
  /**
   * specifies whether the component should be disabled or not
   */
  disabled?: boolean,
  /**
   * specifies whether the textarea is required or not
   */
  required?: boolean,
  /**
   * a callback to be performed on each key pressed within the component
   */
  onChange?: Callback<Event, string>,
  /**
   * @ignore
   */
  className?: string,
  /**
   * @ignore
   */
  style?: Style,
};

type TextAreaState = {
  focused: boolean,
};

/**
 * A TextArea component defines a multi-line text input.
 */
class TextArea extends Component<TextAreaProps, TextAreaState> {
  static defaultProps: Partial<TextAreaProps> = {
    color: 'default',
    autofocus: false,
    disabled: false,
    rows: 3,
  };

  state = { focused: false };

  render() {
    const { focused } = this.state;
    const {
      name, id, color, value, label, placeholder, helpText, rows, cols, onChange, autofocus, disabled, required,
      className, style,
    } = this.props;

    const classes = classNames('bi bi-textarea', `textarea-${color}`, {
      disabled,
      required,
      focused,
      inline: !!cols,
    }, className);

    return (
      <div className={classes} style={style}>
        {label && <Label text={label} color={color} required={required}/>}
        <div className="textarea-item">
          <textarea
            id={id}
            name={name}
            rows={rows}
            cols={cols}
            placeholder={placeholder}
            disabled={disabled}
            autoFocus={autofocus}
            required={required}
            value={value}
            onFocus={() => this.setState({ focused: true })}
            onBlur={() => this.setState({ focused: false })}
            onChange={event => generateCallback(event, onChange)}
          />
        </div>
        {helpText && <HelpText text={helpText}/>}
      </div>
    );
  }
}

export default TextArea;

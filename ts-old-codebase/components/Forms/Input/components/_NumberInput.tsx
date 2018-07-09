import React, { SyntheticEvent, PureComponent, RefObject } from 'react';
import Button from '../../../Elements/Button/index';
import { Callback } from '../../../../shared';
import generateCallback from '../../../../common/generateCallback/generateCallback';

type NumberInputProps = {
  id?: string,
  name?: string,
  placeholder?: string,
  value?: number,
  disabled?: boolean,
  required?: boolean,
  onFocus?: Callback<Event, number>,
  onChange?: Callback<Event, number>,
  onBlur?: Callback<Event, number>,
};

class NumberInput extends PureComponent<NumberInputProps> {

  static defaultProps: Partial<NumberInputProps> = {
    value: 0,
  };

  private inputRef: RefObject<HTMLInputElement> = React.createRef();

  private handleChange = (event: SyntheticEvent<HTMLInputElement>) => {
    const { onChange } = this.props;
    const value = +event.currentTarget.value;

    if (!isNaN(value) && onChange) {
      onChange(event.nativeEvent, value);
    }
  }

  private subtract = (event: Event) => {
    const { onChange } = this.props;
    const value: number = !!this.inputRef.current ? +this.inputRef.current.value : 0;

    if (onChange) {
      onChange(event, value - 1);
    }
  }

  private sum = (event: Event) => {
    const { onChange } = this.props;
    const value: number = !!this.inputRef.current ? +this.inputRef.current.value : 0;

    if (onChange) {
      onChange(event, value + 1);
    }
  }

  render() {
    const { id, name, placeholder, value, disabled, required, onBlur, onFocus } = this.props;

    return (
      <div className="input-number">
        <Button icon="icon_minus_alt2" className="min-btn" onClick={this.subtract}/>
        <input
          id={id}
          name={name}
          type="number"
          className="bi-input-control"
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          required={required}
          onFocus={event => generateCallback(event, onFocus)}
          onChange={this.handleChange}
          onBlur={event => generateCallback(event, onBlur)}
          ref={this.inputRef}
        />
        <Button icon="icon_plus_alt2" className="plus-btn" onClick={this.sum}/>
      </div>
    );
  }
}

export default NumberInput;

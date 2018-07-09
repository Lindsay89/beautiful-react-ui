import React from 'react';
import { Callback } from '../../../../shared';
import { generateCallback } from '../../../../common';

type TextInputProps = {
  id?: string,
  name?: string,
  placeholder?: string,
  value?: string,
  disabled?: boolean,
  required?: boolean,
  type?: 'password' | 'text',
  onFocus?: Callback<Event, string>,
  onChange?: Callback<Event, string>,
  onBlur?: Callback<Event, string>,
};

const TI = ({ id, name, type, placeholder, value, disabled, required, onBlur, onChange, onFocus }: TextInputProps) => (
  <input
    id={id}
    name={name}
    type={type}
    className="bi-input-control"
    placeholder={placeholder}
    value={value}
    disabled={disabled}
    required={required}
    onFocus={event => generateCallback(event, onFocus)}
    onChange={event => generateCallback(event, onChange)}
    onBlur={event => generateCallback(event, onBlur)}
  />
);

export default TI;

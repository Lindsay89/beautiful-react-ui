import React, { Component } from 'react';

// components
import Input, { InputProps } from './Input';

type InputState = {
  value: string | number,
};

class InputStateful extends Component<InputProps, InputState> {
  state = { value: this.props.value || '' };

  handleCallback = (event: Event, value: string | number) => {
    const { onChange } = this.props;

    this.setState({ value }, () => onChange && onChange(event, this.state.value));
  }

  render() {
    const { value } = this.state;
    return (
      <Input {...this.props} value={value} onChange={this.handleCallback}/>
    );
  }
}

export default InputStateful;

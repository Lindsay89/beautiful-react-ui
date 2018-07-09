import React, { Component } from 'react';
import { default as ToggleGroup, ToggleGroupProps } from './ToggleGroup';

export type ToggleGroupStatefulProps = ToggleGroupProps & { defaultValue?: string | number };

type ToggleGroupStatefulState = {
  value?: number | string;
};

class ToggleGroupStateful extends Component<ToggleGroupStatefulProps, ToggleGroupStatefulState> {

  state: ToggleGroupStatefulState = { value: this.props.defaultValue };

  handleChange = (event: Event, value: number | string) => {
    const { onChange } = this.props;

    this.setState({ value }, () => {
      if (onChange) onChange(event, value);
    });
  }

  render() {
    const { value } = this.state;
    return <ToggleGroup {...this.props} value={value} onChange={this.handleChange}/>;
  }
}

export default ToggleGroupStateful;

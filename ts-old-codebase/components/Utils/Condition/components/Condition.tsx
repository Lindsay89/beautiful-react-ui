import React, { PureComponent } from 'react';

type ConditionProps = {
  test: boolean,
};

class Condition extends PureComponent<ConditionProps> {
  render() {
    const { test, children } = this.props;

    return test ? children : null;
  }
}

export default Condition;

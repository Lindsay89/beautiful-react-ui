import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CloseIcon from '.';

describe('CloseIcon private component', () => {
  afterEach(cleanup);

  it('should render without explode', () => {
    const { container } = render(<CloseIcon />);

    should.exist(container);
    expect(container.querySelector('svg')).to.exist;
  });
});

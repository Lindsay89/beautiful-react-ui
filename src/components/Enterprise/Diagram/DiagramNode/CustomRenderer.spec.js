import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CustomRenderer from './CustomRenderer';

describe('CustomRenderer component', () => {
  afterEach(cleanup);

  const renderer = () => <div />;

  it('should render without explode', () => {
    const { container } = render(<CustomRenderer renderer={renderer} />);

    should.exist(container);
    expect(container.querySelector('div')).to.exist;
  });
});

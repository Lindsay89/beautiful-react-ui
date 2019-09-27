import React from 'react';
import { cleanup, render } from '@testing-library/react';
import Title from './Title';

describe('Title component', () => {
  afterEach(() => {
    sinon.restore();
    cleanup();
  });

  it('should render without explode', () => {
    const { container } = render(<Title>Foo</Title>);

    expect(container).to.exist;
    expect(container.querySelector('.bi-title')).to.exist;
  });

  it('should have default classes', () => {
    const { container } = render(<Title>Foo</Title>);
    const titleComp = container.querySelector('h1');

    expect(titleComp.classList.contains('bi-title')).to.be.true;
  });

  it('should accept custom classes', () => {
    const { container } = render(<Title className="foo">Foo</Title>);
    const titleComp = container.querySelector('.bi-title');

    expect(titleComp.classList.contains('foo')).to.be.true;
  });
});

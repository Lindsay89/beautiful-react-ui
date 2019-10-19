import React from 'react';
import { cleanup, render } from '@testing-library/react';
import Title from './Title';

describe('Title component', () => {
  afterEach(cleanup);

  it('should render without explode', () => {
    const { container } = render(<Title>Foo</Title>);

    expect(container).to.exist;
    expect(container.querySelector('.bi-title')).to.exist;
  });

  it('should have default classes', () => {
    const { container } = render(<Title>Foo</Title>);
    const titleEl = container.querySelector('h1');

    expect(titleEl.classList.contains('bi-title')).to.be.true;
  });

  it('should accept custom classes', () => {
    const { container } = render(<Title className="foo">Foo</Title>);
    const titleEl = container.querySelector('.bi-title');

    expect(titleEl.classList.contains('foo')).to.be.true;
  });

  it('should allow to change the title color by accepting a \'color\' prop', () => {
    const { container, rerender } = render(<Title color="primary">Foo</Title>);
    const titleEl = container.querySelector('.bi-title');

    expect(titleEl.classList.contains('bi-title-primary')).to.be.true;

    rerender(<Title>Foo</Title>);

    expect(titleEl.classList.contains('bi-title-primary')).to.be.false;
  });

  it('should allow to align the text by accepting a \'textAlign\' prop', () => {
    const { container } = render(<Title textAlign="center">Foo</Title>);
    const titleEl = container.querySelector('.bi-title');

    expect(titleEl.classList.contains('bi-title-center')).to.be.true;
  });
});

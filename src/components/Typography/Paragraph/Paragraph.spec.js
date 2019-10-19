import React from 'react';
import { cleanup, render } from '@testing-library/react';
import Paragraph from './Paragraph';

describe('Paragraph component', () => {
  afterEach(cleanup);

  it('should render without explode', () => {
    const { container } = render(<Paragraph>Foo</Paragraph>);

    expect(container).to.exist;
    expect(container.querySelector('.bi-p')).to.exist;
  });

  it('should have default classes', () => {
    const { container } = render(<Paragraph>Foo</Paragraph>);
    const titleEl = container.querySelector('p');

    expect(titleEl.classList.contains('bi-p')).to.be.true;
  });

  it('should accept custom classes', () => {
    const { container } = render(<Paragraph className="foo">Foo</Paragraph>);
    const titleEl = container.querySelector('.bi-p');

    expect(titleEl.classList.contains('foo')).to.be.true;
  });

  it('should allow to change the title color by accepting a \'color\' prop', () => {
    const { container, rerender } = render(<Paragraph color="primary">Foo</Paragraph>);
    const titleEl = container.querySelector('.bi-p');

    expect(titleEl.classList.contains('bi-p-primary')).to.be.true;

    rerender(<Paragraph>Foo</Paragraph>);

    expect(titleEl.classList.contains('bi-p-primary')).to.be.false;
  });

  it('should allow to align the text by accepting a \'textAlign\' prop', () => {
    const { container } = render(<Paragraph textAlign="justify">Foo</Paragraph>);
    const titleEl = container.querySelector('.bi-p');

    expect(titleEl.classList.contains('bi-p-justify')).to.be.true;
  });
});

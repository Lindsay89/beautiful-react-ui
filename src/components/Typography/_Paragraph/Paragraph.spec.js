import React from 'react';
import { cleanup, render } from '@testing-library/react';
import Paragraph from './Paragraph';

describe('Paragraph component', () => {
  afterEach(() => {
    sinon.restore();
    cleanup();
  });

  it('should render without explode', () => {
    const { container } = render(<Paragraph>Foo</Paragraph>);

    expect(container).to.exist;
    expect(container.querySelector('.bi-p')).to.exist;
  });

  it('should have default classes', () => {
    const { container } = render(<Paragraph>Foo</Paragraph>);
    const paragraphComp = container.querySelector('p');

    expect(paragraphComp.classList.contains('bi-p')).to.be.true;
  });

  it('should accept custom classes', () => {
    const { container } = render(<Paragraph className="foo">Foo</Paragraph>);
    const paragraphComp = container.querySelector('.bi-p');

    expect(paragraphComp.classList.contains('foo')).to.be.true;
  });
});

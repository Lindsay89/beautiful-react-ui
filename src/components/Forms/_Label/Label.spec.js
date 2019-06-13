import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Label from '.';

describe('Label component', () => {
  afterEach(cleanup);

  it('should render without explode', () => {
    const { container } = render(<Label htmlFor="foo" text="bar" />);

    should.exist(container);
    expect(container.querySelector('label')).to.exist;
  });

  it('should have default classes', () => {
    const { container } = render(<Label htmlFor="foo" text="bar" />);
    const label = container.querySelector('label');

    expect(label.getAttribute('class').split(' ')).to.include.members(['bi', 'bi-label', 'label-default']);
  });

  it('should accept an "id" prop', () => {
    const { container } = render(<Label htmlFor="foo" text="bar" id="foo" />);
    const label = container.querySelector('label');

    expect(label.id).to.equal('foo');
  });

  it('should allow adding custom classes', () => {
    const { container } = render(<Label htmlFor="foo" text="bar" className="foo" />);
    const label = container.querySelector('label');

    expect(label.getAttribute('class').split(' ')).to.include.members(['foo']);
  });

  it('should allow to define custom style', () => {
    const { container } = render(<Label htmlFor="foo" text="bar" style={{ margin: '10px' }} />);
    const label = container.querySelector('label');

    expect(label.getAttribute('style')).to.equal('margin: 10px;');
  });

  it('must have an htmlFor prop', () => {
    const { container } = render(<Label htmlFor="foo" text="bar" />);
    const label = container.querySelector('label');

    expect(label.getAttribute('for')).to.equal('foo');
  });

  it('must have a text prop', () => {
    const { getByText } = render(<Label htmlFor="foo" text="bar" />);
    const possibleLabel = getByText(/bar/);

    expect(possibleLabel.tagName).to.equal('LABEL');
    expect(possibleLabel.textContent).to.equal('bar');
  });

  it('can render and wrap an input tag', () => {
    const { container } = render(<Label htmlFor="foo" text="bar"><input type="hidden" id="foo" /></Label>);
    const label = container.querySelector('label');

    expect(label.querySelector('input')).to.exist;
  });

  it('should allow to define the label color', () => {
    const { container, rerender } = render(<Label htmlFor="foo" text="bar" color="primary" />);
    const label = container.querySelector('label');

    expect(label.getAttribute('class').split(' ')).to.include.members(['label-primary']);
    expect(label.getAttribute('class').split(' ')).to.not.include.members(['label-default']);

    rerender(<Label htmlFor="foo" text="bar" color="warning" />);
    expect(label.getAttribute('class').split(' ')).to.include.members(['label-warning']);

    rerender(<Label htmlFor="foo" text="bar" />);
    expect(label.getAttribute('class').split(' ')).to.include.members(['label-default']);
    expect(label.getAttribute('class').split(' ')).to.not.include.members(['label-primary', 'label-warning']);
  });

  it('can be required', () => {
    const { container, getByText } = render(<Label htmlFor="foo" text="bar" required />);
    const label = container.querySelector('label');

    expect(label.querySelector('span')).to.exist;
    expect(getByText(/\*/).tagName).to.equal('SPAN');
  });
});

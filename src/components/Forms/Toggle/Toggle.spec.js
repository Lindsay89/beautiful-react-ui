import React from 'react';
import noop from 'lodash/noop';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Toggle from '.';

describe('Toggle component', () => {
  afterEach(() => {
    sinon.restore();
    cleanup();
  });

  it('should render without explode', () => {
    const { container } = render(<Toggle value={false} onChange={noop} />);

    should.exist(container);
    expect(container.querySelector('span')).to.exist;
  });

  it('should have default classes', () => {
    const { container } = render(<Toggle value={false} onChange={noop} />);
    const toggle = container.querySelector('span');

    expect(toggle.getAttribute('class').split(' ')).to.include.members(['bi', 'bi-toggle', 'toggle-default']);
  });

  it('should accept an "id" prop', () => {
    const { container } = render(<Toggle value={false} onChange={noop} id="foo" />);
    const toggle = container.querySelector('span');

    expect(toggle.id).to.equal('foo');
  });

  it('should allow adding custom classes', () => {
    const { container } = render(<Toggle value={false} onChange={noop} className="foo" />);
    const toggle = container.querySelector('span');

    expect(toggle.getAttribute('class').split(' ')).to.include.members(['foo']);
  });

  it('should allow to define custom style', () => {
    const { container } = render(<Toggle value={false} onChange={noop} style={{ margin: '10px' }} />);
    const toggle = container.querySelector('span');

    expect(toggle.getAttribute('style')).to.equal('margin: 10px;');
  });

  it('should have an input field (even if hidden) of type checkbox', () => {
    const { container } = render(<Toggle value={false} onChange={noop} />);
    const input = container.querySelector('input');

    expect(input).to.exist;
    expect(input.type).to.equal('checkbox');
  });

  it('should allow to define a custom input name (even if input is hidden)', () => {
    const { container } = render(<Toggle value={false} onChange={noop} name="foo" />);

    expect(container.querySelector('input').name).to.equal('foo');
  });

  it('should allow to define a custom label', () => {
    const { getByText } = render(<Toggle value={false} onChange={noop} label="foo" />);
    const possibleLabel = getByText(/foo/);

    expect(possibleLabel.tagName).to.equal('LABEL');
    expect(possibleLabel.textContent).to.equal('foo');
  });

  it('should allow to define a custom helpText', () => {
    const { getByText } = render(<Toggle value={false} onChange={noop} helpText="foo" />);
    const possibleLabel = getByText(/foo/);

    expect(possibleLabel.tagName).to.equal('P');
    expect(possibleLabel.textContent).to.equal('foo');
  });

  it('should allow to define the toggle color', () => {
    const { container, rerender } = render(<Toggle value={false} onChange={noop} color="primary" />);
    const toggle = container.querySelector('.bi.bi-toggle');

    expect(toggle.getAttribute('class').split(' ')).to.include.members(['toggle-primary']);
    expect(toggle.getAttribute('class').split(' ')).to.not.include.members(['toggle-default']);

    rerender(<Toggle value={false} onChange={noop} color="warning" />);
    expect(toggle.getAttribute('class').split(' ')).to.include.members(['toggle-warning']);

    rerender(<Toggle value={false} onChange={noop} />);
    expect(toggle.getAttribute('class').split(' ')).to.include.members(['toggle-default']);
    expect(toggle.getAttribute('class').split(' ')).to.not.include.members(['toggle-primary', 'toggle-warning']);
  });

  it('should allow to define the toggle size', () => {
    const { container, rerender } = render(<Toggle value={false} onChange={noop} size="small" />);
    const toggle = container.querySelector('.bi.bi-toggle');

    expect(toggle.getAttribute('class').split(' ')).to.include.members(['toggle-sm']);

    rerender(<Toggle value={false} onChange={noop} size="large" />);
    expect(toggle.getAttribute('class').split(' ')).to.include.members(['toggle-lg']);

    rerender(<Toggle value={false} onChange={noop} />);
    expect(toggle.getAttribute('class').split(' ')).to.not.include.members(['toggle-lg', 'toggle-sm']);
  });

  it('should allow to define the toggle value', () => {
    const { container, rerender } = render(<Toggle value={false} onChange={noop} />);
    const toggle = container.querySelector('.bi.bi-toggle');

    expect(toggle.getAttribute('class').split(' ')).to.not.include.members(['toggled']);

    rerender(<Toggle value onChange={noop} />);
    expect(toggle.getAttribute('class').split(' ')).to.include.members(['toggled']);
  });

  it('should perform a callback on toggle change', () => {
    const onChangeSpy = sinon.spy();
    const value = false;
    const { container } = render(<Toggle value={value} onChange={onChangeSpy} />);
    const toggleBtn = container.querySelector('.bi.bi-toggle .toggle-switch');

    fireEvent.click(toggleBtn);
    const firstCallArgs = onChangeSpy.args[0];

    expect(onChangeSpy.callCount).to.equal(1);
    expect(firstCallArgs[0]).to.be.instanceOf(MouseEvent);
    expect(firstCallArgs[1]).to.be.equal(!value);
  });
});

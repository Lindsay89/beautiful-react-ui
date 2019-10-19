import React from 'react';
import noop from 'lodash/noop';
import { render, cleanup, wait, fireEvent } from '@testing-library/react';
import Checkbox from '.';

describe('Checkbox component', () => {
  afterEach(() => {
    sinon.restore();
    cleanup();
  });

  it('it should render without explode', () => {
    const { container } = render(<Checkbox value={false} onChange={noop} label="Foo" />);

    should.exist(container);
    expect(container.querySelector('.bi.bi-checkbox')).to.exist;
  });

  it('should have default classes', () => {
    const { container } = render(<Checkbox value={false} onChange={noop} label="Foo" />);
    // using div just to test if it has default classes
    const checkboxEl = container.querySelector('div');

    expect(checkboxEl.classList.contains('bi')).to.be.true;
    expect(checkboxEl.classList.contains('bi-checkbox')).to.be.true;
    expect(checkboxEl.classList.contains('checkbox-default')).to.be.true;
  });

  it('should accept an "id" prop', () => {
    const { container } = render(<Checkbox value={false} onChange={noop} label="Foo" id="foo" />);
    const actualInputTag = container.querySelector('.bi.bi-checkbox input');

    expect(actualInputTag.id).to.equal('foo');
  });

  it('should allow adding custom classes', () => {
    const { container } = render(<Checkbox value={false} onChange={noop} label="Foo" className="foo" />);
    const checkboxEl = container.querySelector('.bi.bi-checkbox');

    expect(checkboxEl.classList.contains('foo')).to.be.true;
  });

  it('should allow to define custom style', () => {
    const { container } = render(<Checkbox value={false} onChange={noop} label="Foo" style={{ margin: '10px' }} />);
    const checkboxEl = container.querySelector('.bi.bi-checkbox');

    expect(checkboxEl.getAttribute('style')).to.equal('margin: 10px;');
  });

  it('should pass the value prop down to the actual input tag', () => {
    const { container } = render(<Checkbox value={false} onChange={noop} label="Foo" />);
    const actualInputTag = container.querySelector('.bi.bi-checkbox input');

    expect(actualInputTag.checked).to.equal(false);
  });

  it('should show a label', () => {
    const { getByText } = render(<Checkbox value={false} onChange={noop} label="Foo" />);
    const labelTag = getByText('Foo');

    expect(labelTag).to.exist;
    expect(labelTag.classList.contains('bi-label')).to.be.true;
  });

  it('should allow to define the checkbox color', () => {
    const { container, rerender } = render(<Checkbox value={false} onChange={noop} label="Foo" color="primary" />);
    const checkboxEl = container.querySelector('.bi.bi-checkbox');

    expect(checkboxEl.classList.contains('checkbox-primary')).to.be.true;
    expect(checkboxEl.classList.contains('checkbox-default')).to.not.be.true;

    rerender(<Checkbox value={false} onChange={noop} label="Foo" color="warning" />);
    expect(checkboxEl.classList.contains('checkbox-warning')).to.be.true;

    rerender(<Checkbox value={false} onChange={noop} label="Foo" />);
    expect(checkboxEl.classList.contains('checkbox-default')).to.be.true;
    expect(checkboxEl.classList.contains('checkbox-primary')).to.not.be.true;
    expect(checkboxEl.classList.contains('checkbox-warning')).to.not.be.true;
  });

  it('should possibly show a helping text', () => {
    const helpText = 'Help text';
    const { getByText } = render(<Checkbox value={false} onChange={noop} label="Foo" helpText={helpText} />);
    const helpTextComponent = getByText(helpText);

    expect(helpTextComponent).to.exist;
    expect(helpTextComponent.classList.contains('bi-helptext')).to.equal(true);
  });

  it('should perform the onChange callback when the checkbox value changes', () => {
    const onChange = sinon.spy();
    const { container } = render(<Checkbox value={false} onChange={onChange} />);
    const checkboxEl = container.querySelector('.bi.bi-checkbox');

    fireEvent.click(checkboxEl);

    wait(() => expect(onChange.called).to.equal(true));
  });

  it('should not perform the onChange callback if the checkbox is disabled', () => {
    const onChange = sinon.spy();
    const { container } = render(<Checkbox value={false} onChange={onChange} disabled />);
    const checkboxEl = container.querySelector('.bi.bi-checkbox');

    fireEvent.click(checkboxEl);

    wait(() => expect(onChange.called).to.equal(false));
  });
});

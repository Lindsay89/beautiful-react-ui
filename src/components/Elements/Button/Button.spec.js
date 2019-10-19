import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Button from '.';
import Pill from '../Pill';

describe('Button component', () => {
  afterEach(() => {
    sinon.restore();
    cleanup();
  });

  it('should render without explode', () => {
    const { container } = render(<Button />);

    should.exist(container);
    expect(container.querySelector('button')).to.exist;
  });

  it('should have default classes', () => {
    const { container } = render(<Button>Hello Button</Button>);
    const button = container.querySelector('button');

    expect(button.getAttribute('class').split(' ')).to.include.members(['bi', 'bi-btn', 'btn-default']);
  });

  it('should accept an "id" prop', () => {
    const { container } = render(<Button id="foo">Hello Button</Button>);
    const button = container.querySelector('button');

    expect(button.id).to.equal('foo');
  });

  it('should allow adding custom classes', () => {
    const { container } = render(<Button className="foo">Hello Button</Button>);
    const button = container.querySelector('button');

    expect(button.getAttribute('class').split(' ')).to.include.members(['foo']);
  });

  it('should allow to define custom style', () => {
    const { container } = render(<Button style={{ margin: '10px' }}>Hello Button</Button>);
    const button = container.querySelector('button');

    expect(button.getAttribute('style')).to.equal('margin: 10px;');
  });

  it('should render the given child string', () => {
    const { getByText } = render(<Button>Hello Button</Button>);

    expect(getByText(/Hello Button/).textContent).to.equal('Hello Button');
  });

  it('should have a default button type', () => {
    const { container } = render(<Button>Hello Button</Button>);
    const button = container.querySelector('button');

    expect(button.getAttribute('type')).to.equal('button');
  });

  it('should allow to change the default button type', () => {
    const { container, rerender } = render(<Button type="submit">Hello Button</Button>);
    const button = container.querySelector('button');

    expect(button.getAttribute('type')).to.equal('submit');

    rerender(<Button type="reset">Hello Button</Button>);
    expect(button.getAttribute('type')).to.equal('reset');
  });

  it('should allow to define the button color', () => {
    const { container, rerender } = render(<Button color="primary">Hello Button</Button>);
    const button = container.querySelector('button');

    expect(button.getAttribute('class').split(' ')).to.include.members(['btn-primary']);
    expect(button.getAttribute('class').split(' ')).to.not.include.members(['btn-default']);

    rerender(<Button color="warning">Hello Button</Button>);
    expect(button.getAttribute('class').split(' ')).to.include.members(['btn-warning']);

    rerender(<Button>Hello Button</Button>);
    expect(button.getAttribute('class').split(' ')).to.include.members(['btn-default']);
    expect(button.getAttribute('class').split(' ')).to.not.include.members(['btn-primary', 'btn-warning']);
  });

  it('should allow to define the button size', () => {
    const { container, rerender } = render(<Button size="small">Hello Button</Button>);
    const button = container.querySelector('button');

    expect(button.getAttribute('class').split(' ')).to.include.members(['btn-sm']);

    rerender(<Button size="large">Hello Button</Button>);
    expect(button.getAttribute('class').split(' ')).to.include.members(['btn-lg']);

    rerender(<Button>Hello Button</Button>);
    expect(button.getAttribute('class').split(' ')).to.not.include.members(['btn-lg', 'btn-sm']);
  });

  it('should allow to define whether the button have outlines or not', () => {
    const { container, rerender } = render(<Button outline>Hello Button</Button>);
    const button = container.querySelector('button');

    expect(button.getAttribute('class').split(' ')).to.include.members(['btn-default', 'btn-outline']);

    rerender(<Button outline={false}>Hello Button</Button>);
    expect(button.getAttribute('class').split(' ')).to.not.include.members(['btn-outline']);
  });

  it('should allow to define whether the button is rounded or not', () => {
    const { container, rerender } = render(<Button rounded>Hello Button</Button>);
    const button = container.querySelector('button');

    expect(button.getAttribute('class').split(' ')).to.include.members(['btn-rounded']);

    rerender(<Button rounded={false}>Hello Button</Button>);

    expect(button.getAttribute('class').split(' ')).to.not.include.members(['btn-rounded']);
  });

  it('should allow to define whether the button is disabled or not', () => {
    const { container, rerender } = render(<Button disabled>Hello Button</Button>);
    const button = container.querySelector('button');

    expect(button.getAttribute('disabled')).to.equal('');

    rerender(<Button disabled={false}>Hello Button</Button>);

    expect(button.getAttribute('disabled')).to.be.null;
  });

  it('should allow to define whether the button is full width (block) or not', () => {
    const { container, rerender } = render(<Button block>Hello Button</Button>);
    const button = container.querySelector('button');

    expect(button.getAttribute('class').split(' ')).to.include.members(['btn-block']);
    rerender(<Button block={false}>Hello Button</Button>);

    expect(button.getAttribute('class').split(' ')).to.not.include.members(['btn-block']);
  });

  it('should allow to define the hover animation effect', () => {
    const { container, rerender } = render(<Button hover>Hello Button</Button>);
    const button = container.querySelector('button');

    expect(button.getAttribute('class').split(' ')).to.include.members(['btn-he-float']);

    rerender(<Button hover="round">Hello Button</Button>);
    expect(button.getAttribute('class').split(' ')).to.include.members(['btn-he-rnd']);

    rerender(<Button hover="zoom">Hello Button</Button>);
    expect(button.getAttribute('class').split(' ')).to.include.members(['btn-he-zoom']);

    rerender(<Button hover="shrink">Hello Button</Button>);
    expect(button.getAttribute('class').split(' ')).to.include.members(['btn-he-shrink']);

    rerender(<Button hover="reflection">Hello Button</Button>);
    expect(button.getAttribute('class').split(' ')).to.include.members(['btn-he-refl']);
  });

  it('should allow to perform a callback on click', () => {
    const onClickSpy = sinon.spy();
    const { container } = render(<Button onClick={onClickSpy}>Hello Button</Button>);
    const button = container.querySelector('button');

    fireEvent.click(button);

    const firstCallArgs = onClickSpy.args[0];

    expect(onClickSpy.callCount).to.equal(1);
    expect(firstCallArgs[0]).to.exist;
  });

  it('should possibly render an icon', () => {
    const { container } = render(<Button icon="heart" />);
    const icon = container.querySelector('button').querySelector('svg');

    expect(icon.getAttribute('class').split(' ')).to.include.members(['fa-heart', 'bi', 'bi-icon']);
  });

  it('should possibly render an spinner', () => {
    const { container } = render(<Button spinner />);
    const button = container.querySelector('button');

    expect(button.querySelector('.bi.bi-spinner')).to.exist;
  });

  it('should possibly render a pill if given as a string', () => {
    const { container } = render(<Button pill="join us!" />);
    const pill = container.querySelector('button').querySelector('.bi.bi-pill');

    expect(pill).to.exist;
    expect(pill.tagName).to.equal('SPAN');
  });

  it('should possibly render a pill component if given as a prop', () => {
    const { container } = render(<Button pill={<Pill>join us</Pill>} />);
    const pill = container.querySelector('button').querySelector('.bi.bi-pill');

    expect(pill).to.exist;
    expect(pill.tagName).to.equal('SPAN');
  });
});

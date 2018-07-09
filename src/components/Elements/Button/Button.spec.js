import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Button from '.';

describe('Button component', () => {
  afterEach(cleanup);

  it('should render without explode', () => {
    const { container } = render(<Button />);

    should.exist(container);
    expect(container.querySelector('button')).to.exist;
  });

  it('should render the given child string', () => {
    const { getByText } = render(<Button>Hello Button</Button>);

    expect(getByText(/Hello Button/).textContent).to.equal('Hello Button');
  });

  it('should render default classes', () => {
    const { container } = render(<Button>Hello Button</Button>);
    const button = container.querySelector('button');

    expect(button.getAttribute('class')).to.equal('bi bi-btn btn-default');
  });

  it('should allow adding custom classes', () => {
    const { container } = render(<Button className="foo">Hello Button</Button>);
    const button = container.querySelector('button');

    expect(button.getAttribute('class')).to.equal('bi bi-btn btn-default foo');
  });

  it('should accept an "id" prop', () => {
    const { container } = render(<Button id="foo">Hello Button</Button>);
    const button = container.querySelector('button');

    expect(button.id).to.equal('foo');
  });

  it('should allow to define custom style', () => {
    const { container } = render(<Button style={{ margin: '10px' }}>Hello Button</Button>);
    const button = container.querySelector('button');

    expect(button.getAttribute('style')).to.equal('margin: 10px;');
  });

  it('should allow to define the button color', () => {
    const { container, rerender } = render(<Button color="primary">Hello Button</Button>);
    const button = container.querySelector('button');

    expect(button.getAttribute('class')).to.equal('bi bi-btn btn-primary');

    rerender(<Button color="warning">Hello Button</Button>);

    expect(button.getAttribute('class')).to.equal('bi bi-btn btn-warning');

    rerender(<Button>Hello Button</Button>);

    expect(button.getAttribute('class')).to.equal('bi bi-btn btn-default');
  });

  it('should allow to define the button size', () => {
    const { container, rerender } = render(<Button size="small">Hello Button</Button>);
    const button = container.querySelector('button');

    expect(button.getAttribute('class')).to.equal('bi bi-btn btn-default btn-sm');

    rerender(<Button size="large">Hello Button</Button>);

    expect(button.getAttribute('class')).to.equal('bi bi-btn btn-default btn-lg');

    rerender(<Button>Hello Button</Button>);

    expect(button.getAttribute('class')).to.equal('bi bi-btn btn-default');
  });

  it('should allow to define whether the button have outlines or not', () => {
    const { container, rerender } = render(<Button outline>Hello Button</Button>);
    const button = container.querySelector('button');

    expect(button.getAttribute('class')).to.equal('bi bi-btn btn-default btn-outline');

    rerender(<Button outline={false}>Hello Button</Button>);

    expect(button.getAttribute('class')).to.equal('bi bi-btn btn-default');
  });

  it('should allow to define whether the button is rounded or not', () => {
    const { container, rerender } = render(<Button rounded>Hello Button</Button>);
    const button = container.querySelector('button');

    expect(button.getAttribute('class')).to.equal('bi bi-btn btn-default btn-rounded');

    rerender(<Button rounded={false}>Hello Button</Button>);

    expect(button.getAttribute('class')).to.equal('bi bi-btn btn-default');
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

    expect(button.getAttribute('class')).to.equal('bi bi-btn btn-default btn-block');

    rerender(<Button block={false}>Hello Button</Button>);

    expect(button.getAttribute('class')).to.equal('bi bi-btn btn-default');
  });
});

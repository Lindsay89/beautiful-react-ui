import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Avatar from './Avatar';
import Pill from '../Pill/Pill';

describe('Avatar component', () => {
  afterEach(cleanup);

  it('should render without explode', () => {
    const { container } = render(<Avatar src="foo" />);

    should.exist(container);
    expect(container.querySelector('div')).to.exist;
  });

  it('should have default classes', () => {
    const { container } = render(<Avatar src="foo" />);
    const avatar = container.querySelector('div');

    expect(avatar.getAttribute('class').split(' ')).to.include.members(['bi', 'bi-avatar', 'avt-rounded']);
  });

  it('should accept an "id" prop', () => {
    const { container } = render(<Avatar src="foo" id="foo" />);
    const avatar = container.querySelector('.bi.bi-avatar');

    expect(avatar.id).to.equal('foo');
  });

  it('should allow adding custom classes', () => {
    const { container } = render(<Avatar src="foo" className="foo" />);
    const avatar = container.querySelector('.bi.bi-avatar');

    expect(avatar.getAttribute('class').split(' ')).to.include.members(['foo']);
  });

  it('should allow to define custom style', () => {
    const { container } = render(<Avatar src="foo" style={{ margin: '10px' }} />);
    const avatar = container.querySelector('.bi.bi-avatar');

    expect(avatar.getAttribute('style')).to.equal('margin: 10px;');
  });

  it('should render and image if src prop is provided', () => {
    const { container } = render(<Avatar src="foo" />);
    const avatar = container.querySelector('.bi.bi-avatar');
    const image = avatar.querySelector('img');

    expect(image).to.exist;
    expect(image.getAttribute('src')).to.equal('foo');
  });

  it('should render the initials if the `initial` prop is provided', () => {
    const { container } = render(<Avatar src="foo" initials="ar" />);
    const avatar = container.querySelector('.bi.bi-avatar');
    const initials = avatar.querySelector('.initials');

    expect(initials).to.exist;
  });

  it('should allow to define the avatar size', () => {
    const { container, rerender } = render(<Avatar src="foo" size="small" />);
    const avatar = container.querySelector('.bi.bi-avatar');

    expect(avatar.getAttribute('class').split(' ')).to.include.members(['avt-sm']);

    rerender(<Avatar src="foo" size="large" />);
    expect(avatar.getAttribute('class').split(' ')).to.include.members(['avt-lg']);

    rerender(<Avatar src="foo" />);
    expect(avatar.getAttribute('class').split(' ')).to.not.include.members(['avt-lg', 'avt-sm']);
  });

  it('should allow to define the avatar shape', () => {
    const { container, rerender } = render(<Avatar src="foo" shape="square" />);
    const avatar = container.querySelector('.bi.bi-avatar');

    expect(avatar.getAttribute('class').split(' ')).to.include.members(['avt-square']);

    rerender(<Avatar src="foo" />);
    expect(avatar.getAttribute('class').split(' ')).to.include.members(['avt-rounded']);
  });

  it('should possibly have an alternative text', () => {
    const text = 'lorem ipsum';
    const { container } = render(<Avatar src="foo" alt={text} />);
    const avatar = container.querySelector('.bi.bi-avatar');

    expect(avatar.querySelector('img').getAttribute('alt')).to.equal(text);
  });

  it('should possibly render a pill component if given as a prop', () => {
    const { container } = render(<Avatar src="foo" pill={<Pill>foo</Pill>} />);
    const pill = container.querySelector('.bi.bi-avatar').querySelector('.bi.bi-pill');

    expect(pill).to.exist;
    expect(pill.tagName).to.equal('SPAN');
  });

  it('should possibly render the online or offline state if provided', () => {
    const { container, rerender } = render(<Avatar src="foo" state="online" />);
    const avatar = container.querySelector('.bi.bi-avatar');

    expect(avatar.querySelector('.avt-state')).to.exist;
    expect(avatar.querySelector('.avt-state').getAttribute('class').split(' ')).to.include.members(['state-online']);

    rerender(<Avatar src="foo" state="offline" />);

    expect(avatar.querySelector('.avt-state').getAttribute('class').split(' ')).to.include.members(['state-offline']);
  });

  it('should warn if not src nor initials are provided', () => {
    const warnSpy = sinon.spy(console, 'warn');
    const { container } = render(<Avatar />);
    const avatar = container.querySelector('.bi.bi-avatar');

    expect(avatar).to.not.exist;
    expect(warnSpy.callCount).to.equal(1);
  });
});
